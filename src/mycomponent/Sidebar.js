import * as React from 'react';
import { Drawer } from '@mui/material';
//import AppBar from '@mui/material/AppBar';
//import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Customlist from './Customlist';

const drawerWidth=200;
function Sidebar() {
 
  return (
    <>
        <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
<Customlist></Customlist>
      </Drawer>   
    
    </>
  )
}

export default Sidebar