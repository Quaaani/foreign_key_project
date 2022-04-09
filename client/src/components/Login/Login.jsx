import React from 'react';
import{TextField, Button, Container, Select, MenuItem, InputLabel, FormControl, Typography, Alert, AlertTitle} from '@mui/material';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import {axiosLoginUserAAC} from '../../redux/asyncActionCreators/userAAC';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import axios from '../../axios/axios'
import { initSessionAC } from '../../redux/actionCreators/sessionAC'
import { axiosInitSession } from '../../redux/asyncActionCreators/sessionAAC'



function Login(props) {
  const navToHome = useNavigate();
  
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm();

  const [msg, setMsg] = useState('')
  const [toggle, setToggle] = useState(false)

  const onFormSubmit = async(data) => {
    
    try {
      await dispatch(axiosLoginUserAAC(data))
      await dispatch(axiosInitSession())
      navToHome("/home")
    } catch (error) {
      setMsg(error.response.data.message)
      setToggle(true)
      setTimeout(() => {
        setToggle(false)
      }, 2000);
    }
  }


  return (
    <Container
      maxWidth="sm"
    >
      <Typography variant="h2" gutterBottom component="h2" sx={{my: 7, mx: "auto", textAlign: "center"}}>
        Login
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
          <Button sx={{width: "150px", "margin": " 40px auto"}} variant="contained" type="submit">Login</Button>

        {toggle && <Alert severity="error" sx={{m: 1, mb: 7}}>
          <AlertTitle>Ошибка</AlertTitle>
          {msg}
        </Alert>}
      </FormControl>

    </Container>
    
  );
}

export default Login;
