import React from "react";
import "./MainPage.css";

const MainPage = ({ onEnterClick }) => {
  return (
    <div className="Main">
      <button onClick={onEnterClick}>Enter the Star Wars Archives</button>
    </div>
  );
};

export default MainPage;
