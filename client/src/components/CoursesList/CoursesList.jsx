import {Container, Grid} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { axiosInitCards } from '../../redux/asyncActionCreators/coursesAAC'
import CoursesCard from "../CoursesCard/CoursesCard";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    courseHeader: {
        textAlign: "center",
        fontSize: "2rem",
        marginBottom: "7vh",
        marginTop: "4vh"
    },
    courseWrapper: {
        paddingTop: "60px",
        paddingBottom: "60px"
    }
}))

function CoursesList () {

    const classes = useStyles()

  const { courses } = useSelector( state => state.coursesReducer)
  const dispatch = useDispatch()

  useEffect(() => {

      dispatch(axiosInitCards())

  }, [dispatch])

  return (
      <div className={classes.courseWrapper} id='courses'>
          <h2 className={classes.courseHeader}>Курсы</h2>
          <Container maxWidth="lg">
              <Grid

                  // sx={{padding: "4vw"}}
                  container
                  // direction="row"
                  // justifyContent="center"
                  // alignItems="center"
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  spacing={{ xs: 2, md: 3 }}
              >
                  {courses ? courses.map(course => <CoursesCard key={course.id} course={course}/>) : <div>No cards</div>}
              </Grid>
          </Container>

      </div>

  )
}

export default CoursesList;
