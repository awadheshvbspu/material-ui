import React from 'react';
import {Box} from '@mui/material';

export default function MuiResponsive() {
  return (
    <Box sx={{
        width: {
            xs: 100,
          sm:200,
          md:300,
          lg:400,
          xl:500
        },
      height: "300px",
      bgcolor:'primary.main'
    }}>

    </Box>
  )
}
