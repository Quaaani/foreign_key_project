import { Container } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import ImageButton from '../ImageButton/ImageButton'
import CoursesCard from '../CoursesCard/CoursesCard';
import CoursesList from '../CoursesList/CoursesList';
import Feedback from '../Feedback/Feedback';
import ImgBlock from "../ImgBlock/ImgBlock";
import TestLevel from '../TestLevel/TestLevel'
import StatisticList from '../StatisticList/StatisticList'


// Стили
import style from './Home.module.css'
import StudyList from "../StudyList/StudyList";


function Home(props) {
  const dispatch = useDispatch()
  const { session } = useSelector(state => state.sessionReducer)


  return (
    <div>
      <ImageButton />

      <div>
        {/* <TestLevel /> */}
        <StatisticList />
        <CoursesList />
          <StudyList />
        <Feedback />
        <ImgBlock />



          {/*<Container  sx={{width: "70vw"}}>*/}


      </div>


    </div>




  );
}

export default Home;
