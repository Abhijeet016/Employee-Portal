import Box from "@material-ui/core/Box";
import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Icon } from "@mui/material";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import MaterialTable from "material-table";
import { Link } from "@material-ui/core";
import { TablePagination } from "@material-ui/core";

import Button from "@mui/material/Button";

var vtt = true;
const columns = [
  { field: "id", headerName: "Emp_ID", width: 120 },
  { field: "name", headerName: "Name", width: 180 },
  {
    field: "emp_email",
    headerName: "Email",
    width: 190,
    renderCell: (params) => {
      console.log(params, "<< params");
      return (
        <a href={`mailto:${params.row["emp_email"]}`}>
          {" "}
          {params.row["emp_email"]}{" "}
        </a>
      );
    },
  },
  // {
  //   field: "emp_email",
  //   render: (rowData) => (
  //     <Link href={`https://www.google.com/gmail/${rowData.emp_email}`}>
  //       {rowData.emp_email}
  //     </Link>
  //   ),
  //   headerName: "E-mail",
  //   width: 210,
  // },
  { field: "designation", headerName: "Designation", width: 180 },
  { field: "acc_Mapped", headerName: "Account Mappping", width: 190 },
  { field: "rep_Manager", headerName: "Manager Mapping", width: 180 },
];
const rows = [];
var not_found = false;
const query = {
  offset: 0,
  pageSize: 5,
};
export default function Table(props) {
  const [filteredData, setFilteredData] = useState([]);
  const [users, setusers] = useState([]);
  const [search, setSearchTitle] = useState("");

  useEffect(() => {
    if (vtt) {
      vtt = false;
      axios
        .get("https://16f4-110-235-228-72.ngrok.io/emp")
        .then((result) => {
          console.log("data", result.data);
          not_found = false;

          setusers(result.data);
        })
        .catch((error) => {
          not_found = true;

          console.log(error.response);
        });
    }
  });

  const searchChange = (a) => {
    const newData = users.filter(
      (x) =>
        x.name.toLowerCase().includes(a.target.value.toLowerCase()) ||
        String(x.id).toLowerCase().includes(a.target.value.toLowerCase()) ||
        x.acc_Mapped.toLowerCase().includes(a.target.value.toLowerCase())
    );
    setusers(newData);
  };

  const handlechange = (a) => {
    console.log(not_found);
    axios
      .get(`https://16f4-110-235-228-72.ngrok.io/emp/name/${a.target.value}`)
      .then((result) => {
        console.log("data", result.data);
        not_found = false;
        setusers(result.data);
      })
      .catch((error) => {
        not_found = true;
        setusers([]);
        console.log(error.response);
      });
  };
  const idchange = (e) => {
    console.log(not_found);
    axios
      .get(`https://16f4-110-235-228-72.ngrok.io/emp/id/${e.target.value}`)
      .then((result) => {
        console.log("data", result.data);
        not_found = false;
        setusers(result.data);
      })
      .catch((error) => {
        not_found = true;
        setusers([]);
        console.log(error.response);
      });
  };

  const networkcall = () => {
    new Promise((resolve, reject) => {
      // prepare your data and then call resolve like this:
      let url = "https://16f4-110-235-228-72.ngrok.io/emp?";
      url += `&offset=${query.offset}`;
      url += `&pageSize=${query.pageSize}`;
      console.log(url);
      fetch(url)
        .then((resp) => resp.json())
        .then((resp) => {
          setusers(resp);
        });
    });
  };

  useEffect(() => {
    setFilteredData(
      users.filter(
        (user) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.acc_Mapped.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  <div id="button">
    <button> Logout</button>
  </div>;

  return (
    <div style={{ marginLeft: "220px" }}>
      <div style={{ marginTop: "78px" }}>
        <h1> Employee Directory </h1>
      </div>

      <Box mb={4}>
        <TextField
          variant="outlined"
          placeholder="Search Employee"
          onChange={(a) => handlechange(a)}
          onChange={(e) => idchange(e)}
          onChange={(a) => searchChange(a)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <div className="Container">
        <Box sx={{ "& button": { m: 2 } }}></Box>
        <Button variant="contained" size="medium">
          ADD
        </Button>
        <Button variant="contained" size="medium">
          Delete
        </Button>
      </div>

      {not_found === true ? (
        <Alert severity="info">No user found</Alert>
      ) : (
        <div style={{ height: 400, width: "100%", MarginTop: "25px" }}>
          <DataGrid
            rows={filteredData}
            columns={columns}
            onPageChange={(newPage) => {
              networkcall();
            }}
          />
        </div>
      )}
    </div>
  );
}
