import { Card } from '@mui/material';
import { CardHeader } from '@mui/material';

export type weatherType = {
    description: string;
    icon: string;
    main: string;
};

// speed is in km
export type openWeatherType = {
    name: string;
    main: {
        humidity: number;
        feels_like: number;
    };
    dt: number;
    wind: {
        speed: number;
    };
    weather: weatherType[];
};

export default function WeatherCard(props: openWeatherType) {
    return (
        <div>
            <p>name: {props.name}</p>
            <p>humidity: {props.main.humidity}</p>
            <p>feels_like: {props.main.feels_like}</p>
            <p>datetime: {props.dt}</p>
            <p>wind speed: {props.wind.speed}</p>
            <p>main: {props.weather[0].main}</p>
            <p>description: {props.weather[0].description}</p>
        </div>
    );
}
