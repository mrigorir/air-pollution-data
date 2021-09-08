import React from 'react';
import PropTypes from 'prop-types';

function Options({ name, value }) {
  return (
    <option value={value}>
      {name}
    </option>
  );
}

Options.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Options;
