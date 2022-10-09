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
  ];

  const filterValue = [
    { name: "movieId", operator: "gte", type: "number" },
    { name: "title", operator: "startsWith", type: "string" },
    { name: "genres", operator: "startsWith", type: "string" },
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
