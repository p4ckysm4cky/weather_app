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
        <Card>
            <CardHeader />
        </Card>
    );
}
