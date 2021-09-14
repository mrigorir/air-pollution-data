import countries from './countries';

const handleSubmit = (e, continent, setCountry) => {
  e.preventDefault();
  switch (continent) {
    case 'Africa':
      setCountry(countries[0]);
      break;
    case 'Asia':
      setCountry(countries[1]);
      break;
    case 'Europe':
      setCountry(countries[2]);
      break;
    case 'Oceania':
      setCountry(countries[3]);
      break;
    case 'America':
      setCountry(countries[4]);
      break;
    default:
      break;
  }
};

export default handleSubmit;
