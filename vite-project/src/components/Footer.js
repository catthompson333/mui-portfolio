import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
  return (
    <Box sx={{ bgcolor: 'text.secondary', p: 2, mt: 5, textAlign: 'center' }}>
      <IconButton color="inherit" href="https://github.com/catthompson333">
        <GitHubIcon />
      </IconButton>
      <IconButton color="inherit" href="https://linkedin.com/in/catthompson333">
        <LinkedInIcon />
      </IconButton>
    </Box>
  );
}

export default Footer;
