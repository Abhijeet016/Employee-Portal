import Box from '@mui/material/Box';

import {List} from '@mui/material'
//import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const Customlist = () =>{
    const links = [

        {text:'NL Connect',link:"/nlconnect"}
        ,{text:'Employee Directory',link:"/dict"}
        ,{text:'Internal Job Posting',link:'/posting'}
      ]
    
    return (

    
<Box sx={{ overflow: 'auto' }}>
          <List>
            {links.map((tex, index) => (
              <Link to={tex.link}>
              <ListItem  key={tex.text}>
                 
                <ListItemText primary={tex.text}/>
              </ListItem>
              </Link>

            ))}
            
          </List>
          
         
        </Box>
    );

}

export default Customlist;