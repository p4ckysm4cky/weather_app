import React from 'react';
import { queryDaily } from './api/queryWeather';
import TextField from '@mui/material/TextField';
import { Container, Typography } from '@mui/material';
import WeatherCard from './components/WeatherCard';

function App() {
    queryDaily('Auckland').then((value) => {
        console.log(value);
    });
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
            <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                fullWidth={true}
            />
            <WeatherCard />
        </Container>
    );
}

export default App;
