import gql from 'graphql-tag';

export const GET_CITY_BY_ID = gql`
  query getCityById($id: [String!], $config: ConfigInput) {
    getCityById(id: $id, config: $config) {
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
