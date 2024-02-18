import React, { useState, useEffect, useCallback } from "react";
import CharacterTable from "../../components/CharacterTable/CharacterTable";
import Filters from "../../components/Filters/Filters";
import "./Home.css";
import CustomPagination from "../../components/Pagination/Pagination";

interface FiltersState {
  [key: string]: string | undefined;
}

const Home = () => {
  const [filters, setFilters] = useState<FiltersState>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleFilterChange = useCallback(
    (filterType: string, value: string | undefined) => {
      setFilters((prev) => ({
        ...prev,
        [filterType]: value,
      }));
    },
    []
  );

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setTotalPages(10);
    };

    fetchData();
  }, [filters, currentPage]);

  return (
    <div className="Home">
      <h1 className="welcome-message">Welcome to the Star Wars Archives</h1>
      <Filters onFilterChange={handleFilterChange} />
      <div className="table-container">
        <CharacterTable filters={filters} currentPage={currentPage} />
      </div>
      <CustomPagination
        current={currentPage}
        onChange={handlePageChange}
        total={totalPages * 10}
      />
    </div>
  );
};

export default Home;
