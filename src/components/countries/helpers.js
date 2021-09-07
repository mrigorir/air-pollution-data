import {
  africa, eur, america, oceania, asia,
} from './countries';

const handleSubmit = (e, continent, setCountry) => {
  e.preventDefault();
  switch (continent) {
    case 'Africa':
      setCountry(africa);
      break;
    case 'Asia':
      setCountry(asia);
      break;
    case 'Europe':
      setCountry(eur);
      break;
    case 'Oceania':
      setCountry(oceania);
      break;
    case 'America':
      setCountry(america);
      break;
    default:
      break;
  }
};

export default handleSubmit;
