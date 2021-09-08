import React from 'react';

function Topbar() {
  return (
    <div className="row text-white bg-danger">
      <div className="col-md-12">
        <div className="d-flex aling-items-center justify-content-between p-2">
          <span>
            BELL
            {' '}
            <i className="fas fa-wifi"> </i>
          </span>
          <span className="fw-bold">
            6:45 PM
          </span>
          <span>
            <i className="fab fa-bluetooth-b pe-1"> </i>
            100%
            <i className="fas fa-battery-full ps-1"> </i>
          </span>
        </div>
      </div>
      <div className="col-md-12">
        <div className="d-flex align-items-center justify-content-between p-2">
          <span>
            <i className="fas fa-chevron-left pe-1"> </i>
            2021
          </span>
          <span className="fs-6 fw-bold pe-3">
            Air Pollution Data
          </span>
          <span>
            <i className="fas fa-microphone pe-3"> </i>
            <i className="fas fa-cog"> </i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
