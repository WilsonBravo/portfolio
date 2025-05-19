'use client';

import React from 'react';
import Image from 'next/image';

import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Switch,
  useColorScheme,
  Typography,
} from '../material-ui/material-ui';
import { Icon, faBars } from '../icon/icon';
import { images } from '@/common/constants/images';
import { MaterialUISwitch } from '../mui-switch/mui-switch';

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [checked, setChecked] = React.useState(true);
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    setMode(event.target.checked ? 'dark' : 'light');
  };

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        boxShadow: '1px 2px 15px 4px rgba(0,0,0,0.3)',
        WebkitBoxShadow: '1px 2px 15px 4px rgba(0,0,0,0.3)',
        MozBoxShadow: '1px 2px 15px 4px rgba(0,0,0,0.3)',
        zIndex: 100,
      }}
      component="header"
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <Image alt="logo" width={50} height={50} src={images.logo} />
        <Image alt="lemon" width={50} height={50} src={images.lemon} />
      </Box>
      <Box>
        <IconButton
          sx={{ padding: 2 }}
          id="user-menu-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <Icon icon={faBars} />
        </IconButton>
        <Menu
          id="user-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Switch
              checkedIcon={
                <Box
                  sx={{
                    borderRadius: '50%',
                    backgroundColor: 'secondary.main',
                    width: '24px',
                    height: '24px',
                    textAlign: 'center',
                  }}
                >
                  <Typography color="textPrimary">Es</Typography>
                </Box>
              }
              icon={
                <Box
                  sx={{
                    borderRadius: '50%',
                    backgroundColor: 'secondary.main',
                    width: '24px',
                    height: '24px',
                    textAlign: 'center',
                  }}
                >
                  <Typography>En</Typography>
                </Box>
              }
            />
          </MenuItem>
          <MenuItem>
            <MaterialUISwitch checked={checked} onChange={handleChange} />
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export { Header };
