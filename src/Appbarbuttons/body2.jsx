
import * as React from "react";
import Box from "@mui/material/Box";

function Body2() {
    return (
        <div className="App">
            <Box>
                <h1 style={{margin: 0,marginTop:'20px'}}>
                    Our Clients
                </h1>
                <p style={{margin: 0}}>
                    We have been working with some Fortune 500+ clients
                </p>
            </Box>
            <Box display="grid" gridTemplateColumns="repeat(10, 1fr)" gap={1} sx={{alignContent:'center',marginTop:'30px',width:'100%' }}> 
                <Box gridColumn="span 2">
                    <img src="/Logo.png" alt=""/>
                </Box>
                <Box gridColumn="span 1.5">
                    <img src="/Logo (1).png" alt=""/>
                </Box>
                <Box gridColumn="span 2">
                    <img src="/Logo (2).png" alt=""/>
                </Box>
                <Box gridColumn="span 1.5">
                    <img src="/Logo (3).png" alt=""/>
                </Box>
                <Box gridColumn="span 2">
                    <img src="/Logo (4).png" alt=""/>
                </Box>
                <Box gridColumn="span 1.5">
                    <img src="/Logo (5).png" alt=""/>
                </Box>
                
            </Box>
            
            <Box style={{marginTop:'35px'}}>
                <h2 style={{margin: 0}}>
                    Manage your entire community

                </h2>
                <h2 style={{margin: 0}}>
                    in a single system
                </h2>
                <p style={{margin: 0}}>Who is Nextcent suitable for?

                </p>

            </Box>


        </div>

    );
}

export default Body2;
