import gql from 'graphql-tag';

export const GET_CITY_BY_NAME = gql`
  query getCityByName($name: String!, $config: ConfigInput) {
    getCityByName(name: $name, config: $config) {
      id
      name
      country
      coord {
        lon
        lat
      }
      weather {
        timestamp
        temperature {
          actual
          feelsLike
          min
          max
        }
        clouds {
          all
          visibility
          humidity
        }
        wind {
          speed
          deg
        }
        summary {
          title
          description
          icon
        }
      }
    }
  }
`;
