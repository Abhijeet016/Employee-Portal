import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";

import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";

const AddingProperties = (props) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const onSubmit = async (values) => {
    setError(null);

    const response = await axios
      .post("https://16f4-110-235-228-72.ngrok.io/emp/add", values)
      .then((response) => {
        setSuccess(response.data.message);
      })

      .catch((error) => {
        if (error && error.response) {
          setError(error.response.data.message);
        }
      });
  };
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      emp_email: "",
      designation: "",
      acc_Mapped: "",
      rep_Manager: "",
      //   empNLExp: "",
      //   empAboutMe: "",
    },

    onSubmit,
  });

  //   var not_found = false;
  //   const [filteredData, setFilteredData] = useState([]);
  //   const [wordEntered, setWordEntered] = useState("");
  //   const [users, setusers] = useState([]);
  //   const [search, setSearchTitle] = useState("");

  //   const handleFilter = (event) => {
  //     console.log(not_found);
  //     axios
  //       .get(
  //         `https://65a7-110-235-228-104.ngrok.io/emp/aboutme/skills${event.target.value}`
  //       )
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

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="emp_id"
                name="id"
                type="Number"
                value={formik.values.id}
                onChange={formik.handleChange}
                //   var not_found = false;
                //   const [filteredData, setFilteredData] = useState([]);
                //   const [wordEntered, setWordEntered] = useState("");
                //   const [users, setusers] = useState([]);
                //   const [search, setSearchTitle] = useState("");

                //   const handleFilter = (event) => {
                //     console.log(not_found);
                //     axios
                //       .get(
                //         `https://65a7-110-235-228-104.ngrok.io/emp/aboutme/skills${event.target.value}`
                //       )
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
                //   };Change={formik.handleChange}

                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="name"
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="emp_email"
                type="text"
                value={formik.values.emp_email}
                onChange={formik.handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Account Mapping"
                name="acc_Mapped"
                value={formik.values.acc_Mapped}
                onChange={formik.handleChange}
                type="text"
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Manager Mapping"
                name="rep_Manager"
                value={formik.values.rep_Manager}
                onChange={formik.handleChange}
                type="text"
                //value={values.exp}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Designation"
                name="designation"
                value={formik.values.designation}
                onChange={formik.handleChange}
                type="text"
                //value={values.exp}
                variant="outlined"
              />
            </Grid>
            {/* <Grid item md={6}  <Grid item md={6} xs={12}>
              <TextField
                variant="outlined"
                placeholder="Search"
                type="xs={12}>
              <TextField
                fullWidth
                label="Nl-Experiance"
                name="empNLExp"
                value={formik.values.empNLExp}
                onChange={formik.handleChange}
                //onChange={handleChange}
                type="number"
                //value={values.nlexp}
                variant="outlined"
              />
            </Grid> */}
            {/* <Grid item md={12} xs={12}>
              <TextField
                fullWidth
                label="About Me"
                name="empAboutMe"
                type="text"
                value={formik.values.empAboutMe}
                onChange={formik.handleChange}
                // onChange={handleChange}

                //value={values.aboutme}
                variant="outlined"
              />
            </Grid> */}

            {/* <Grid item md={6} xs={12}>
              <TextField
                variant="outlined"
                placeholder="Search"
                value={wordEntered}
                onChange={(e) => handleFilter(e)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton>
                        <SearchIco <Grid item md={6} xs={12}>
              <TextField
                variant="outlined"
                placeholder="Search"
                type="n />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              /> */}
            {/* 
              {filteredData.length !== 0 && (
                <div className="dataResult">
                  {filteredData.slice(0, 15).map((value, key) => {
                    return (
                      // eslint-disable-next-line jsx-a11y/anchor-is-valid
                      <a className="dataItem" target="value.title">
                        <p>{value.title}</p>
                      </a>
                    );
                  })}
                </div>
              )}
            </Grid> */}
          </Grid>
        </CardContent>
        <Divider />
        <Box
          //   var not_found = false;
          //   const [filteredData, setFilteredData] = useState([]);
          //   const [wordEntered, setWordEntered] = useState("");
          //   const [users, setusers] = useState([]);
          //   const [search, setSearchTitle] = useState("");

          //   const handleFilter = (event) => {
          //     console.log(not_found);
          //     axios
          //       .get(
          //         `https://65a7-110-235-228-104.ngrok.io/emp/aboutme/skills${event.target.value}`
          //       )
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
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button type="Add" color="primary" variant="contained">
            Save Details
          </Button>
        </Box>
      </Card>
    </form>
  );
};
export default AddingProperties;
// Collapse;

// white_check_mark;
// eyes;
// raised_hands;
