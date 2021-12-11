import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useHistory } from 'react-router'
import { AppContext } from '../../AppContext';
import './../../styles/css/layouts/travel.css';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Travel = () => {
  const [ click, setClick ] = useState(false);
  const { setOnProject } = useContext(AppContext);
  const history = useHistory();

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setClick(!click);
  };

  const handleBack = () => {
    setOnProject(false);
    document.body.classList.add('background');
    document.body.classList.add('background--color-map');
    history.push('/layouts');
  }

  const handleMenuClick = () => {
    setClick(!click);
    toggleDrawer(true);
  }

  const list = (anchor) => (
    <Box
      sx={{ 
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
        backgroundColor: 'rgb(211,166,180)',
        height: '100vh'
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Grid sx={{display: 'flex', justifyContent: 'flex-end', marginRight: '20px', fontSize: '1.6em', color: '#FFF'}}>
          <Grid item>
            <i className='fas fa-times drawer-icon'/>
          </Grid>
        </Grid>
        {['Link 1', 'Link 2', 'Link 3'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText className='travel-links' primary={text} sx={{ color: '#FFF', }}/>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div className='travel-background'>
      <Box 
        sx={{ 
          flexGrow: 1 
        }}
      >
        <AppBar 
          position="static" 
          sx={{
            backgroundColor: 'rgba(250,149,141,0.45)'
            }}
          >
          <Toolbar sx={{justifyContent: 'space-between'}}>
            <Button 
              size='large' 
              sx={{ 
                justifyContent: 'flex-start', 
                color: '#FFF', 
                fontWeight: 'bold' 
              }}
              onClick={handleBack}
            >
              Go Back
            </Button>
            <IconButton
              size="medium"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <i className='fas fa-bars travel-menu'/>
            </IconButton>
            <SwipeableDrawer
              anchor={'right'}
              open={click}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              {list()}
            </SwipeableDrawer>
            <Grid className='travel-links' sx={{ display: {xs:'none', sm:'flex'}, justifyContent: 'space-between'}}>
              <Grid item>
                Link 1   
              </Grid>
              <Grid item>
                Link 2
              </Grid>
              <Grid item>
                Link 3
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
      <div className='travel-home-btn'>
        <Typography 
        variant='h4' 
        component='h1' 
        sx={{
          textAlign: 'center',
          color: '#FFF',
          fontWeight: 'bold',
          textShadow: '4px 4px rgb(56,77,176)'
        }}
        >
          Your Adventures Start Here
        </Typography>
        <Button 
          variant='outlined' 
          size='large' 
          sx={{ 
            color: '#FFF', 
            borderColor: '#FFF', 
            backgroundColor: 'rgba(250,149,141)',
            fontSize: '1.3em',
            "&:hover": { 
              backgroundColor: 'rgba(250,149,141, 0.85)',
              color: '#FFF',
              borderColor: '#FFF'
            },
            "&:active": {
              borderColor: '#FFF'
            }
          }}
        >
          Book Here!
        </Button>
      </div>
      <footer className='travel-footer'>&copy;2021</footer>
    </div>
  )
}

export default Travel;