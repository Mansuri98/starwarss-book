import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters(
    $page: Int
    $search: String
    $gender: String
    $eyeColor: String
    $hairColor: String
    $homePlanet: String
  ) {
    people(
      page: $page
      search: $search
      gender: $gender
      eyeColor: $eyeColor
      hairColor: $hairColor
      homePlanet: $homePlanet
    ) @rest(type: "PeopleResponse", path: "people/?page={args.page}") {
      count
      results @type(name: "Person") {
        name
        height
        mass
        gender
        eye_color
        hair_color
        homeworld {
          name
        }
        species {
          name
        }
        filmConnection {
          films {
            title
          }
        }
        starships {
          name
          model
        }
        vehicles {
          name
          model
        }
      }
    }
  }
`;
