import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCountry } from '../../services/apiResources';
import flag2 from '../../assets/img/flag2.png';

function Country({ name }) {
  return (
    <div
      className="country position-relative p-5"
      style={{
        backgroundImage: `url(${flag2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
      }}
    >
      <p>
        {name}
      </p>
      <Link to="/air-pollution-details" onClick={() => getCountry(name)} className="text-decoration-none">
        <i className="far fa-arrow-alt-circle-right text-white arrow"> </i>
      </Link>
    </div>
  );
}

Country.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Country;
