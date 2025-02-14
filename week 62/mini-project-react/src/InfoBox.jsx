import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const INIT_URL = "https://unsplash.com/photos/woman-standing-on-green-grass-during-daytime-ChT0vXQkXnk";

    // const HOT_URL = "https://unsplash.com/photos/silhouette-of-mountains-during-golden-hour-7KrWmnpRafw";
    // const COLD_URL = "https://unsplash.com/photos/a-snow-covered-field-with-a-fence-and-snow-covered-ground-duIBVANj-ug";
    // const RAIN_URL = "https://unsplash.com/photos/a-candle-sitting-on-top-of-a-table-next-to-a-window-bcOvL6-Kkws";
    const HOT_URL = "https://images.unsplash.com/photo-1551516594-6b91f8a49d56?w=400&h=300&fit=crop";
    const COLD_URL = "https://images.unsplash.com/photo-1483401755120-15e6a129a5f8?w=400&h=300&fit=crop";
    const RAIN_URL = "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop";

    return (
     <div className="InfoBox">
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city} {info.humidity > 80 ? <ThunderstormIcon />: info.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}
            
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
               <p>Temperature = {info.temp}&deg;C</p>
               <p>Humidity = {info.humidity}</p>
               <p>Min Temp = {info.tempMin}&deg;C</p>
               <p>Max Temp = {info.tempMax}&deg;C</p>
               <p>The weather can be described as <i>{info.weather}</i> feels like {info.feelslike}&deg;C</p>
            </Typography>
        </CardContent>
        </Card>
        </div>
        </div>
    )
}