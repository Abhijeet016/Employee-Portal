// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   TextField,
//   InputAdornment,
//   SvgIcon,
//   Typography,
// } from "@mui/material";
// import { Search as SearchIcon } from "../icons/Search";
// import { Upload as UploadIcon } from "../icons/Upload";
// import { Download as DownloadIcon } from "../icons/Download";

// export const Tablelist = (props) => (
//   <Box {...props}>
//     <Box
//       sx={{
//         alignItems: "center",
//         display: "flex",
//         justifyContent: "space-between",
//         flexWrap: "wrap",
//         m: -1,
//       }}
//     >
//       <Typography sx={{ m: 1 }} variant="h4">
//         Customers
//       </Typography>
//       <Box sx={{ m: 1 }}>
//         <Button startIcon={<UploadIcon fontSize="small" />} sx={{ mr: 1 }}>
//           Import
//         </Button>
//         <Button startIcon={<DownloadIcon fontSize="small" />} sx={{ mr: 1 }}>
//           Export
//         </Button>
//         <Button color="primary" variant="contained">
//           Add Customers
//         </Button>
//       </Box>
//     </Box>
//     <Box sx={{ mt: 3 }}>
//       <Card>
//         <CardContent>
//           <Box sx={{ maxWidth: 500 }}>
//             <TextField
//               fullWidth
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <SvgIcon color="action" fontSize="small">
//                       <SearchIcon />
//                     </SvgIcon>
//                   </InputAdornment>
//                 ),
//               }}
//               placeholder="Search customer"
//               variant="outlined"
//             />
//           </Box>
//         </CardContent>
//       </Card>
//     </Box>
//   </Box>
// );
// import * as React from "react";
// import { useState } from "react";
// import PerfectScrollbar from "react-perfect-scrollbar";
// import PropTypes from "prop-types";
// import { format } from "date-fns";
// import { Component } from "react";

// import {
//   Avatar,
//   Box,
//   Card,
//   Checkbox,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TablePagination,
//   TableRow,
//   Typography,
// } from "@mui/material";

// export const Tab = ({ customers, ...rest }) => {
//   const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
//   const [limit, setLimit] = useState(10);
//   const [page, setPage] = useState(0);

//   const handleSelectAll = (event) => {
//     let newSelectedCustomerIds;

//     if (event.target.checked) {
//       newSelectedCustomerIds = customers.map((customer) => customer.id);
//     } else {
//       newSelectedCustomerIds = [];
//     }

//     setSelectedCustomerIds(newSelectedCustomerIds);
//   };

//   const handleSelectOne = (event, id) => {
//     const selectedIndex = selectedCustomerIds.indexOf(id);
//     let newSelectedCustomerIds = [];

//     if (selectedIndex === -1) {
//       newSelectedCustomerIds = newSelectedCustomerIds.concat(
//         selectedCustomerIds,
//         id
//       );
//     } else if (selectedIndex === 0) {
//       newSelectedCustomerIds = newSelectedCustomerIds.concat(
//         selectedCustomerIds.slice(1)
//       );
//     } else if (selectedIndex === selectedCustomerIds.length - 1) {
//       newSelectedCustomerIds = newSelectedCustomerIds.concat(
//         selectedCustomerIds.slice(0, -1)
//       );
//     } else if (selectedIndex > 0) {
//       newSelectedCustomerIds = newSelectedCustomerIds.concat(
//         selectedCustomerIds.slice(0, selectedIndex),
//         selectedCustomerIds.slice(selectedIndex + 1)
//       );
//     }

//     setSelectedCustomerIds(newSelectedCustomerIds);
//   };

//   const handleLimitChange = (event) => {
//     setLimit(event.target.value);
//   };

//   const handlePageChange = (event, newPage) => {
//     setPage(newPage);
//   };

//   return (
//     <Card {...rest}>
//       <PerfectScrollbar>
//         <Box sx={{ minWidth: 1050 }}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell padding="checkbox">
//                   <Checkbox
//                     checked={selectedCustomerIds.length === customers.length}
//                     color="primary"
//                     indeterminate={
//                       selectedCustomerIds.length > 0 &&
//                       selectedCustomerIds.length < customers.length
//                     }
//                     onChange={handleSelectAll}
//                   />
//                 </TableCell>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Email</TableCell>
//                 <TableCell>Location</TableCell>
//                 <TableCell>Phone</TableCell>
//                 <TableCell>Registration date</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {customers.slice(0, limit).map((customer) => (
//                 <TableRow
//                   hover
//                   key={customer.id}
//                   selected={selectedCustomerIds.indexOf(customer.id) !== -1}
//                 >
//                   <TableCell padding="checkbox">
//                     <Checkbox
//                       checked={selectedCustomerIds.indexOf(customer.id) !== -1}
//                       onChange={(event) => handleSelectOne(event, customer.id)}
//                       value="true"
//                     />
//                   </TableCell>
//                   <TableCell>
//                     <Box
//                       sx={{
//                         alignItems: "center",
//                         display: "flex",
//                       }}
//                     >
//                       <Typography color="textPrimary" variant="body1">
//                         {customer.name}
//                       </Typography>
//                     </Box>
//                   </TableCell>
//                   <TableCell>{customer.email}</TableCell>
//                   <TableCell>
//                     {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}
//                   </TableCell>
//                   <TableCell>{customer.phone}</TableCell>
//                   <TableCell>
//                     {format(customer.createdAt, "dd/MM/yyyy")}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </Box>
//       </PerfectScrollbar>
//       <TablePagination
//         component="div"
//         count={customers.length}
//         onPageChange={handlePageChange}
//         onRowsPerPageChange={handleLimitChange}
//         page={page}
//         rowsPerPage={limit}
//         rowsPerPageOptions={[5, 10, 25]}
//       />
//     </Card>
//   );
// };

// Tab.propTypes = {
//   customers: PropTypes.array.isRequired,
// };
