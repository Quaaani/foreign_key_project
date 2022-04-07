import React from 'react';
import axios from '../../axios/axios'

// Стили
import style from './Home.module.css'

function Home(props) {

  const toAxios = async (event) => {
    event.preventDefault()

    // GET
    const response = await axios.get('/example')
    console.log('AXIOS GET RESPONSE =>', response)

    // POST
    const responseTwo = await axios.post('/example', { message: 'Hello' })
    console.log('AXIOS POST RESPONSE =>', responseTwo)
  }

  return (
    <div>
      Home page
      <button onClick={toAxios}>Axios</button>
    </div>
  );
}

export default Home;
