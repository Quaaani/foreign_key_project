import React from 'react';
import{TextField, Button, Container, Select, MenuItem, InputLabel, FormControl, Typography, Alert, AlertTitle} from '@mui/material';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import {axiosLoginUserAAC} from '../../redux/asyncActionCreators/userAAC';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import axios from '../../axios/axios'
import { initSessionAC } from '../../redux/actionCreators/sessionAC'
import { axiosInitSession } from '../../redux/asyncActionCreators/sessionAAC';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    zIndex:200
  },
  form: {
    backgroundColor: "white",
    "box-shadow": "0px 10px 28px 12px rgba(34, 60, 80, 0.28)",
    borderRadius: "20px"
  },
  btnWrapper: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "40px 0 40px"
  }
}))


function Login(props) {
  const styles = useStyles();

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
    <div className={styles.overlay}
      onClick={()=> navToHome("/")}
    >
      <Container
      maxWidth="sm"
      className={styles.form}
      onClick={(event) => event.stopPropagation()}
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
          <div className={styles.btnWrapper}>
            <Button sx={{width: "150px"}} variant="contained" type="submit">Login</Button>
            <Button sx={{width: "150px"}} variant="contained" color="error" onClick={()=> navToHome("/")}>Cancel</Button>
          </div>
          {toggle && <Alert severity="error" sx={{m: 1, mb: 7}}>
            <AlertTitle>Ошибка</AlertTitle>
            {msg}
          </Alert>}
        </FormControl>
      </Container>
    </div>
    
    
  );
}

export default Login;
