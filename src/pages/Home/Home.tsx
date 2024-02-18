import React, { useState, useEffect, useCallback } from "react";
import CharacterTable from "../../components/CharacterTable/CharacterTable";
import Filters from "../../components/Filters/Filters";
import "./Home.css";
import CustomPagination from "../../components/Pagination/Pagination";

const Home = () => {
  const [filters, setFilters] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0); 
j
  const handleFilterChange = useCallback((filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value || undefined,
    }));
  }, []);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      console.log(
        "Fetching data with filters: ",
        filters,
        " and page: ",
        currentPage
      );

      setTotalPages(10); 
    };

    fetchData();
  }, [filters, currentPage]);

  return (
    <div className="Home">
      <h1 className="welcome-message">Welcome to the Star Wars Archives</h1>
      <Filters onFilterChange={handleFilterChange} />
      <CharacterTable filters={filters} currentPage={currentPage} />
      <CustomPagination
        current={currentPage}
        onChange={handlePageChange}
        total={totalPages * 10} 
      />
    </div>
  );
};

export default Home;
