import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

const ToolbarMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Mi Aplicación
        </Typography>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={() => handleNavigate('/')}>Inicio</MenuItem>
          <MenuItem onClick={() => handleNavigate('/about')}>Acerca de</MenuItem>
          <MenuItem onClick={() => handleNavigate('/menu1')}>Menu 1</MenuItem>
          <MenuItem onClick={() => handleNavigate('/menu2')}>Menu 2</MenuItem>
          <MenuItem onClick={() => handleNavigate('/menu3')}>Menu 3</MenuItem>
          <MenuItem onClick={() => handleNavigate('/menu4')}>Menu 4</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default ToolbarMenu;
