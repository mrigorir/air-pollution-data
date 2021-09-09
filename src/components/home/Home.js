import React, { useState } from 'react';
import Country from '../countries/Country';
import hooks from '../hooks/hooks';
import handleSubmit from '../countries/helpers';
import { africa } from '../countries/countries';
import Form from './Form';

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
    <>
      <div className="row text-white">
        <div className="col-md-12 bg-light-red p-5 border border-danger border-4">
          <Form
            submit={showCountries}
            change={handleChange}
            formClass="d-flex align-items-center justify-content-center flex-column"
          />
        </div>
      </div>

      <div className="row bg-light-red text-white fs-2">
        <div className="countries text-center p-0">
          {country.map((country) => (
            <Country
              key={country.name}
              name={country.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
