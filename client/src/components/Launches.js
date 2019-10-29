import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import LaunchItem from './LaunchItem'

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
    }
  }
`;

export class Launches extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="display-4 my-3">Launches</h1>
        <Query query={LAUNCHES_QUERY}>
          {
            ({ loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>
              if (error) return console.log('error');

              return <Fragment>
                {
                  data.launches.slice(0, 20).map(launch => (
                    <LaunchItem key={launch.flight_number} launch={launch} />
                  ))
                }
              </Fragment>
            }
          }
        </Query>
      </Fragment>
    )
  }
}

export default Launches
