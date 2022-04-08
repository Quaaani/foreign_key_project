import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { axiosInitCards } from '../../redux/asyncActionCreators/coursesAAC'
import CoursesCard from '../CoursesCard/CoursesCard'


function CoursesList () {

  const { courses } = useSelector( state => state.coursesReducer)
  const dispatch = useDispatch()

  useEffect(() => {

      dispatch(axiosInitCards())

  }, [dispatch])

  console.log('=>', courses);
  return (
    <Grid
      container
      // direction="row"
      // justifyContent="center"
      // alignItems="center"
      columns={{ xs: 4, sm: 8, md: 12 }}
      spacing={{ xs: 2, md: 3 }}
   >
      {courses ? courses.map(course => <CoursesCard key={course.id} course={course}/>) : <div>No cards</div>}
    </Grid>
  )
}

export default CoursesList;
