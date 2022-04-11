import React, { useState, useRef } from 'react';

import style from './Example.module.css';

import { axiosInitTLevels } from '../../redux/asyncActionCreators/tlevelsAAC';
import { useDispatch, useSelector } from 'react-redux';
import ExampleQuestion from './ExampleQuestion';

function Example(props) {
  const dispatch = useDispatch();
  const { tLevels } = useSelector((state) => state.tLevelsReducer);
  const [count, setCount] = useState(0)
  const [choice, setChoice] = useState('no')
  const [score, setScore] = useState(0)
  const [button, setButton] = useState('Следующий вопрос')

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
      if (count === 8) {
        setButton('Завершить тест')
      }
      if (choice === 'yes') {
        setScore(score => score + tLevels[count].tlevel_price)
      }
    } 
  }

  const toPrevious = (event) => {
    event.preventDefault()
    if (count > 0) {
      setCount(count - 1)
      setButton('Следующий вопрос')
    }
    // console.log('pick =>', pick.current.value)
  }

  const toPick1 = () => {
    // console.log('picked =>', pick1.current.value)
    setChoice(pick1.current.value)
    // console.log('choice =>', choice)
  }

  const toPick2 = () => {
    // console.log('picked =>', pick2.current.value)
    setChoice(pick2.current.value)
    // console.log('choice =>', choice)
  }

  const toPick3 = () => {
    // console.log('picked =>', pick3.current.value)
    setChoice(pick3.current.value)
    // console.log('choice =>', choice)
  }

  const toPick4 = () => {
    // console.log('picked =>', pick4.current.value)
    setChoice(pick4.current.value)
    // console.log('choice =>', choice)
  }

  return (
    <>
      {tLevels ? (
        <div className={style.exampleContainer}>
          <div className={style.formContainer}>
            <ExampleQuestion />
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
