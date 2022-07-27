import { Card } from '@mui/material';
import { CardHeader } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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
            <CardHeader
                avatar={
                    <Avatar
                        alt="Remy Sharp"
                        src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`}
                    />
                }
                title={props.name}
                subheader={props.weather[0].main}
            />
            <CardContent>
                <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ color: 'primary.main' }}
                >
                    {props.weather[0].description}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Humidity: <b>{props.main.humidity}%</b>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Feels like: <b>{props.main.feels_like}°C</b>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Wind speed: <b>{props.wind.speed} km/hr</b>
                </Typography>
            </CardContent>
        </Card>
    );
}
