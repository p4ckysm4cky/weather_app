import React from 'react';
import { queryDaily } from './api/queryWeather';
import TextField from '@mui/material/TextField';
import { Container, Typography } from '@mui/material';
import WeatherCard from './components/WeatherCard';
import { useState } from 'react';
import { openWeatherType } from './components/WeatherCard';

function App() {
    async function handleSubmit(event: any) {
        // Stop refresh of page on submit
        event.preventDefault();
        const data = await queryDaily(input);
        console.log(data);
        setWeatherData(data);
    }

    const [input, setInput] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    return (
        <Container>
            <Typography
                variant="h2"
                component="h1"
                align="center"
                color="primary"
            >
                Current Weather
            </Typography>
            <form
                noValidate
                autoComplete="off"
                onSubmit={async (event) => {
                    await handleSubmit(event);
                }}
            >
                <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    fullWidth={true}
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
            </form>
            {weatherData ? (
                <WeatherCard {...(weatherData as openWeatherType)} />
            ) : (
                <div></div>
            )}
        </Container>
    );
}

export default App;
