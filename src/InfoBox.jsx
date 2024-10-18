import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ weatherData }) {
    return (
        <div className='info'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?cs=srgb&dl=pexels-jplenio-1118873.jpg&fm=jpg"
                    title="City Image"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                        {weatherData?.country || "Country"}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {weatherData?.name || "City"}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                        Temp: {weatherData?.temp || "N/A"}°C
                    </Typography>
                    <br />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                        Max Temp: {weatherData?.temp_max || "N/A"}°C
                    </Typography>
                    <br />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                        Min Temp: {weatherData?.temp_min || "N/A"}°C
                    </Typography>
                    <br />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                        Humidity: {weatherData?.humidity || "N/A"}%
                    </Typography>
                    <br></br>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                        Wind-Degree: {weatherData?.windd || "N/A"}%
                    </Typography>
                    <br></br>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                        Wind-Speed: {weatherData?.winds || "N/A"}%
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
