import React, {useEffect} from 'react'

const Aliexpress = () => {

    async function fetchData(){
        const url = 'https://aliexpress-datahub.p.rapidapi.com/item_search?q=iphone&page=1';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f702601134mshf79e68adfef5401p1bb48djsn4788d2007278',
                'X-RapidAPI-Host': 'aliexpress-datahub.p.rapidapi.com'
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
    <div>Aliexpress</div>
  )
}

export default Aliexpress