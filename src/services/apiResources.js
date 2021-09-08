import axios from 'axios';

const baseURL = 'http://api.openweathermap.org/data/2.5/air_pollution';
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
