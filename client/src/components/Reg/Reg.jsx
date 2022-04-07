import React, { useRef } from 'react';
import{TextField, Button, Container, Select, MenuItem, InputLabel, FormControl, Typography} from '@mui/material'


function Reg(props) {

  const firstNameInput = useRef();
  const lastNameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();
  const roleInput = useRef();


  const onFormSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      user_firstName: firstNameInput.current.value,
      user_lastName: lastNameInput.current.value,
      user_email: emailInput.current.value,
      user_password: passwordInput.current.value,
      user_role: roleInput.current.value,
    }

    
    
  }


  return (
    <Container
      maxWidth="sm"
    >
      <Typography variant="h2" gutterBottom component="h2" sx={{my: 7, mx: "auto", textAlign: "center"}}>
        Registration
      </Typography>
      <FormControl
      onSubmit={onFormSubmit}
        component="form"
        fullWidth
        sx={{
          '& .MuiTextField-root': { m: 1 , justifyItems: "center"},
        }}
      >
        <TextField
          fullWidth
          label="First Name"
          required
          id="outlined-required"
          
          ref={firstNameInput}
          name="user_firstName"
        />
        <TextField
          fullWidth
          label="Last Name"
          required

          ref={lastNameInput}
          name="user_lastName"
        />
          <TextField
            fullWidth
            id="outlined-read-only-input"
            label="Email"
            type="email"
            required

            ref={emailInput}
            name="user_email"
          />
        <TextField
          fullWidth
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"

          ref={passwordInput}
          name="user_password"
        />
        <FormControl fullWidth sx={{ m: 1}}>
          <InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
          <Select
            required
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Age"
            defaultValue="student"

            ref={roleInput}
            name="user_role"
          >
            <MenuItem selected value="student">Student</MenuItem>
            <MenuItem value="teacher">Teacher</MenuItem>
          </Select>
        </FormControl>

        <Button  sx={{ my: 7, mx: "auto", width: "200px"}} variant="contained" type="submit">Register</Button>
      </FormControl>

    </Container>
    
  );
}

export default Reg;
