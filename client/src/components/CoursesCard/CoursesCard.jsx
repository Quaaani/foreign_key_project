import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import {useDispatch, useSelector} from "react-redux";
import {axiosInitStudylistAAC} from "../../redux/asyncActionCreators/studylistAAC";
import {axiosAddFavoritesAAC} from '../../redux/asyncActionCreators/favoritesAAC'
import { makeStyles } from '@mui/styles';


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
  const dispatch = useDispatch()
  const { studylist } = useSelector((state) => state.studylistReducer)
  const classes = useStyles()

  console.log('favorites', favorites)
  const startCourse = async (event) => {
    event.preventDefault()
    

    const newFavCourse = {
      user_id : session?.id,
      course_id : course?.id
    } 

    console.log('asdasdasd', newFavCourse)
    try{
      await dispatch(axiosAddFavoritesAAC(newFavCourse))
      await dispatch(axiosInitStudylistAAC(course.id))
    } catch (error){
      console.log('Studylist error', {...error})
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
          </CardContent>

        </Card>
      </Grid>
  )
}

export default CoursesCard
