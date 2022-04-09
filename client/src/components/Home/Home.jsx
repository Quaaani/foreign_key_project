import { Container } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ImageButton from '../ImageButton/ImageButton'
import CoursesCard from '../CoursesCard/CoursesCard';
import CoursesList from '../CoursesList/CoursesList';
import StatisticList from '../StatisticList/StatisticList'
import axios from '../../axios/axios'

// Стили
import style from './Home.module.css'

function Home(props) {
  const dispatch = useDispatch()
  const { session } = useSelector(state => state.sessionReducer)



  return (
      <>

          <ImageButton />

          <Container  sx={{width: "70vw"}}>
              <div  sx={{my: "auto"}}>

                  <StatisticList />
                  <CoursesList />

              
              </div>
          </Container>
      </>

  );
}

export default Home;
