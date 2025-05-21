'use client';

import React, { useEffect } from 'react';
import { Image } from '../next/next';
import { useLocale } from 'next-intl';

import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Switch,
  useColorScheme,
  Typography,
  useTheme,
} from '../material-ui/material-ui';

import { images } from '@/common/constants/images';
import { usePathname, redirect } from '@/i18n/navigation';

import { MaterialUISwitch } from '../mui-switch/mui-switch';
import { Icon, faBars } from '../icon/icon';

const Header: React.FC = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [checkedTheme, setCheckedTheme] = React.useState(
    theme.palette.mode == 'dark'
  );
  const [checkedI18n, setCheckedI18n] = React.useState(locale == 'es');

  useEffect(() => {
    setCheckedTheme(theme.palette.mode == 'dark');
  }, [theme.palette.mode]);

  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  const open = Boolean(anchorEl);

  const handleChangeTheme = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedTheme(event.target.checked);
    setMode(event.target.checked ? 'dark' : 'light');
  };
  const handleChangeI18n = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedI18n(event.target.checked);
    redirect({ href: pathname, locale: checkedI18n ? 'en' : 'es' });
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
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
              checked={checkedI18n}
              onChange={handleChangeI18n}
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
            <MaterialUISwitch
              checked={checkedTheme}
              onChange={handleChangeTheme}
            />
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export { Header };
