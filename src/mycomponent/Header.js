import * as React from "react";
import { Toolbar } from "@mui/material";
import { AppBar } from "@mui/material";
import Typography from "@mui/material/Typography";
export default function Header() {
  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#01579b",
        }}
      >
        <Toolbar>
          <Typography variant="h4" sx={{ color: "white" }}>
            NineLeaps
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
