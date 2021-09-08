import React from 'react';
import PropTypes from 'prop-types';

function AirPollutionDetails({
  co, nh3, no, no2, o3, pm25, om10, so2, dt, main,
}) {
  return (
    <div>
      <p>
        CO:
        {co}
      </p>
      <p>
        NH3:
        {nh3}
      </p>
      <p>
        NO:
        {no}
      </p>
      <p>
        NO2:
        {no2}
      </p>
      <p>
        O3:
        {o3}
      </p>
      <p>
        PM2_5:
        {pm25}
      </p>
      <p>
        OM10:
        {om10}
      </p>
      <p>
        SO2:
        {so2}
      </p>
      <p>
        DT:
        {dt}
      </p>
      <p>
        MAIN:
        {main}
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
