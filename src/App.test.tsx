import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders enter the star wars Archives button", () => {
  render(<App />);
  const buttonElement = screen.getByText(/Enter the Star Wars Archives/i);
  expect(buttonElement).toBeInTheDocument();
});

module.exports = {
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
jest.mock("apollo-link-rest", () => ({
  RestLink: function () {},
}));
