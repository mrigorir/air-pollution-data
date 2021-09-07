import React, { useState } from 'react';
import Country from './countries/Country';
import hooks from './hooks/hooks';
import handleSubmit from './countries/helpers';
import { africa } from './countries/countries';

function Home() {
  const [continent, setContinent] = useState('Africa');
  const [country, setCountry] = useState([]);

  hooks(africa, setCountry);

  const handleChange = (e) => {
    setContinent(e.target.value);
  };

  const showCountries = (e) => {
    handleSubmit(e, continent, setCountry);
  };

  return (
    <div>
      <form onSubmit={showCountries}>
        <h1>Choose a Continent</h1>
        <select name="continents" required onChange={handleChange}>
          <option value="Africa">    Africa    </option>
          <option value="Asia">      Asia      </option>
          <option value="Europe">    Europe    </option>
          <option value="Oceania">   Oceania   </option>
          <option value="America">   America   </option>
        </select>
        <button type="submit">Choose Continent</button>
      </form>

      <div>
        {country.map((country) => (
          <Country
            key={country.name}
            name={country.name}
            image={country.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
