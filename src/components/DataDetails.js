import React from 'react';
import { useSelector } from 'react-redux';
import detailHooks from './hooks/detailHooks';
import AirPollutionDetails from './AirPollutionDetails';

function DataDetails() {
  const values = useSelector((state) => state.values);

  detailHooks();

  const {
    co, nh3, no, no2, o3, pm25, om10, so2, dt, main,
  } = values;
  return (
    <div className="text-center">
      <h1>Air data details Details.</h1>
      <div>
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
