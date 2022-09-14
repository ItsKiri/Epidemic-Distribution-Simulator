import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from '@mui/material/Box'

function Result({ result }) {
  return (
   
      // <Box  sx={{ border: '1px dashed grey' }}>
      <Typography variant="h5">{result}</Typography>
     // </Box>
    
  );
}

Result.propTypes = {};

export default Result;
