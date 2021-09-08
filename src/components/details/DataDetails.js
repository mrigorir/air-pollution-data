import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import detailHooks from '../hooks/detailHooks';
import AirPollutionDetails from './AirPollutionDetails';

function DataDetails() {
  const values = useSelector((state) => state.values);

  detailHooks();

  const {
    co, nh3, no, no2, o3, pm25, om10, so2, dt, main,
  } = values;
  return (
    <div className="bg-light-red text-white">
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
          key={co}
          co={co}
          nh3={nh3}
          no={no}
          no2={no2}
          o3={o3}
          pm25={pm25}
          om10={om10}
          so2={so2}
          dt={dt}
          main={main}
        />
      </div>
    </div>
  );
}

export default DataDetails;
