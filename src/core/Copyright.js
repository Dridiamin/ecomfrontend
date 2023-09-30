import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

export default function Footer() {
  return (
    <Box mt={8} mb={4}>
      <Typography variant='body2' color='textSecondary' align='center'>
        {'Copyright © '}
        <Link color='inherit' href='#'>
          TechStore
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      <br></br><br></br>
      <Typography variant='body2' color='textSecondary' align='center'>
        Contact us : TechStore@help.com
        <br></br><br></br>
        Mobile : +12345678
      </Typography>
    </Box>
  );
}
