import React from 'react';
import{TextField, Button, Container, Select, MenuItem, InputLabel, FormControl, Typography, Alert, AlertTitle, Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { axiosAddUserAAC } from '../../redux/asyncActionCreators/userAAC';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInitSession } from '../../redux/asyncActionCreators/sessionAAC';
import { axiosInitFavoritesAAC } from '../../redux/asyncActionCreators/favoritesAAC';
import { axiosInitDictionaryAAC } from '../../redux/asyncActionCreators/dictionariesAAC';
import { axiosInitCards } from '../../redux/asyncActionCreators/coursesAAC';
import { axiosInitFeedback } from '../../redux/asyncActionCreators/feedbackAAC';
import { axiosInitTLevels } from '../../redux/asyncActionCreators/tlevelsAAC';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    zIndex: 200,
  },
  form: {
    backgroundColor: 'white',
    'box-shadow': '0px 10px 28px 12px rgba(34, 60, 80, 0.28)',
    borderRadius: '20px',
  },
  btnWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '40px 0 40px',
  },
}));

function Reg(props) {
  const styles = useStyles();

  const dispatch = useDispatch();
  const navToHome = useNavigate();

  const { register, handleSubmit } = useForm();

  const [msg, setMsg] = useState('');
  const [toggle, setToggle] = useState(false);


  const onFormSubmit = async (data) => {
    if (localStorage.getItem('user_level')) {
      data.user_level = +localStorage.getItem('user_level');
      data.user_age = +data.user_age
      data.user_phone = +data.user_phone
      try {
        await dispatch(axiosAddUserAAC(data));
        await dispatch(axiosInitSession());
        // await dispatch(axiosInitFavoritesAAC())
        // await dispatch(axiosInitDictionaryAAC())
        await dispatch(axiosInitCards())
        await dispatch(axiosInitFeedback())
        await dispatch(axiosInitTLevels());
        navToHome('/home');
      } catch (error) {
        setMsg(error.response.data.message);
        setToggle(true);
        setTimeout(() => {
          setToggle(false);
        }, 2000);
      }
    } else {
      data.user_age = +data.user_age
      data.user_phone = +data.user_phone
      try {
        await dispatch(axiosAddUserAAC(data));
        await dispatch(axiosInitSession());
        navToHome('/home');
      } catch (error) {
        setMsg(error.response.data.message);
        setToggle(true);
        setTimeout(() => {
          setToggle(false);
        }, 2000);
      }
    }
  };

  const navigate = useNavigate();

  return (
    <div className={styles.overlay} onClick={() => navigate('/')}>
      <Container
      maxWidth="sm"
      className={styles.form}
      onClick={(event) => event.stopPropagation()}
      
    >
        <Typography variant="h2" gutterBottom component="h2" sx={{my: 7, textAlign: "center"}}>
          Регистрация
        </Typography>
        <FormControl
          onSubmit={handleSubmit(onFormSubmit)}
          component="form"
          fullWidth
          sx={{
            '& .MuiTextField-root': { m: 1, justifyItems: 'center' },
          }}
        >
          <TextField
            label="Имя"
            required
            id="outlined-required"
            {...register('user_firstName')}
            name="user_firstName"
          />
          <TextField
            
            label="Фамилия"
            required
            {...register('user_lastName')}
            name="user_lastName"
          />
          <TextField
            
            id="outlined-read-only-input"
            label="Email"
            type="email"
            required

            {...register("user_email")}
            name="user_email"
          />
          <TextField
            
            required
            id="outlined-password-input"
            label="Пароль"
            type="password"
            autoComplete="current-password"
            {...register('user_password')}
            name="user_password"
          />
          <FormControl sx={{ m: 1}}>
            <InputLabel id="demo-simple-select-helper-label">Роль</InputLabel>
            <Select
              required
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Age"
              defaultValue="student"
              {...register('user_role')}
              name="user_role"
            >
              <MenuItem selected value="student">Студент</MenuItem>
              <MenuItem value="teacher">Преподаватель</MenuItem>
            </Select>
          </FormControl>

          <Accordion sx={{m: 1}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              
            >
              <Typography >Дополнительные поля...</Typography>
            </AccordionSummary>
            <AccordionDetails >

              <TextField
                
                label="Возраст"
                type="number"
                InputProps={{ inputProps: { min: 1} }}
                
                {...register("user_age")}
                name="user_age"
              />

              <TextField
                
                label="Страна"
                
                {...register("user_country")}
                name="user_country"
              />

              <TextField
                
                label="Город"
                
                {...register("user_city")}
                name="user_city"
              />

              <TextField
                
                label="Телефон"
                type="number"
                placeholder='89995554433'
                sx={{appearance: "textfield"}}
                
                {...register("user_phone")}
                name="user_phone"
              />

              <Button
                variant="outlined"
                component="label"
                sx={{m: 1}}
              >
                Загрузить аватар
                <input
                  type="file"
                  id="ava-photo"
                  hidden
                  // {...register("user_avatar")}
                  name="user_avatar"
                />
              </Button>
            

            </AccordionDetails>
          </Accordion>

            <div className={styles.btnWrapper}>
              <Button sx={{width: "150px"}} variant="contained" type="submit">Регистрация</Button>
              <Button sx={{width: "150px"}} variant="contained" color="error" onClick={() => navigate('/')}>Отмена</Button>
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

export default Reg;
