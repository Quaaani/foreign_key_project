import { Container } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { axiosAddUser } from '../../redux/asyncActionCreators/userAAC';
import ImageButton from '../ImageButton/ImageButton'
import CoursesCard from '../CoursesCard/CoursesCard';
import CoursesList from '../CoursesList/CoursesList';


// Стили
import style from './Home.module.css'

function Home(props) {
  const dispatch = useDispatch()
  
  const { session } = useSelector(state => state.sessionReducer)

  return (
      <>

          <ImageButton />
          <CoursesList />

          <Container  sx={{width: "70vw"}}>
              <div  sx={{my: "auto"}}>

              </div>
          </Container>

      </>

  );
}

export default Home;
