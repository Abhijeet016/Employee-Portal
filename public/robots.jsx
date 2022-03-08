// # https://www.robotstxt.org/robotstxt.html
// User-agent: *
// Disallow:

// import Box from "@material-ui/core/Box";
// import * as React from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import { Icon } from "@mui/material";
// import IconButton from "@material-ui/core/IconButton";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import SearchIcon from "@material-ui/icons/Search";
// import TextField from "@material-ui/core/TextField";
// import { Component } from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import Alert from "@mui/material/Alert";

// var vtt = true;
// const columns = [
//   { field: "id", headerName: "ID", width: 100 },
//   { field: "name", headerName: "Name", width: 250 },
//   { field: "designation", headerName: "Designation", width: 210 },
//   { field: "acc_Mapped", headerName: "Account Mappping", width: 210 },
//   { field: "rep_Manager", headerName: "Manager Mapping", width: 210 },
// ];
// const rows = [];
// var not_found = false;
// export default function Table(props) {
//   const [filteredData, setFilteredData] = useState([]);
//   const [users, setusers] = useState([]);
//   const [search, setSearchTitle] = useState("");

//   useEffect(() => {
//     if (vtt) {
//       vtt = false;
//       axios
//         .get("https://1b32-110-235-228-35.ngrok.io/emp")
//         .then((result) => {
//           console.log("data", result.data);
//           not_found = false;

//           setusers(result.data);
//         })
//         .catch((error) => {
//           not_found = true;

//           console.log(error.response);
//         });
//     }
//   });
//   const handlechange = (e) => {
//     console.log(not_found);
//     axios
//       .get(`https://1b32-110-235-228-35.ngrok.io/emp/name/${e.target.value}`)
//       .then((result) => {
//         console.log("data", result.data);
//         not_found = false;
//         setusers(result.data);
//       })
//       .catch((error) => {
//         not_found = true;
//         setusers([]);
//         console.log(error.response);
//       });
//   };

//   useEffect(() => {
//     setFilteredData(
//       users.filter(
//         (user) =>
//           user.name.toLowerCase().includes(search.toLowerCase()) ||
//           user.acc_Mapped.toLowerCase().includes(search.toLowerCase())
//       )
//     );
//   }, [search, users]);

//   return (
//     <div style={{ marginLeft: "220px" }}>
//       <div>
//         <h1> Employee Directory </h1>
//       </div>
//       <Box mb={4}>
//         <TextField
//           variant="outlined"
//           placeholder="Search Employee"
//           onChange={(e) => handlechange(e)}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="start">
//                 <IconButton>
//                   <SearchIcon />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Box>

//       {not_found === true ? (
//         <Alert severity="info">No user found</Alert>
//       ) : (
//         <div style={{ height: 400, width: "100%", MarginTop: "25px" }}>
//           <DataGrid
//             rows={filteredData}
//             columns={columns}
//             pageSize={5}
//             rowsPerPageOptions={[5]}
//           />
//         </div>
//       )}
//     </div>
//   );
// }
