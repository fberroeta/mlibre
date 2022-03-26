import axios from 'axios';

const baseUrl = 'https://api.mercadolibre.com/sites/MLC/search?category=MLC1459&seller_id=144728354'

const getAll = () => {
    const request = axios.get(baseUrl);
    console.log(request);	
    return request.then(response => response.data.results);
    
};

export default {getAll};