import React, { useState, useRef } from 'react';

import style from './Example.module.css';

import { axiosInitTLevels } from '../../redux/asyncActionCreators/tlevelsAAC';
import { useDispatch, useSelector } from 'react-redux';

function Example(props) {
  const dispatch = useDispatch();
  const { tLevels } = useSelector((state) => state.tLevelsReducer);
  const [count, setCount] = useState(0)
  const [choice, setChoice] = useState('no')
  const [score, setScore] = useState(0)

  const pick1 = useRef()
  const pick2 = useRef()
  const pick3 = useRef()
  const pick4 = useRef()

  const toClick = async (event) => {
    event.preventDefault();

    try {
      await dispatch(axiosInitTLevels());
    } catch (error) {
      console.log('tlevels Error =>', { ...error });
    }
  };

  const toNext = (event) => {
    event.preventDefault()
    if (count < 9) {
      setCount(count + 1)
      console.log('choicen =>', choice)
      if (choice === 'yes') {
        setScore(score => score + tLevels[count].tlevel_price)
        console.log('score =>', score)
      }
    } 
    // console.log('pick1 =>', pick1.current.value)
    // console.log('pick2 =>', pick2.current.value)
    // console.log('pick3 =>', pick3.current.value)
    // console.log('pick4 =>', pick4.current.value)
  }

  const toPrevious = (event) => {
    event.preventDefault()
    if (count > 0) {
      setCount(count - 1)
    }
    // console.log('pick =>', pick.current.value)
  }

  const toPick1 = () => {
    // console.log('picked =>', pick1.current.value)
    setChoice(pick1.current.value)
  }

  const toPick2 = () => {
    // console.log('picked =>', pick2.current.value)
    setChoice(pick2.current.value)
  }

  const toPick3 = () => {
    // console.log('picked =>', pick3.current.value)
    setChoice(pick3.current.value)
  }

  const toPick4 = () => {
    // console.log('picked =>', pick4.current.value)
    setChoice(pick4.current.value)
  }

  return (
    <>
      {tLevels ? (
        <div className={style.exampleContainer}>
          <div className={style.formContainer}>
            <h3>{tLevels[count].tlevel_question}</h3>
            <div>
              <input onClick={toPick1} ref={pick1} type="radio" name="tlevel_option" id="tlevel_option1" value={tLevels[count].tlevel_answer1}/>
              <label htmlFor="tlevel_option1">{tLevels[count].tlevel_option1}</label>
            </div>
            <div>
              <input onClick={toPick2} ref={pick2} type="radio" name="tlevel_option" id="tlevel_option2" value={tLevels[count].tlevel_answer2}/>
              <label htmlFor="tlevel_option2">{tLevels[count].tlevel_option2}</label>
            </div>
            <div>
              <input onClick={toPick3} ref={pick3} type="radio" name="tlevel_option" id="tlevel_option3" value={tLevels[count].tlevel_answer3}/>
              <label htmlFor="tlevel_option3">{tLevels[count].tlevel_option3}</label>
            </div>
            <div>
              <input onClick={toPick4} ref={pick4} type="radio" name="tlevel_option" id="tlevel_option4" value={tLevels[count].tlevel_answer4}/>
              <label htmlFor="tlevel_option4">{tLevels[count].tlevel_option4}</label>
            </div>
            <button onClick={toPrevious}>Предыдущий вопрос</button>
            <button onClick={toNext}>Следующий вопрос</button>
          </div>
        </div>
      ) : (
        <div className={style.exampleContainer}>No data</div>
      )}
      <button onClick={toClick}>Загрузить вопросы</button>
    </>
  );
}

export default Example;
