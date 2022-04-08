import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { axiosAddUser } from '../../redux/asyncActionCreators/userAAC';
import { Container } from "@mui/material";
import ImageButton from '../ImageButton/ImageButton'


// Стили
import style from './Home.module.css'

function Home(props) {
  // const dispatch = useDispatch()
  //
  // const { user } = useSelector(state => state.userReducer)

  // Example for AXIOS REQUESTS
  // const toAxios = async (event) => {
  //   event.preventDefault()
  //
  //   const payload = {
  //     message: 'Hello'
  //   }
  //
  //   dispatch(axiosAddUser(payload))
  // }

  return (
      <>

          <ImageButton />
          <Container  sx={{width: "70vw"}}>
              <div  sx={{my: "auto"}}>

              </div>
          </Container>

      </>


  );
}

export default Home;
