import React from 'react';
import { Box, Grid2 } from '@mui/material';

import './hello-world.scss';

const HelloWorld: React.FC = () => {
  return (
    <Grid2 sx={{ mt: 3 }} direction={'row'}>
      <Box display={'flex'} justifyContent={'center'}>
        <Box className="terminal shadow">
          <pre>
            {'>'} Hello World<span>_</span>
          </pre>
        </Box>
      </Box>
    </Grid2>
  );
};

export default HelloWorld;
