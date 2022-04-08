import { Container } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { axiosAddUser } from '../../redux/asyncActionCreators/userAAC';
import { CoursesCard } from '../CoursesCard/CoursesCard';
import CoursesList from '../CoursesList/CoursesList';

// Стили
import style from './Home.module.css'

function Home(props) {
  const dispatch = useDispatch()
  
  const { session } = useSelector(state => state.sessionReducer)

  // Example for AXIOS REQUESTS
  // const toAxios = async (event) => {
  //   event.preventDefault()
  
  //   const payload = {
  //     message: 'Hello'
  //   }
  
  //   dispatch(axiosAddUser(payload))
  // }

  return (

    <Container>
      {/* <button onClick={toAxios}>Axios</button>
      {user ? <div>{user.message}</div> : <div>No DATA</div>} */}
      <CoursesList />
      {/* <CoursesCard /> */}
    </Container>
  );
}

export default Home;
