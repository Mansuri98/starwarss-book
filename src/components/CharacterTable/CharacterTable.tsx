import React, { useState, useEffect, useCallback } from "react";
import { useQuery } from "@apollo/client";
import client from "../../apolloClient";
import { Table } from "antd";
import { GET_CHARACTERS } from "../../graphql/queries/characters";
import "./CharacterTable.css";

interface CharacterTableProps {
  filters: {
    name?: string;
    gender?: string;
    eyeColor?: string;
    hairColor?: string;
    homePlanet?: string;
  };
  currentPage: number;
}
interface Character {
  name: string;
  height: string;
  mass: string;
  gender: string;
  eye_color: string;
  hair_color: string;
  species: string[];
  homeworld: string;
  films: string[];
}

const CharacterTable: React.FC<CharacterTableProps> = ({
  filters,
  currentPage,
}) => {
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      page: currentPage,
      search: filters.name,
      gender: filters.gender,
      eyeColor: filters.eyeColor,
      hairColor: filters.hairColor,
      homePlanet: filters.homePlanet,
    },
    client: client,
    fetchPolicy: "network-only",
  });
  const [dataSource, setDataSource] = useState<Character[]>([]);

  useEffect(() => {
    if (!loading && !error && data) {
      const filteredCharacters: Character[] = data.people.results
        .filter((character: any) => {
          if (
            filters.name &&
            !character.name.toLowerCase().includes(filters.name.toLowerCase())
          ) {
            return false;
          }
          if (filters.gender && character.gender !== filters.gender) {
            return false;
          }
          if (filters.eyeColor && character.eye_color !== filters.eyeColor) {
            return false;
          }
          if (filters.hairColor && character.hair_color !== filters.hairColor) {
            return false;
          }
          if (
            filters.homePlanet &&
            character.homeworld !== filters.homePlanet
          ) {
            return false;
          }
          return true;
        })
        .map((person: any, index: number) => ({
          key: `${person.name}-${index}`,
          name: person.name,
          height: person.height,
          mass: person.mass,
          gender: person.gender,
          eye_color: person.eye_color,
          hair_color: person.hair_color,
          species: Array.isArray(person.species)
            ? person.species.join(", ")
            : "",
          homeworld: person.homeworld,
          films: Array.isArray(person.films) ? person.films.join(", ") : "",
        }));

      setDataSource(filteredCharacters);
    }
  }, [loading, error, data, filters]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Height", dataIndex: "height", key: "height" },
    { title: "Mass", dataIndex: "mass", key: "mass" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Eye Color", dataIndex: "eye_color", key: "eye_color" },
    { title: "Hair Color", dataIndex: "hair_color", key: "hair_color" },
    // { title: "Species", dataIndex: "species", key: "species" },
    //{ title: "Homeworld", dataIndex: "homeworld", key: "homeworld" },
    /* {
      title: "Films",
      dataIndex: "films",
      key: "films",
      render: (films: string[] | undefined) => {
        return films ? films.join(", ") : "";
      },
    },*/
  ];
  return (
    <Table
      key={currentPage}
      columns={columns}
      dataSource={dataSource}
      pagination={false}
    />
  );
};

export default CharacterTable;
