import React from 'react';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Body() {
    return (
        <Box 
            sx={{ 
                flexGrow: 1,
                bgcolor: '#f5f5f5',
                height: 'auto',
                py: 4, 
                textAlign: { xs: 'left', md: 'left' } 
            }}
        >
            <Grid container spacing={2} columns={16}>
                <Grid item xs={12} md={8}>
                    <Box sx={{ height:'300px',marginLeft:'30px', padding: { xs: '0 16px', md: '0 50px' } }}>
                        <Typography 
                            variant="h1" 
                            sx={{ 
                                marginTop:'70px',
                                fontSize: { xs: '50px', md: '50px' }, 
                                mb: 1 
                            }}
                        >
                            Lessons and insights
                        </Typography>
                        <Typography 
                            variant="h1" 
                            sx={{ 
                                color: 'green', 
                                fontSize: { xs: '50px', md: '50px' }, 
                                mb: 1
                            }}
                        >
                            from 8 years
                        </Typography>
                        <Typography 
                            variant="body1" 
                            sx={{ 
                                color: 'black', 
                                fontSize: { xs: '16px', md: '20px' }, 
                                mb: 2 
                            }}
                        >
                            Where to grow your business as a photographer: site or social media?
                        </Typography>
                        <Button 
                            sx={{ 
                                bgcolor: 'green', 
                                color: 'white', 
                                textTransform: 'none', 
                                mt: 2 
                            }} 
                            variant="contained"
                        >
                            Register
                        </Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} sx={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    mt: { xs: 2, md: 0 } 
                }}>
                    <img 
                        src="/Illustration.png" 
                        alt="Illustration" 
                        style={{ 
                            maxWidth: '100%', 
                            height: 'auto', 
                            marginLeft:'250px'
                        }} 
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Body;
