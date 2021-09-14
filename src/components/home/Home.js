import React, { useState } from 'react';
import Country from '../countries/Country';
import hooks from '../hooks/hooks';
import handleSubmit from '../countries/helpers';
import countries from '../countries/countries';
import Form from './Form';

function Home() {
  const [continent, setContinent] = useState('Africa');
  const [country, setCountry] = useState([]);

  hooks(countries, setCountry);

  const handleChange = (e) => {
    setContinent(e.target.value);
  };

  const showCountries = (e) => {
    handleSubmit(e, continent, setCountry);
  };

  return (
    <>
      <div className="row text-white" data-testid="homeContainer">
        <div className="col-md-12 bg-light-red p-5 border border-danger border-4">
          <Form
            submit={showCountries}
            change={handleChange}
            formClass="d-flex align-items-center justify-content-center flex-column"
          />
        </div>
      </div>

      <div className="row bg-light-red text-white fs-2" data-testid="countries">
        <div className="countries text-center p-0">
          {country.map((country, index) => (
            <Country
              key={country.name}
              name={country.name}
              id={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
