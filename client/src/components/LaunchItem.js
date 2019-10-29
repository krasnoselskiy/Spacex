import React from 'react';

const LaunchItem = ({ launch: { flight_number, mission_name, launch_date_local, launch_year, launch_success } }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Mission: {mission_name}</h5>
        <p className="card-text">Launch date: {launch_date_local}</p>
        <p className="card-text">Flight number: {flight_number}</p>
        <button className="btn btn-secondary">Go to mission</button>
      </div>
    </div>
  );
}

export default LaunchItem;
