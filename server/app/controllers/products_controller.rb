class ProductsController < ApplicationController

    def search_products
        search_term = params[:search_term]
        puts search_term
        products = scrape_sites(search_term)
        render json: products, status: :ok 
    end

    def scrape_sites(search_term)
        jumia_products = scrape_jumia(search_term)
        jiji = scrape_jiji(search_term)
        ebay_products = scrape_ebay(search_term)  
        
        return [*ebay_products, *jiji, *jumia_products]
    end

    def scrape_ebay(search_term) 
        html = URI.open("https://www.ebay.com/sch/i.html?_nkw=#{search_term.to_s}&_sop=12")
        doc = Nokogiri::HTML(html)
        items = doc.css('.s-item')
        items = items.map do |item|
            {   
                site: "EBAY",
                image: item.css('.s-item__image-wrapper img').map{|elm| elm['src']}[0],
                title: item.css('.s-item__title span').text,
                sub_title: item.css('.s-item__subtitle').text,
                price: item.css('.s-item__price').text.split('$')[1].to_i,
                shipping_cost: item.css('.s-item__shipping').text.split(" ")[0].to_s.split("$")[1].to_i
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
                image: item.css('.img-c img').map{|elem| elem["data-src"]}[0]
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
                title: item.css('.b-advert-title-inner').text,
                image: item.css('.b-list-advert-base__img picture > source').map {|elem| elem['srcset']}[0]
            }
        end
        return items
    end

    def scrape_shopit(search_term)
        html = URI.open("https://shopit.co.ke/?match=all&subcats=Y&pcode_from_q=Y&pshort=Y&pfull=Y&pname=Y&pkeywords=Y&search_performed=Y&q=#{search_term}&dispatch=products.search&security_hash=6908dd946302968b4d27bcdb74c7e7c2")
        doc = Nokogiri::HTML(html)
        items = doc.css('.ut2-gl__body')
        items = items.map do |item|
            {   
                site: "SHOPIT",
                title: item.css('.ut2-gl__name').text,
                image: item.css('.ut2-gl__image img').map{|elm| elm['data-src']}[0]
            }
        end
    end
end
