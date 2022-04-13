import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography, Divider, ClickAwayListener, IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from "react";
import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { axiosInitHomeworkAAC } from '../../redux/asyncActionCreators/homeworkAAC'
import Homework from "../Homework/Homework";

function ProfileTeacher () {
  const { session } = useSelector((state) => state.sessionReducer)
  const { favorites } = useSelector((state) => state.favoritesReducer)
  const { homework } = useSelector((state) => state.homeworkReducer)
  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false)

  const handleClick = async() => {
    setOpen((prev) => !prev)
    try {
      await dispatch(axiosInitHomeworkAAC())
    } catch(error) {
      console.log('ERROR INIT HOMEWORK', error)
    }
  }

  const handleClickAway = () => {
    setOpen(false)
  }

  const authBTN = async (event) => {
    event.preventDefault()
    try {
      await dispatch(axiosInitHomeworkAAC())
    } catch(error) {
      console.log('ERROR INIT HOMEWORK', error)
    }
  }
  
  useEffect(() => {
    console.log('Homework', homework);
  },[homework])


  return (
    <ClickAwayListener onClickAway={handleClickAway}>
    <Container >
      <Grid container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={{ xs: 2, md: 3 }}
        marginY={{xs: 4, sm: 6, md: 4}}
      >
        <Grid item
          xs={6}
          sm={4}
          md={4}
          sx={{ mx: 'auto', my: 'auto'}}
        >
          <Card
            sx={{ maxWidth: 345 }}
          >
            <CardMedia
              component='img'
              height="194"
              image={`/img/avatars/${session?.user_avatar}`}
              alt="avatar"
            >
            </CardMedia>
            <CardActions centered>
              <Button color="secondary" variant="outlined" sx={{ mx: 'auto'}}>Редактировать профиль</Button>
            </CardActions>
          </Card>
          </Grid>

          <Grid item
            xs={2}
            sm={2}
            md={3}
            sx={{ my: 'auto'}}
          >
            <CardContent>
              <Typography variant="h6">
                Имя:
              </Typography>
              <Typography variant="h6">
                Фамилия:
              </Typography>
              <Typography variant="h6">
                Статус:
              </Typography>
            </CardContent>
          </Grid>

          <Grid item
            xs={2}
            sm={2}
            md={4}
            sx={{ my: 'auto'}}
          >
            <CardContent>
            <Typography variant="h6">
              {session?.user_firstName[0].toUpperCase() + session?.user_firstName.slice(1)}
            </Typography>
            <Typography variant="h6">
              {session?.user_lastName[0].toUpperCase() + session?.user_lastName.slice(1)}
            </Typography>
            <Typography variant="h6">
              Преподаватель
            </Typography>
          </CardContent>
          </Grid>

      </Grid>

      <Divider variant="middle" />

      <Grid container>
        <Grid item
          xs={2}
          sm={2}
          md={3}
          sx={{ my: 'auto'}}        
        >
          

        </Grid>
        <Grid item
          xs={12}
          sm={12}
          md={12}
          sx={{ my: 'auto'}}        
        >


      <IconButton onClick={handleClick}>
        <Typography>
          ДОМАШНЕЕ ЗАДАНИЕ
        </Typography>
        <ExpandMoreIcon />
      </IconButton>
     {open ? homework?.map(homework => <Homework key={homework?.id} homework={homework}/>) : null }

  
        </Grid>
      </Grid>

    </Container>
  </ClickAwayListener>
  )
}

export default ProfileTeacher;
