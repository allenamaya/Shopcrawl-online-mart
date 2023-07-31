import React, {useEffect} from 'react'

const Amazon = () => {

    async function fetchData(){
        const url = 'https://amazon-merchant-data.p.rapidapi.com/search-products?term=iphone%2012&country=de';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f702601134mshf79e68adfef5401p1bb48djsn4788d2007278',
                'X-RapidAPI-Host': 'amazon-merchant-data.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchData2(){
        const url = 'https://h-amazon-data-scraper2.p.rapidapi.com/search/MacBook?api_key=70201ee0c8ed29661bc6ae00a84341fb';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f702601134mshf79e68adfef5401p1bb48djsn4788d2007278',
                'X-RapidAPI-Host': 'h-amazon-data-scraper2.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);

            }
    }
    
    useEffect(() => {
        fetchData();
    }, [])
  return (
    <div>Amazon</div>
  )
}

export default Amazon