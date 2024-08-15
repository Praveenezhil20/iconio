import * as React from 'react';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import Box from '@mui/material/Box';

import image18 from './image 18 (1).png';
import image19 from './image 19.png';
import image20 from './image 20.png';
import Frame13 from './Frame 13 (1).png';

const NewCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto; /* Changed to auto */
  width: 100%; /* Changed to 100% for better scaling */

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    margin-bottom: 100px;
  }

  @media (max-width: 480px) {
    height: auto;
    width: 100%;
    margin-bottom: 20px;
  }
`;

const NewCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  height: auto; /* Changed to auto */
  width: 100%; /* Changed to 100% for better scaling */
  max-width: 350px; /* Added max-width for larger screens */

  @media (max-width: 768px) {
    padding: 10px;
    max-width: 300px;
  }

  @media (max-width: 480px) {
    padding: 0;
    max-width: 100%;
  }
`;

const NewCardContent = styled.div`
  text-align: center;
  background-color: #F5F7FA;
  border-radius: 8px;
  padding: 16px;
  height: auto; /* Changed to auto */
  width: 100%;
  max-width: 300px; /* Added max-width */
  margin-top: -50px;
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 12px;
    max-width: 250px;
  }

  @media (max-width: 480px) {
    margin-top: -30px;
    padding: 10px;
    max-width: 90%;
  }
`;

const ResponsiveBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0px;
  flex-direction: row; /* Ensure row direction on larger screens */
  margin-bottom: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px; /* Adjust gap for better spacing on tablets */
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 50px;
  }
`;


function NinthPage() {
  return (
    <ResponsiveBox>
      <NewCardContainer>
        <NewCard>
          <img src={image18} style={{ width: '100%', height: 'auto' }} alt="Safeguarding Processes" />
          <NewCardContent>
            <Typography variant='h4' fontSize={'20px'} marginBottom={'20px'} color={'gray'}>
              Creating Streamlined Safeguarding Processes with OneRen
            </Typography>
            <img src={Frame13} alt="OneRen Logo" />
          </NewCardContent>
        </NewCard>
      </NewCardContainer>

      <NewCardContainer>
        <NewCard>
          <img src={image19} style={{ width: '100%', height: 'auto' }} alt="Safeguarding Processes" />
          <NewCardContent>
            <Typography variant='h4' fontSize={'20px'} marginBottom={'20px'} color={'gray'}>
            What are your safeguarding responsibilities and how can you manage them?
            </Typography>
            <img src={Frame13} alt="OneRen Logo" />
          </NewCardContent>
        </NewCard>
      </NewCardContainer>

      <NewCardContainer>
        <NewCard>
          <img src={image20} style={{ width: '100%', height: 'auto' }} alt="Safeguarding Processes" />
          <NewCardContent>
            <Typography variant='h4' fontSize={'20px'} marginBottom={'20px'} color={'gray'}>
            Revamping the Membership Model with Triathlon and the Australia
            </Typography>
            <img src={Frame13} alt="OneRen Logo" />
          </NewCardContent>
        </NewCard>
      </NewCardContainer>
    </ResponsiveBox>
  );
}

export default NinthPage;

