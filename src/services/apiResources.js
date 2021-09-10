import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5/air_pollution';
const apiKey = '3315eaf92889a9bdafadcc9859222565';
let url = '';

const getCountry = (name) => {
  switch (name) {
    case 'Luanda':
      url = `${baseURL}?lat=-8.83833&lon=13.2344&appid=${apiKey}`;
      break;
    case 'Argel':
      url = `${baseURL}?lat=36.7762&lon=3.05997&appid=${apiKey}`;
      break;
    case 'Porto Novo':
      url = `${baseURL}?lat=6.4973&lon=2.6051&appid=${apiKey}`;
      break;
    case 'Gaborone':
      url = `${baseURL}?lat=-24.653257&lon=25.906792&appid=${apiKey}`;
      break;
    case 'Yaundé':
      url = `${baseURL}?lat=3.844119&lon=11.501346&appid=${apiKey}`;
      break;
    case 'Camerún':
      url = `${baseURL}?lat=7.3697&lon=12.35476&appid=${apiKey}`;
      break;
    case 'Japan':
      url = `${baseURL}?lat=36.2048&lon=138.2529&appid=${apiKey}`;
      break;
    case 'China':
      url = `${baseURL}?lat=35.0000&lon=103.0000&appid=${apiKey}`;
      break;
    case 'Indonesia':
      url = `${baseURL}?lat=-6.200000&lon=106.816666&appid=${apiKey}`;
      break;
    case 'India':
      url = `${baseURL}?lat=37.6&lon=68.7&appid=${apiKey}`;
      break;
    case 'Thailand':
      url = `${baseURL}?lat=15.8700&lon=100.9925&appid=${apiKey}`;
      break;
    case 'Singapore':
      url = `${baseURL}?lat=15.8700&lon=100.9925&appid=${apiKey}`;
      break;
    case 'Germany':
      url = `${baseURL}?lat=51.1657&lon=10.4515&appid=${apiKey}`;
      break;
    case 'Italy':
      url = `${baseURL}?lat=41.2925&lon=12.5736&appid=${apiKey}`;
      break;
    case 'France':
      url = `${baseURL}?lat=46.2276&lon=2.2137&appid=${apiKey}`;
      break;
    case 'Belgium':
      url = `${baseURL}?lat=50.50&lon=4.00&appid=${apiKey}`;
      break;
    case 'United Kingdom':
      url = `${baseURL}?lat=30.35&lon=7.5&appid=${apiKey}`;
      break;
    case 'Poland':
      url = `${baseURL}?lat=51.9194&lon=19.1451&appid=${apiKey}`;
      break;
    case 'New Zeland':
      url = `${baseURL}?lat=40.9006&lon=174.8860&appid=${apiKey}`;
      break;
    case 'Austria':
      url = `${baseURL}?lat=47.5162&lon=14.5501&appid=${apiKey}`;
      break;
    case 'Samoa':
      url = `${baseURL}?lat=-13.759029&lon=-172.104629&appid=${apiKey}`;
      break;
    case 'Tonga':
      url = `${baseURL}?lat=-21.178986&lon=-175.198242&appid=${apiKey}`;
      break;
    case 'Palau':
      url = `${baseURL}?lat=7.514980&lon=134.582520&appid=${apiKey}`;
      break;
    case 'Guam':
      url = `${baseURL}?lat=13.444304&lon=144.793732&appid=${apiKey}`;
      break;
    case 'Venezuela':
      url = `${baseURL}?lat=6.42375&lon=-66.58973&appid=${apiKey}`;
      break;
    case 'Chile':
      url = `${baseURL}?lat=-35.675147&lon=-71.542969&appid=${apiKey}`;
      break;
    case 'Cuba':
      url = `${baseURL}?lat=23.113592&lon=-82.366592&appid=${apiKey}`;
      break;
    case 'United States':
      url = `${baseURL}?lat=37.09024&lon=-95.712891&appid=${apiKey}`;
      break;
    case 'Argentina':
      url = `${baseURL}?lat=-34.672501&lon=-58.449722&appid=${apiKey}`;
      break;
    case 'Ecuador':
      url = `${baseURL}?lat=-34.672501&lon=-58.449722&appid=${apiKey}`;
      break;
    default:
      break;
  }
};

const getValues = async () => {
  const response = await axios.get(url);
  const { data } = await response;
  return { ...data.list[0].components, main: data.list[0].main.aqi, dt: data.list[0].dt };
};

export { getCountry, getValues };
