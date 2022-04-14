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
import Translator from '../Translator/Translator';


// Стили
import style from './Home.module.css'
import StudyList from "../StudyList/StudyList";
import MapList from "../MapList/MapList";
import Example from '../Example/Example'
import Info from "../Info/Info";




function Home(props) {
  const dispatch = useDispatch()
  const { session } = useSelector(state => state.sessionReducer)


  return (
    <>
      <ImageButton />

      <div id='TestingComponents'>
        {/* <Example /> */}
        {/* <StudyList /> */}
        {/*  <MapList />*/}
      </div>

      <div>
        <StatisticList />
        <Info />
        <CoursesList />
        
        <Feedback />
        <ImgBlock />
        {/*<Container  sx={{width: "70vw"}}>*/}
      </div>
    </>
  );
}

export default Home;
