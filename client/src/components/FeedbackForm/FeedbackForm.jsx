import React from 'react';
import { useState} from 'react';
import{TextareaAutosize, TextField, Button, Container, FormControl, Typography, Alert, AlertTitle, Paper, Avatar} from '@mui/material';
import {AccountCircle} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';


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
  textField: {
    padding: "10px",
    minHeight: "140px",
    border: "1px solid rgba(0, 0, 0, .23)",
    borderRadius: 10,
    fontFamily: "Roboto",
    fontSize: "1rem"
  },
  btnWrapper: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "40px 0 40px"
  }
}))


function FeedbackForm(props) {
  const styles = useStyles();
  // const dispatch = useDispatch();

  const navToHome = useNavigate();

  const {register, handleSubmit} = useForm();

  const { session } = useSelector((state) => state.sessionReducer);
  // console.log(session);

  const [msg, setMsg] = useState('')


  const onFormSubmit = async(data) => {
    data.user_id = session.id
    navToHome("/home")
  }

  return (

    <div className={styles.overlay}
      onClick={()=> navToHome("/")}
    >
      <Container
      maxWidth="sm"
      className={styles.form}
      sx={{ maxWidth: { lg: "45vw", md: "55vw", sm: "80vw", xs: "85vw"}, flexGrow: 1 }}
      onClick={(event) => event.stopPropagation()}
    >
        <Typography variant="h2" gutterBottom component="h2" sx={{my: 7, marginBottom: 0, mx: "auto", textAlign: "center"}}>
          Отзыв
        </Typography>
        <FormControl
        onSubmit={handleSubmit(onFormSubmit)}
          component="form"
          fullWidth
          sx={{
            '& .MuiTextField-root': { m: 1 , justifyItems: "center"},
          }}
        >
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 100,
              pl: 2,
              bgcolor: "background.default",
            }}
            className={styles.authorBox} 
          > <Avatar className={styles.ava} src={`./img/${session.avatar}`} />
            <Typography sx={{marginLeft: "1vw"}}>{`${session.user_firstName} ${session.user_lastName}`}</Typography>
          </Paper>

          <TextareaAutosize
            required
            placeholder="Оставить отзыв..."

            {...register("feedback")}
            className={styles.textField}
          />

          <div className={styles.btnWrapper}>
            <Button sx={{width: "150px"}} variant="contained" type="submit">Отправить</Button>
            <Button sx={{width: "150px"}} variant="contained" color="error" onClick={()=> navToHome("/")}>Отмена</Button>
          </div>
        </FormControl>
      </Container>
    </div>

  );
}

export default FeedbackForm;
