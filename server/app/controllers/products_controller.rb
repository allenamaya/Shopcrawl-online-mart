class ProductsController < ApplicationController

    def search_products
        search_term = params[:search_term].split(' ').join
        if session.include? :customer_id 
            customer = Customer.find(session[:customer_id])
            customer.search_histories.create(title: search_term)
        end
        # search_term = 'tv'
        products = scrape_sites(search_term)
        render json: products, status: :ok 
    end

    def scrape_sites(search_term)
        jumia_products = scrape_jumia(search_term)
        jiji = scrape_jiji(search_term) 
        ebay_products = scrape_ebay(search_term) 
        aliexpress_products = scrape_aliexpress(search_term)
        return [*jumia_products, *jiji,*ebay_products, *aliexpress_products]
    end

    def scrape_ebay(search_term) 
        html = URI.open("https://www.ebay.com/sch/i.html?_nkw=#{search_term.to_s}&_sop=12")
        doc = Nokogiri::HTML(html)
        items = doc.css('.s-item')
        items = items.map do |item|
    
            {   
                site: "EBAY",
                image: item.css('.s-item__image-wrapper img').map{|elm| elm['src']}[0],
                title: item.css('.s-item__title span').text[0..50],
                sub_title: item.css('.s-item__subtitle').text,
                price: item.css('.s-item__price').text.split('$')[1].to_i * 142,
                shipping_cost: item.css('.s-item__shipping').text.split(" ")[0].to_s.split("$")[1].to_i,
                link: item.css('a').map{|elem| elem['href']}[0]
            }
        
        end
    end

    def scrape_jumia(search_term) 
        html = URI.open("https://www.jumia.co.ke/catalog/?q=#{search_term}")
        doc = Nokogiri::HTML(html)

        items = doc.css('.c-prd')
        items = items.map do |item|
            {   
                site: "JUMIA",
                image: item.css('.img-c img').map{|elem| elem["data-src"]}[0],
                title: item.css('div.info > h3.name').text[0..50],
                price: item.css('div.info > .prc').text.to_s.split(" ")[1].to_s.split(',').join('').to_i,
                link: "https://www.jumia.co.ke".to_s + item.css('a').map{|elem| elem['href']}[0].to_s  
            }
        end
        return items
    end

    

    def scrape_jiji(search_term)
        html = URI.open("https://jiji.co.ke/search?query=#{search_term}")
        doc = Nokogiri::HTML(html)
        items = doc.css('.b-list-advert__item-wrapper')
        items = items.map do |item|
            {   
                site: "JIJI",
                title: item.css('.b-advert-title-inner').text[0..50],
                image: item.css('.b-list-advert-base__img picture > source').map {|elem| elem['srcset']}[0],
                price: item.css('.qa-advert-price').text.split(" ")[1].split(',').join.to_i,
                link: "https://jiji.co.ke".to_s + item.css('a').map{|elm| elm['href']}[0].to_s,
            }
        end
        return items
    end

    def scrape_aliexpress(search_term)
        html = URI.open("https://www.aliexpress.com/w/wholesale-#{search_term}.html")
        doc = Nokogiri::HTML(html)
        items = doc.css('.search-card-item')
        items = items.map do |item|
            {   
                title: item.css('h1').text[0..50],
                image: item.css('img').map{|elm| elm['src']}[0],
                link: item['href'].to_s,
                price: item.css('div.manhattan--price-sale--1CCSZfK').text.split('KES')[1].split(',').join.to_i
            }
        end
    end
end
