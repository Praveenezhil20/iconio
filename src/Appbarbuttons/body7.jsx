import React from 'react';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Icon4 from './Icon4.png';
import icon5 from './icon5.png';
import Icon6 from './Icon6.png';
import Icon7 from './Icon7.png';

const Body7 = () => {
  return (
    <Box sx={{ flexGrow: 1, fontFamily: 'Inter', bgcolor: 'rgb(243,243,243)', py: 4, mt: 4 }}>
      <Grid container spacing={2} alignItems="center">

        <Grid item xs={12} md={6}>
          <Box sx={{ px: { xs: 2, sm: 4 }, textAlign: { xs: 'center', md: 'left' }, mt: { xs: 2, md: 0 }, fontFamily: 'Inter' ,marginLeft:'60px'}}>
            <Box component="h1" sx={{ margin: '0', fontFamily: 'inherit', whiteSpace: 'normal' }}>
              Helping a local
            </Box>
            <Box component="h1" sx={{ margin: '0', color: '#4CAF4F', fontFamily: 'inherit', whiteSpace: 'normal' }}>
              business reinvent itself
            </Box>
            <Box component="p" sx={{ color: 'black', margin: '10px 0', fontSize: '1rem', fontFamily: 'inherit', whiteSpace: 'normal' }}>
              We reached here with our hard work and dedication
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={2} justifyContent={{ xs: 'center', md: 'flex-end' }}>
            <Grid item xs={6} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <img src={Icon4} alt="Members" />
                <Box sx={{ fontFamily: 'Inter' }}>
                  <Box component="b" sx={{ fontSize: '20px', margin: '0', fontFamily: 'inherit' }}>2,245,341</Box>
                  <Box component="p" sx={{ fontSize: '15px', margin: '0', fontFamily: 'inherit' }}>Members</Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={6} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <img src={icon5} alt="Event Bookings" />
                <Box sx={{ fontFamily: 'Inter' }}>
                  <Box component="b" sx={{ fontSize: '20px', margin: '0', fontFamily: 'inherit' }}>828,867</Box>
                  <Box component="p" sx={{ fontSize: '15px', margin: '0', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>Event Bookings</Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={6} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <img src={Icon6} alt="Clubs" />
                <Box sx={{ fontFamily: 'Inter' }}>
                  <Box component="b" sx={{ fontSize: '20px', margin: '0', fontFamily: 'inherit' }}>46,328</Box>
                  <Box component="p" sx={{ fontSize: '15px', margin: '0', fontFamily: 'inherit' }}>Clubs</Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={6} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <img src={Icon7} alt="Payments" />
                <Box sx={{ fontFamily: 'Inter' }}>
                  <Box component="b" sx={{ fontSize: '20px', margin: '0', fontFamily: 'inherit' }}>1,926,436</Box>
                  <Box component="p" sx={{ fontSize: '15px', margin: '0', fontFamily: 'inherit' }}>Payments</Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Body7;

