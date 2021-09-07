import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCountry } from '../../services/apiResources';

function Country({ name, image }) {
  return (
    <div>
      <p>{name}</p>
      <Link to="/air-pollution-details" onClick={() => getCountry(name)}> Arrow </Link>
      <p>{image}</p>
    </div>
  );
}

Country.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Country;
