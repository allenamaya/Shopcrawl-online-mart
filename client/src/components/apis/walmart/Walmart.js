import React, {useEffect} from 'react'

const Walmart = () => {

    async function fetchData(){
        const url = 'https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-search-by-keyword?keyword=samsung&page=1&sortBy=best_match';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f702601134mshf79e68adfef5401p1bb48djsn4788d2007278',
                'X-RapidAPI-Host': 'axesso-walmart-data-service.p.rapidapi.com'
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
    })
  return (
    <div>Walmart</div>
  )
}

export default Walmart