import axios from 'axios';
const WEATHERKEY = process.env.REACT_APP_WEATHERKEY;

export async function queryDaily(city: string) {
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${WEATHERKEY}&units=metric`;
    const response = await axios.get(endpoint);
    return response.data;
}
