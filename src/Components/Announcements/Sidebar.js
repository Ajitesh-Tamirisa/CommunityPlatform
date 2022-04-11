import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CircleIcon from '@mui/icons-material/Circle';
import CampaignIcon from '@mui/icons-material/Campaign';
import AppBar from '@mui/material/AppBar';
import {  Link, useLocation } from 'react-router-dom';

const drawerWidth = 280;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function Sidebar(props) {
    const { window } = props;

  const drawer = (
      <div>
        <List
        sx={{ margin: '75px auto 10px auto', width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        >
        <ListItemButton>
            <ListItemIcon sx={{fontSize: '18px', color: "navy"}}>
            <CampaignIcon/>
            </ListItemIcon>
            <ListItemText
                primary={
                    <Typography variant="h7" display="block" sx={{fontWeight: 600}} gutterBottom>
                        Announcements
                    </Typography>
                }
            />
        </ListItemButton>
        <Divider sx={{m:0.5, p:0, height:'2px'}}/>
        <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 5 }}>
                <ListItemIcon>
                <CircleIcon sx={{fontSize: '10px', color: "#d32f2f"}} />
                </ListItemIcon>
                <ListItemText primary="All" component={Link} to="/Announcements/735" />
            </ListItemButton>
            <Divider component="li" variant="inset" />
            <ListItemButton sx={{ pl: 5 }}>
                <ListItemIcon>
                <CircleIcon sx={{fontSize: '10px', color: "#d32f2f"}} />
                </ListItemIcon>
                <ListItemText primary="CSE-A 2018-2022"  component={Link} to="/Announcements/735"/>
            </ListItemButton>
            <Divider component="li" variant="inset" />
            <ListItemButton sx={{ pl: 5 }}>
                <ListItemIcon>
                <CircleIcon sx={{fontSize: '10px', color: "#d32f2f"}} />
                </ListItemIcon>
                <ListItemText primary="CSE-B 2018-2022" component={Link} to="/Announcements/735" />
            </ListItemButton>
        </List>
        </List>
      </div>
  )

  const container = window !== undefined ? () => window().document.body : undefined;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "white"
        }}
      >
        <Toolbar sx={{ mr: 2, display: { sm: 'none' } }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color:'black' }}
          >
            <MenuIcon />
            <Typography sx={{margin: '5px', fontWeight: '600'}} align='center' variant="h6">Announcements</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, bgcolor: 'primary.main' }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            color: 'text.primaryt'
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Sidebar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

export default Sidebar

