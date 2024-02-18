import React from "react";
import { useQuery } from "@apollo/client";
import { Table } from "antd";
import { GET_CHARACTERS } from "../../graphql/queries/characters";
import "./CharacterTable.css";

const CharacterTable = ({ filters, currentPage }) => {
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      page: currentPage,
      search: filters.search,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    {
      title: "Height",
      dataIndex: "height",
      key: "height",
      render: (text) => text || "-",
    },
    {
      title: "Mass",
      dataIndex: "mass",
      key: "mass",
      render: (text) => text || "-",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (text) => text || "-",
    },
    {
      title: "Eye Color",
      dataIndex: "eyeColor",
      key: "eyeColor",
      render: (text) => text || "-",
    },
    {
      title: "Species Name",
      dataIndex: ["species", "name"],
      key: "speciesName",
      render: (text) => text || "-",
    },
    {
      title: "Home Planet",
      dataIndex: ["homeworld", "name"],
      key: "homeworldName",
      render: (text) => text || "-",
    },
    {
      title: "Films",
      dataIndex: "filmConnection",
      key: "films",
      render: (films) =>
        films.films.map((film) => film.title).join(", ") || "-",
    },
  ];
  const dataSource =
    data?.people?.results.map((person) => ({
      key: person.id,
      name: person.name,
      height: person.height,
      mass: person.mass,
      gender: person.gender,
      eyeColor: person.eyeColor,
      species: person.species?.name || "-",
      homeworld: person.homeworld?.name || "-",
      filmConnection: person.filmConnection.films
        .map((film) => film.title)
        .join(", "),
    })) || [];

  return <Table columns={columns} dataSource={dataSource} pagination={false} />;
};

export default CharacterTable;
