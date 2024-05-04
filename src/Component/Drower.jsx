import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ListItem from '@mui/material/ListItem';
import AirplayIcon from '@mui/icons-material/Airplay';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import QuizIcon from '@mui/icons-material/Quiz';
import WidgetsIcon from '@mui/icons-material/Widgets';
import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { NavLink } from 'react-router-dom';
import CallIcon from '@mui/icons-material/Call';
export default function Drower() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

let a = "/"
let b = "/service"
let c = "/auther";
let d = "/blog"
let e ="/fq"
let f = "/contact"



  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Home', 'service', 'AutherCheckList', 'Blog', 'FAQ','Contact'].map((text, index) => (
          
          <NavLink className={({isActive})=>`${isActive?"font-bold text-blue-400 bg-slate-400":"text-black"}`} to ={text==="Home"?a:text==="service"?b:text==="AutherCheckList"?c:text==="Blog"?d:text==="FAQ"?e:text==="Contact"?f:" "}>
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
            {index === 0 ? <HomeIcon /> : null}
                {index === 1 ?<MiscellaneousServicesIcon/> : null}
                {index  === 2 ?   <AutoStoriesIcon/>:null}
                {index  === 3?   <AirplayIcon/>:null}
                {index  === 4 ?   <QuizIcon/>:null}
                {index  === 5 ?   <CallIcon/>:null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>

          </NavLink>
        ))}
      </List>
   
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><h1 className="text-black"><WidgetsIcon/></h1></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}