import React from 'react';
import classNames from 'classnames';

// const LaunchItem = (props) => {
// console.log(props);
const LaunchItem = ({ launch: { flight_number, mission_name, launch_date_local, launch_success } }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">
          Mission: {' '}
          <span className={
            classNames({
              'text-success mission_marker': launch_success,
              'text-danger mission_marker': !launch_success
            })}>{mission_name}</span>
        </h5>
        <p className="card-text">Launch date: {launch_date_local}</p>
        <p className="card-text">Flight number: {flight_number}</p>
        <p className="card-text">launch_success: {launch_success}</p>
        <button className="btn btn-secondary">Go to mission</button>
      </div>
    </div>
  );
}

export default LaunchItem;
