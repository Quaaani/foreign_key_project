import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography, Alert, AlertTitle } from '@mui/material'
import {useDispatch, useSelector} from "react-redux";
import {axiosInitStudylistAAC} from "../../redux/asyncActionCreators/studylistAAC";
import {axiosAddFavoritesAAC} from '../../redux/asyncActionCreators/favoritesAAC'
import { makeStyles } from '@mui/styles';
import { useState } from 'react';


const useStyles = makeStyles(() => ({
  courseHeader: {
    fontWeight: "700"
  },
  courseCard: {
    backgroundColor: "rgba(127,186,182, .1)"
  },
  courseBtn: {
    color: "white",
    backgroundColor: "rgba(38,83,81)"
  }
}))


function CoursesCard ({course}) {

  const { favorites } = useSelector((state) => state.favoritesReducer)
  const { session } = useSelector(state => state.sessionReducer)
  const { studylist } = useSelector((state) => state.studylistReducer)
  const dispatch = useDispatch()
  const classes = useStyles()
  const [toggle, setToggle] = useState(false)
  const [msg, setMsg] = useState('');

  const [accessToggle, setAccessToggle] = useState(false)
  const [accessMsg, setAccessMsg] = useState('')

  const startCourse = async (event) => {
    event.preventDefault()
    const newFavCourse = {
      user_id : session?.id,
      course_id : course?.id
    } 
    try{
      await dispatch(axiosAddFavoritesAAC(newFavCourse))
      setAccessMsg('Курс добавлен');
      setAccessToggle(true);
      setTimeout(() => {
        setAccessToggle(false);
      }, 2000);
      await dispatch(axiosInitStudylistAAC(course.id))
    } catch (error){
      setMsg(error.response.data.message);
      setToggle(true);
      setTimeout(() => {
        setToggle(false);
      }, 2000);
    }

  }

  return (

      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        sx={{mx: 'auto'}}
      >
        <Card
          sx={{
            display: 'flex',
            height: 250
          }}
          className={classes.courseCard}
        >
          <CardMedia
            component='img'
            sx={{ width: 200}}
            image={`/img/courses/${course.course_img}`}
            alt='Course NAME'
          >
          </CardMedia>
          <CardContent
            sx={{
              display: 'flex', flexDirection: 'column', position: 'relative',
            }}
          >
            <Typography
              variant="h5"
              className={classes.courseHeader}
            >
                {course.course_name}
            </Typography>
            <Typography
              variant="body"
            >
              {course.course_level}
            </Typography>
            <Typography
              variant='body'
            >
              {course.course_description}
            </Typography>
            <CardActions
              sx={{
                display: 'flex', justifyContent: 'center',alignItems: 'center', mt: 'auto',

              }}
            >
              <Button onClick={startCourse}
              variant="contained" color="success" sx={{
                flexGrow: '1',
              }} className={classes.courseBtn}>Добавить</Button>
          </CardActions>
          {toggle && <Alert severity="error" sx={{m: 1, mb: 7}}>
            <AlertTitle>Ошибка</AlertTitle>
            {msg}
          </Alert>}
          {accessToggle && <Alert severity="success" sx={{m: 1, mb: 7}}>
            <AlertTitle>Успешно</AlertTitle>
            {accessMsg}
          </Alert>}
          </CardContent>

        </Card>
      </Grid>
  )
}

export default CoursesCard
