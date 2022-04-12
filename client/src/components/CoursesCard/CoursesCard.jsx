import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import {useDispatch, useSelector} from "react-redux";
import {axiosInitStudylistAAC} from "../../redux/asyncActionCreators/studylistAAC";


function CoursesCard ({course}) {
  const dispatch = useDispatch()
  const { studylist } = useSelector((state) => state.studylistReducer)

  const startCourse = async () => {
    try{
      await dispatch(axiosInitStudylistAAC(course.id))
    } catch (error){
      console.log('Studylist error', {...error})
    }

  }

  return (

      <Grid
        item
        xs={12}
        sm={4}
        md={4}
      >
        <Card
          sx={{
            display: 'flex',
            height: 250
        }}>
          <CardMedia
            component='img'
            sx={{ width: 150}}
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
              <Button onClick={startCourse} variant="outlined" color="success" sx={{
                flexGrow: '1',
              }}>ГАЗУЙ</Button>
          </CardActions>
          </CardContent>

        </Card>
      </Grid>
  )
}

export default CoursesCard
