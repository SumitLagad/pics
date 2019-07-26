import axios from 'axios';


const Unsplash = axios.create(
    {
        baseURL: 'https://api.unsplash.com/',
        headers : {
            Authorization: 'Client-ID YOUR-ACCESS-KEY'
        }
    }    
)

export default Unsplash;