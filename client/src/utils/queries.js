import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
    }
  }
`;

// export const QUERY_CARDS = gql`
// query addCard {
//   cards {
//     _id
//   }
// }`

export const GET_ME = gql`
{
   me {
    _id
    name
    email
    cards {
        cardId
        logo
        components {
            _id
            compClass
            compValue
            compStyle
        }
      }
    } 
}
`;
