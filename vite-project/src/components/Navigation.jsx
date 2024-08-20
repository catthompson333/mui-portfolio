import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    navigate(newValue);
  };

  return (
    <Tabs
      value={location.pathname}
      onChange={handleTabChange}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="About Me" value="/about" />
      <Tab label="Portfolio" value="/portfolio" />
      <Tab label="Contact" value="/contact" />
      <Tab label="Resume" value="/resume" />
    </Tabs>
  );
}

export default Navigation;
