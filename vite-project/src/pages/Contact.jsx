import React, { useState } from 'react';
import { Box, TextField, Button, FormHelperText } from '@mui/material';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Email is not valid';
    }
    if (!message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      // Handle form submission
      console.log({ name, email, message });
    }
  };

  return (
    <Box
      component="form"
      sx={{ mt: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}
      onSubmit={handleSubmit}
    >
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={Boolean(errors.name)}
      />
      {errors.name && <FormHelperText error>{errors.name}</FormHelperText>}

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={Boolean(errors.email)}
      />
      {errors.email && <FormHelperText error>{errors.email}</FormHelperText>}

      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        error={Boolean(errors.message)}
      />
      {errors.message && <FormHelperText error>{errors.message}</FormHelperText>}

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
}

export default Contact;
