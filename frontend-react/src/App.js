import React, { useEffect, useState } from "react";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";

// import NumberFilter from '@inovua/reactdatagrid-community/NumberFilter';
// import SelectFilter from '@inovua/reactdatagrid-community/SelectFilter';
// import DateFilter from '@inovua/reactdatagrid-community/DateFilter';

const gridStyle = { minHeight: 600 };

const App = () => {
  const [movies, setMovies] = useState([]);

  const columns = [
    { name: "movieId", header: "movieId", defaultWidth: 80, type: "number" },
    { name: "title", header: "title", defaultFlex: 1, type: "string" },
    { name: "genres", header: "genres", defaultFlex: 1, type: "string" },
    { name: "userId", header: "userId", defaultWidth: 80, type: "number" },
    { name: "tag", header: "tag", defaultFlex: 1, type: "string" },
    { name: "imdbId", header: "imdbId", defaultFlex: 1, type: "number" },
    { name: "tmdbId", header: "tmdbId", defaultWidth: 80, type: "number" }
  ];

  const filterValue = [
    { name: "movieId", operator: "gte", type: "number" },
    { name: "title", operator: "startsWith", type: "string" },
    { name: "genres", operator: "startsWith", type: "string" },
    { name: "userId", operator: "gte", type: "number" },
    { name: "tag", operator: "startsWith", type: "string" },
    { name: "imdbId", operator: "gte", type: "number" },
    { name: "tmdbId", operator: "gte", type: "number" },
  ];

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    fetch("http://localhost:80/movies", {
      crossDomain: true,
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMovies(res.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>
          <ReactDataGrid
            idProperty="id"
            style={gridStyle}
            defaultFilterValue={filterValue}
            columns={columns}
            dataSource={movies}
          />
      </div>
    </>
  );
};

export default App;
