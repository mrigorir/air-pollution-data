import React from 'react';
import PropTypes from 'prop-types';

function AirPollutionDetails({
  co, nh3, no, no2, o3, pm25, om10, so2, dt, main,
}) {
  return (
    <div className="data-info">
      <p className="d-flex aling-items-center justify-content-between">
        Carbon Monoxide:
        <span className="pe-2">
          {co}
        </span>
      </p>
      <p className="d-flex aling-items-center justify-content-between">
        Ammonia:
        <span className="pe-2">
          {nh3}
        </span>
      </p>
      <p className="d-flex aling-items-center justify-content-between">
        Nitrogen Monoxide:
        <span className="pe-2">
          {no}
        </span>
      </p>
      <p className="d-flex aling-items-center justify-content-between">
        Nitrogen Dioxide:
        <span className="pe-2">
          {no2}
        </span>
      </p>
      <p className="d-flex aling-items-center justify-content-between">
        Ozone:
        <span className="pe-2">
          {o3}
        </span>
      </p>
      <p className="d-flex aling-items-center justify-content-between">
        Particulates:
        <span className="pe-2">
          {pm25}
        </span>
      </p>
      <p className="d-flex aling-items-center justify-content-between">
        Suspended Particulates:
        <span className="pe-2">
          {om10}
        </span>
      </p>
      <p className="d-flex aling-items-center justify-content-between">
        Sulfur Dioxide:
        <span className="pe-2">
          {so2}
        </span>
      </p>
      <p className="d-flex aling-items-center justify-content-between">
        Datetime:
        <span className="pe-2">
          {dt}
        </span>
      </p>
      <p className="d-flex aling-items-center justify-content-between">
        Air Quality Index:
        <span className="pe-2">
          {main}
        </span>
      </p>
    </div>
  );
}

AirPollutionDetails.defaultProps = {
  co: 0,
  nh3: 0,
  no: 0,
  no2: 0,
  o3: 0,
  pm25: 0,
  so2: 0,
  om10: 0,
  dt: 0,
  main: 0,
};

AirPollutionDetails.propTypes = {
  co: PropTypes.number,
  nh3: PropTypes.number,
  no: PropTypes.number,
  no2: PropTypes.number,
  o3: PropTypes.number,
  pm25: PropTypes.number,
  om10: PropTypes.number,
  so2: PropTypes.number,
  dt: PropTypes.number,
  main: PropTypes.number,
};

export default AirPollutionDetails;
