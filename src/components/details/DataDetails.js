import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import detailHooks from '../hooks/detailHooks';
import AirPollutionDetails from './AirPollutionDetails';

function DataDetails() {
  const values = useSelector((state) => state.values);
  detailHooks();

  // const {
  //   co, nh3, no, no2, o3, pm2_5, pm10, so2, dt, main,
  // } = values;
  return (
    <div className="bg-light-red text-white" data-testid="detailsContainer">
      <div className="row bg-light-red p-3">
        <h1 className="text-center my-3 position-relative">
          <Link to="/" className="back-arrow">
            <i className="far fa-arrow-alt-circle-left text-white"> </i>
          </Link>
          Air data details
        </h1>
      </div>
      <div className="d-flex align-items-center justify-content-around bg-white w-100 p-3">
        <i className="clouds fas fa-cloud-meatball text-dark"> </i>
        <i className="clouds fab fa-cloudversify text-primary"> </i>
        <i className="clouds fas fa-cloud-sun text-info"> </i>
        <i className="clouds fas fa-cloud-rain text-warning"> </i>
      </div>
      <div className="row bg-danger">
        <AirPollutionDetails
          key={values.co}
          co={values.co}
          nh3={values.nh3}
          no={values.no}
          no2={values.no2}
          o3={values.o3}
          pm25={values.pm2_5}
          pm10={values.pm10}
          so2={values.so2}
          dt={values.dt}
          main={values.main}
        />
      </div>
    </div>
  );
}

export default DataDetails;
