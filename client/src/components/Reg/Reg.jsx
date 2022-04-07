import React from 'react';
import{TextField, Button, Container, Box} from '@mui/material'


function Reg(props) {
  return (
    <Container
      maxWidth="sm"
    >
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1 , justifyItems: "center"},
      }}
      >
        <div>
        <TextField
          required
          id="outlined-required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>

        <Button>Hello</Button>
      </Box>

    </Container>
    
  );
}

export default Reg;
