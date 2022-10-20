import React from "react";
import Box from "@material-ui/core/Box";
import { Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

export default function Introduction() {
    const { user } = useAuth0();
      return (
        <>
  <Typography variant="h5">This web application provides a comprehensive epedemic distribution simulation based on real world features. </Typography>
  <Typography variant="h5">Users are supposed to enter variables include: Region, Symptoms and Mediations. </Typography>
  <Typography variant="h5">The application will indicate the simulation process and accumative results. </Typography>
       <div>
        <Box
        component="img"
        sx={{
          height: 350,
          width: 550,
          maxHeight: { xs: 333, md: 167 },
          maxWidth: { xs: 550, md: 250 },
        }}
        alt="Sea"
       src="https://raw.githubusercontent.com/ItsKiri/Epidemic-Distribution-Simulator/main/src/images/441661295556_.pic.jpg"
      />
  
      
           <Box
        component="img"
        sx={{
          height: 350,
          width: 550,
          maxHeight: { xs: 353, md: 167 },
          maxWidth: { xs: 550, md: 250 },
        }}
        alt="Blood"
        src="https://raw.githubusercontent.com/ItsKiri/Epidemic-Distribution-Simulator/main/src/images/461661295591_.pic.jpg"
      />
      </div>
      <Box
        component="img"
        sx={{
          height: 780,
          width: 1100,
          maxHeight: { xs: 653, md: 167 },
          maxWidth: { xs: 550, md: 250 },
        }}
        alt="Diseases"
        src="https://raw.githubusercontent.com/ItsKiri/Epidemic-Distribution-Simulator/main/src/images/431661295538_.pic.jpg"
      />  
           <Box
        component="img"
        sx={{
          height: 780,
          width: 1100,
          maxHeight: { xs: 653, md: 167 },
          maxWidth: { xs: 550, md: 250 },
        }}
        alt="Insects"
        src="https://raw.githubusercontent.com/ItsKiri/Epidemic-Distribution-Simulator/main/src/images/471661295640_.pic.jpg"
      />  
        </>
      );
    }