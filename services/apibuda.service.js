import axios from 'axios'


const budaApi = axios.create({
    baseURL: 'https://www.buda.com/api/v2',
    timeout: 10000
});

export async function getData() {

    const response = await budaApi.get('/tickers');
    console.log(response.data.tickers)

    return response.data.tickers


}