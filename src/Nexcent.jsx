import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const pages = ['Home', 'Service', 'Products', 'Feature', 'Testimonial', 'FAQ'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isIpadPro = useMediaQuery('(min-width: 1024px) and (max-width: 1366px)');

    return (
        <AppBar position="static" sx={{ bgcolor: 'white', boxShadow: 'none' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Mobile menu button */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    {/* Logo */}
                    <AdbIcon sx={{ display:  { xs: 'flex', md: 'flex', }, mr: 1,marginLeft:'0px' }} />
                    <img src="/Logonex.png" alt="logo" style={{}} />

                    {/* Desktop menu */}
                    <Box 
                        sx={{ 
                            flexGrow: 1, 
                            display: { xs: 'none', md: 'flex' }, 
                            justifyContent: 'center', 
                            ml: isIpadPro ? '80px' : 'auto', 
                            maxWidth: isIpadPro ? '700px' : '500px', 
                            marginLeft:'270px'
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                component={Link}
                                to={`/${page.toLowerCase()}`}
                                
                                sx={{ 
                                    my: 2, 
                                    color: 'black', 
                                    display: 'block', 
                                    textTransform: 'none', 
                                    px: isIpadPro ? 2 : 1.5 ,
                                    
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* Login/Sign Up buttons */}
                    <Box 
                        sx={{ 
                            flexGrow: 1, 
                            display: 'flex', 
                            justifyContent: `${isSmallScreen ? 'flex-start' : 'flex-end'}`, 
                            marginRight:  '2px' 
                        }}
                    >
                        <Stack spacing={2} direction="row">
                            <Button sx={{ color: 'green', textTransform: 'none' }} variant="text" component={Link} to="/login">Login</Button>
                            {!isSmallScreen && (
                                <Button sx={{ backgroundColor: 'green', textTransform: 'none',marginRight:'20px' }} variant="contained" component={Link} to="/signup">Sign Up</Button>
                            )}
                        </Stack>
                    </Box>

                    {/* Mobile dropdown menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                bgcolor: 'white',
                                width: '100%',
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={`/${page.toLowerCase()}`} >
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
