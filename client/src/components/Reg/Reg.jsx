import React, { useRef } from 'react';
import{TextField, Button, Container, Select, MenuItem, InputLabel, FormControl, Typography, Alert, AlertTitle} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import {axiosAddUserAAC} from '../../redux/asyncActionCreators/userAAC'
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInitSession } from '../../redux/asyncActionCreators/sessionAAC'


function Reg(props) {

  const dispatch = useDispatch();
  const navToHome = useNavigate()

  const {register, handleSubmit} = useForm();

  const [msg, setMsg] = useState('')
  const [toggle, setToggle] = useState(false)

  const onFormSubmit = async (data) => {
  
    try {
      await dispatch(axiosAddUserAAC(data))
      await dispatch(axiosInitSession())
      navToHome("/home")

    } catch (error) {
      setMsg(error.response.data.message)
      setToggle(true)
      setTimeout(() => {
        setToggle(false)
      }, 2000
      )
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
      onSubmit={handleSubmit(onFormSubmit)}
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
          
          {...register("user_firstName")}
          name="user_firstName"
        />
        <TextField
          fullWidth
          label="Last Name"
          required

          {...register("user_lastName")}
          name="user_lastName"
        />
          <TextField
            fullWidth
            id="outlined-read-only-input"
            label="Email"
            type="email"
            required

            {...register("user_email")}
            name="user_email"
          />
        <TextField
          fullWidth
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"

          {...register("user_password")}
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

            {...register("user_role")}
            name="user_role"
          >
            <MenuItem selected value="student">Student</MenuItem>
            <MenuItem value="teacher">Teacher</MenuItem>
          </Select>
        </FormControl>

          <Button sx={{width: "150px", "margin": " 40px auto"}} variant="contained" type="submit">Registration</Button>

        {toggle && <Alert severity="error" sx={{m: 1, mb: 7}}>
          <AlertTitle>Ошибка</AlertTitle>
          {msg}
        </Alert>}
      </FormControl>

    </Container>
    
  );
}

export default Reg;
