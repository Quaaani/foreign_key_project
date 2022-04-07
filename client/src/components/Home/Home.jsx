import React from 'react';
import { useDispatch } from 'react-redux'
import { axiosAddUser } from '../../redux/asyncActionCreators/userAAC';

// Стили
import style from './Home.module.css'

function Home(props) {
  const dispatch = useDispatch()

  // Example for AXIOS REQUESTS
  const toAxios = async (event) => {
    event.preventDefault()

    const payload = {
      message: 'Hello'
    }

    dispatch(axiosAddUser(payload))
  }

  return (
    <div>
      Home page
      <button onClick={toAxios}>Axios</button>
    </div>
  );
}

export default Home;
