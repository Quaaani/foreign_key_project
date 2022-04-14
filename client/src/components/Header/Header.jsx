import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { axiosInitSession } from '../../redux/asyncActionCreators/sessionAAC';
import { Link, useNavigate } from 'react-router-dom';
import { axiosLogoutUserAAC } from '../../redux/asyncActionCreators/userAAC';
import axios from '../../axios/axios'
import { axiosInitFavoritesAAC } from '../../redux/asyncActionCreators/favoritesAAC';
import { axiosInitDictionaryAAC } from '../../redux/asyncActionCreators/dictionariesAAC';
import { axiosInitCards } from '../../redux/asyncActionCreators/coursesAAC';
import { axiosInitFeedback } from '../../redux/asyncActionCreators/feedbackAAC';
import { axiosInitTLevels } from '../../redux/asyncActionCreators/tlevelsAAC';

const pages = ['Products', 'Pricing', 'Blog'];

const Header = () => {
  const dispatch = useDispatch();
  const { useEffect } = React
  const navigate = useNavigate();

  const { session } = useSelector((state) => state.sessionReducer);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  useEffect(async () => {
    try {
      await dispatch(axiosInitSession());
      await dispatch(axiosInitFavoritesAAC())
      await dispatch(axiosInitDictionaryAAC())
      await dispatch(axiosInitCards())
      await dispatch(axiosInitFeedback())
      await dispatch(axiosInitTLevels());
      localStorage.clear()
    } catch (error) {
      console.log('/session Error =>', { ...error });
    }
  }, [dispatch]);

  // Logout Функция
  const logoutClick = async (event) => {
    await dispatch(axiosLogoutUserAAC());
    handleCloseUserMenu()
    localStorage.clear()
    navigate('/home')
  };

  // Profile Функция
  const profileClick = async (event) => {
    window.scrollTo(0, 0);
    // await dispatch(axiosInitFavoritesAAC())
    // await dispatch(axiosInitDictionaryAAC())
  };


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <>
    <AppBar style={{zIndex: '100',
      position: 'sticky', backgroundColor: "rgba(38,83,81, .7)"}}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link to="/home" style={{textDecoration: "none", color: "inherit"}}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              ForeignKey
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <a href='#stat' style={{"textDecoration": "none", "color": "inherit"}}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Статистика</Typography>
                </MenuItem>
              </a>

              <a href='#courses' style={{"textDecoration": "none", "color": "inherit"}}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Курсы</Typography>
                </MenuItem>
              </a>

              <a href='#feedback' style={{"textDecoration": "none", "color": "inherit"}}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Отзывы</Typography>
                </MenuItem>
              </a>

              <a href='#gallery' style={{"textDecoration": "none", "color": "inherit"}}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Галерея</Typography>
                </MenuItem>
              </a>

            </Menu>
          </Box>
          <Link to="/home" style={{textDecoration: "none", color: "inherit"}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            FK
          </Typography>
          </Link>
          <Container maxWidth="sm">
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: 'none',
                  md: 'flex',
                  justifyContent: 'space-around',
                },
              }}
            >

              <a href='#stat' style={{"textDecoration": "none", "color": "inherit"}}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Статистика
                </Button>
              </a>

              <a href='#courses' style={{"textDecoration": "none", "color": "inherit"}}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Курсы
                </Button>
              </a>

              <a href='#feedback' style={{"textDecoration": "none", "color": "inherit"}}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Отзывы
                </Button>
              </a>

              <a href='#gallery' style={{"textDecoration": "none", "color": "inherit"}}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Галерея
                </Button>
              </a>
            </Box>
          </Container>

          {session ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={`/img/avatars/${session.user_avatar}`} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to={'/profile'} onClick={profileClick}  style={{textDecoration: "none", color: "inherit"}}>
                    <Typography textAlign="center">Профиль</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Link to={'/mymap'} style={{textDecoration: "none", color: "inherit"}}>
                    <Typography textAlign="center">Моя Карта</Typography>
                  </Link>
                </MenuItem>
                <MenuItem onClick={logoutClick}>
                  <Typography textAlign="center">Выйти</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <>
              <Link
                to="/registration"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Регистрация</Typography>
                </MenuItem>
              </Link>

              <Link
                to="/login"
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Вход</Typography>
                </MenuItem>
              </Link>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
};

export default Header;
