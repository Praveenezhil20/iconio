import React from 'react';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Body5() {
    return (
        <Box 
            sx={{ 
                flexGrow: 1, 
                height: 'auto', 
                marginTop: { xs: '20px', sm: '30px' },
                padding: { xs: '0 16px', sm: '0 32px' } 
            }}
        >
            <Grid container spacing={2} columns={16} alignItems="center">
                {}
                <Grid 
                    item 
                    xs={12} 
                    sm={6} 
                    sx={{
                        display: 'flex',
                        justifyContent: { xs: 'center', sm: 'flex-start' }, 
                        marginTop: { xs: '10px', sm: '0' }, 
                    }}
                >
                    <img 
                        src="/pana.png" 
                        alt="" 
                        style={{
                            maxWidth: '100%', 
                            height: 'auto'
                        }} 
                    />
                </Grid>

                {}
                <Grid 
                    item 
                    xs={12} 
                    sm={10} 
                    sx={{
                        marginTop: { xs: '20px', sm: '0' }, 
                        paddingLeft: { sm: '150px' }, 
                    }}
                >
                    <Box>
                        <div style={{
                            textAlign: 'left', 
                            fontSize: '1rem', 
                            width: '100%', 
                        }}>
                            <h1 style={{ margin: '0' }}>
                                How to design your site footer like 
                            </h1>
                            <h1 style={{ margin: '0' }}>
                                we did
                            </h1>
                            <p style={{ 
                                color: 'black', 
                                textAlign: 'left', 
                                fontSize: '1rem', 
                                margin: '10px 0' 
                            }}>
                                Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
                                massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
                                In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus.
                                In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
                                commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis 
                                libero. Donec consectetur faucibus ipsum id gravida.
                            </p>
                            <Button 
                                sx={{ 
                                    bgcolor: 'green', 
                                    color: 'white', 
                                    marginTop: '20px', 
                                    textTransform: 'none' 
                                }} 
                                variant="contained"
                            >
                                Learn More
                            </Button>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Body5;
