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
import Example from '../Example/Example';

function Home(props) {
  const dispatch = useDispatch()
  const { session } = useSelector(state => state.sessionReducer)


  return (
    <div>
      <ImageButton />

      <div >
        {/* <TestLevel /> */}
        <StatisticList />
        <CoursesList />
        <Feedback />
        <ImgBlock />


      </div>

    </div>

          
  

  );
}

export default Home;
