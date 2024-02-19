# Star Wars Character Reference Book 🌌

## Project Overview 🚀

This project is a React-based application that serves as a reference book for Star Wars characters, utilizing the GraphQL endpoint SWAPI for data retrieval. It aims to showcase a comprehensive list of characters across all Star Wars movies, featuring detailed information and interactive functionalities.

### Description 📖

The goal is to implement a user-friendly interface that allows users to explore, filter, and favorite Star Wars characters. The application includes a table on the landing page displaying characters' details, server-side pagination, frontend-based filters, and a favorites feature for an enhanced user experience.

## Features 🌟

- **Characters Table**: Lists all characters with details such as name, height, weight, home planet, species, gender, and eye color.
- **Pagination**: Cursor-based server-side pagination for efficient data browsing.
- **Favorites**: Users can mark characters as favorites, with persistence in the browser.
- **Filters**: Frontend filters for gender, eye color, species, and film. Supports multi-filtering for eye color and species.
- **Favorites Only Mode**: Displays only characters marked as favorites, independent of pagination.
- **Character Details Preview**: Access to a detailed preview of each character, including a list of movies they appear in. Implemented through a dedicated page or modal.

## Technologies and Libraries 🛠️

- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) For building the user interface.
- ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white) Ensures type safety across the application.
- ![Ant Design](https://img.shields.io/badge/-Ant%20Design-0170FE?logo=ant-design&logoColor=white) UI library for React components.
- ![Apollo Client](https://img.shields.io/badge/-Apollo%20Client-311C87?logo=apollo-graphql&logoColor=white) For interacting with the GraphQL endpoint.
- ![GraphQL Codegen](https://img.shields.io/badge/-GraphQL%20Codegen-E10098?logo=graphql&logoColor=white) Tooling for generating code based on GraphQL schemas and operations.

## Getting Started 🏁

### Prerequisites

- Node.js
- npm

### Setup

1. Clone the repository.
2. Navigate to the project directory and install dependencies:  -> npm install

## Available Scripts 📜

### In the project directory, you can run

npm start: Runs the app in development mode. Open <http://localhost:3000> to view it in your browser.

npm test: Launches the test runner in the interactive watch mode.

npm run build: Builds the app for production to the build folder.

npm run eject: Note: this is a one-way operation. Once you eject, you can't go back!

## Learn More 📚

For more information on React, Apollo Client, Ant Design, and other technologies used, refer to their official documentation below:

- [React documentation](https://reactjs.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [Ant Design](https://ant.design/)
- [GraphQL Codegen](https://www.graphql-code-generator.com/)

## Deployment 🚀

Refer to the [deployment section](https://facebook.github.io/create-react-app/docs/deployment) of the Create React App documentation for guidance on deploying the application.
