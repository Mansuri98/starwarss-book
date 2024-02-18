import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $search: String) {
    people(page: $page, search: $search)
      @rest(type: "PeopleResponse", path: "people/?{args}") {
      count
      next
      previous
      results @type(name: "Person") {
        name
        height
        mass
        gender
        eyeColor
        species @type(name: "Species") {
          name
        }
        homeworld @type(name: "Planet") {
          name
        }
        filmConnection @type(name: "FilmConnection") {
          films @type(name: "Film") {
            title
          }
        }
      }
    }
  }
`;
