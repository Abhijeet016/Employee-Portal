import { Button, TextField ,Box} from "@mui/material";
import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";


function Posting() {

return (

    <React.Fragment>
        <Header></Header>
        <Sidebar></Sidebar>
        <Box
        component="main"
        sx={{ flexGrow: 4, p: 27}}
      >
        <Button variant="contained">Contained</Button>
        </Box>
</React.Fragment>


)

} 

export default Posting;