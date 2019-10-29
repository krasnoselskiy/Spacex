import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom'

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
        <p className="card-text">Launch date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment></p>
        <p className="card-text">Flight number: {flight_number}</p>
        <Link to={`/launch/${flight_number}`} className="btn btn-secondary">Go to mission</Link>
      </div>
    </div >
  );
}

export default LaunchItem;
