import { gql } from "@apollo/client";

export const addFavorite = (id: string) => {
  //TODO: add an item to favorites
};

export const ADD_FAVORITE_MUTATION = gql`
  mutation AddFavorite($id: ID!) {
    addFavorite(id: $id) {
      id
    }
  }
`;

export {};
