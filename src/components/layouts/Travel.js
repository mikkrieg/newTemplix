import React, { useContext, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router'
import { AppContext } from '../../AppContext';
import './../../styles/css/layouts/travel.css';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InfoModal from '../InfoModal';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Travel = () => {
  const [ click, setClick ] = useState(false);
  const [ open, setOpen ] = useState(false);
  const { setOnProject } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    setOnProject(true);
  }, [])

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
    navigate('/layouts');
  }

  const handleMenuClick = () => {
    setClick(!click);
    toggleDrawer(true);
  }

  const handleModalClick = () => {
    if(open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
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
        <Grid 
        sx={{
          display: 'flex', 
          justifyContent: 'flex-end', 
          marginRight: '20px', 
          fontSize: '1.6em', 
          color: '#FFF'
          }}
        >
          <Grid item>
            <i className='fas fa-times drawer-icon'/>
          </Grid>
        </Grid>
        {['Link 1', 'Link 2', 'Link 3'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText 
              className='travel-links' 
              primary={text} 
              sx={{ 
                color: '#FFF'
              }}
            />
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
                fontWeight: 'bold', 
                fontSize: {md: '1.6em'}
              }}
              onClick={handleBack}
            >
              Go Back
            </Button>
            <IconButton
              sx={{ display: {sm: 'none'}}}
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
            <Grid 
              className='travel-links' 
              sx={{ 
                display: {
                xs:'none', 
                sm:'flex'}, 
                justifyContent: 'flex-end'
              }}
            >
              <Grid 
                item 
                sx={{
                  marginRight: '60px', 
                  fontSize: '1.4em', 
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    transition: 'all .2s ease-in-out'
                  }
                }}
              >
                Link 1   
              </Grid>
              <Grid 
                item 
                sx={{
                  marginRight: '60px', 
                  fontSize: '1.4em', 
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    transition: 'all .2s ease-in-out'
                  }
                }}
              >
                Link 2
              </Grid>
              <Grid 
                item 
                sx={{
                  marginRight: '60px', 
                  fontSize: '1.4em', 
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    transition: 'all .2s ease-in-out'
                  }
                }}
              >
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
      <Button className="travel-modal" onClick={handleModalClick}>?</Button>
      <InfoModal 
        show={open} 
        onHide={handleModalClick} 
        title="Forest themed layout"
        styling={["MaterialUI"]}
        download="15mb"
        technologies={["React", "JavaScript"]}
        css="1"
        content="1"
        image="1"
        installs={['NPM or another package manager', 'React', 'create-react-app', 'MaterialUI v5.2.3^']}
      />
      <footer className='travel-footer'>&copy;2021</footer>
    </div>
  )
}

export default Travel;