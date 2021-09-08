import React from 'react';
import PropTypes from 'prop-types';
import Options from './Options';
import options from './optionsStore';

function Form({ submit, change, formClass }) {
  return (
    <form onSubmit={submit} className={formClass}>
      <select name="continents" required onChange={change} className="border-0 text-white bg-danger fs-5 py-2 ps-2 pe-5 formSelect rounded">
        {options.map((option) => {
          const { name, value } = option;
          return (
            <Options
              key={name}
              name={name}
              value={value}
            />
          );
        })}
      </select>
      <button type="submit" className="btn btn-outline-light mt-3 fs-5">Choose Continent</button>
    </form>
  );
}

Form.propTypes = {
  submit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  formClass: PropTypes.string.isRequired,
};

export default Form;
