import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { axiosAddUser } from '../../redux/asyncActionCreators/userAAC';

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
    <div>
      Home page
      {/*<button onClick={toAxios}>Axios</button>*/}
      {/*{user ? <div>{user.message}</div> : <div>No DATA</div>}*/}
    </div>
  );
}

export default Home;
