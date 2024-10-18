import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBar.css';
import { useState } from 'react';
import InfoBox from './InfoBox';

export default function Search() {
    let [city, setCity] = useState("");
    let [weatherData, setWeatherData] = useState(null);  // State for weather data
    let [error, setError] = useState("");  // State for error message

    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const API_KEY = 'a49d122140ed28956025588e61973078';

    let handleWeather = async () => {
        setError("");  // Reset error message before fetching new data
        let response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );

        // Check if the response is not OK (e.g., city not found)
        if (!response.ok) {
            setError("There is no place in the API");  // Set the error message
            setWeatherData(null);  // Reset weather data
            return;  // Exit the function if there's an error
        }

        let jsonResponse = await response.json();

        // Extract the required data
        let result = {
            country: jsonResponse.sys.country,
            name: jsonResponse.name,
            temp: jsonResponse.main.temp,
            temp_max: jsonResponse.main.temp_max,
            temp_min: jsonResponse.main.temp_min,
            humidity: jsonResponse.main.humidity,
            windd: jsonResponse.wind.deg,
            winds: jsonResponse.wind.speed,

        };
        console.log(jsonResponse);
        // Log the result object
        console.log(result);
        setWeatherData(result);  // Update the state with the fetched weather data
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        handleWeather();
        setCity("");
    }

    return (
        <div className='search'>
            <h3>Search for the Weather!</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="outlined-basic" 
                    label="City" 
                    variant="outlined"  
                    value={city} 
                    onChange={handleChange} 
                    required 
                />
                <br />
                <br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>
            <br />
            {error && (  // Conditional rendering of the error message
                <div style={{ color: 'red', marginTop: '10px' }}>
                    {error}
                </div>
            )}
            <InfoBox weatherData={weatherData} />  {/* Pass the weather data as props */}
        </div>
    );
}
