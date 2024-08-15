import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // Reduced size of the boxes
    maxWidth: 300,
    margin: '0 auto', // Centering the boxes
}));

export default function Body3() {
    return (
        <Box sx={{ flexGrow: 1, mx: { xs: 1, sm: 2, md: 4 }, my: { xs: 2, sm: 4, md: 6 } }}>
            <Grid container spacing={2} justifyContent="center">
                <Grid xs={12} sm={4} display="flex" justifyContent="center">
                    <Item>
                        <Box>
                            <img src="/Icon1.png" alt="" style={{ width: '80px', height: 'auto' }} />
                            <h1 style={{ margin: '0', fontSize: '1.2rem' }}>
                                MemberShip
                            </h1>
                            <h1 style={{ margin: '0', fontSize: '1.2rem' }}>
                                Organisations
                            </h1>
                            <p style={{ margin: '0 0 10px', fontSize: '0.9rem' }}>
                                Our membership management software
                                provides full automation of membership
                                renewals and payments
                            </p>
                        </Box>
                    </Item>
                </Grid>
                <Grid xs={12} sm={4} display="flex" justifyContent="center">
                    <Item>
                        <Box>
                            <img src="/Icon2.png" alt="" style={{ width: '80px', height: 'auto' }} />
                            <h1 style={{ margin: '0', fontSize: '1.2rem' }}>
                                National
                            </h1>
                            <h1 style={{ margin: '0', fontSize: '1.2rem' }}>
                                Associations
                            </h1>
                            <p style={{ margin: '0', fontSize: '0.9rem' }}>
                                Our membership management software
                                provides full automation of membership
                                renewals and payments
                            </p>
                        </Box>
                    </Item>
                </Grid>
                <Grid xs={12} sm={4} display="flex" justifyContent="center">
                    <Item>
                        <Box>
                            <img src="/Icon3.png" alt="" style={{ width: '80px', height: 'auto' }} />
                            <h1 style={{ margin: '0', fontSize: '1.2rem' }}>
                                Clubs
                            </h1>
                            <h1 style={{ margin: '0', fontSize: '1.2rem' }}>
                                And Groups
                            </h1>
                            <p style={{ margin: '0 0 10px', fontSize: '0.9rem' }}>
                                Our membership management software
                                provides full automation of membership
                                renewals and payments
                            </p>
                        </Box>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
