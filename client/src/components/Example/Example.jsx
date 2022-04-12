import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { tLevelsReducer } from '../../redux/reducers/tlevelsReducer';
import { axiosInitTLevels } from '../../redux/asyncActionCreators/tlevelsAAC';
import { axiosInitStudylistAAC } from '../../redux/asyncActionCreators/studylistAAC'
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItemButton,
  CardHeader,
  Box,
  LinearProgress
} from '@mui/material';

function Example(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [qnIndex, setQnIndex] = useState(0);
  const [price, setPrice] = useState(0)

  const { tLevels } = useSelector((state) => state.tLevelsReducer);
  const { studylist } = useSelector((state) => state.studylistReducer)

  const toInitTest = async (event) => {
    event.preventDefault()

    try {
      await dispatch(axiosInitStudylistAAC(1))
    } catch (error) {
      console.log('studylist Error =>', { ...error })
    }
  }

  const toInit = async (event) => {
    event.preventDefault();

    try {
      await dispatch(axiosInitTLevels());
    } catch (error) {
      console.log('tLevels Error =>', { ...error });
    }
  };
  
  // tLevels
  // const updateAnswer = (id, optionIdx) => {

  //   if (qnIndex < tLevels.length - 1) {
  //     if (tLevels[qnIndex].answers[optionIdx] === 'yes') {
  //       setPrice(prev => prev + tLevels[qnIndex].tlevel_price)
  //     }
  //     setQnIndex(prev => prev + 1)
  //   } else {
  //     if (tLevels[qnIndex].answers[optionIdx] === 'yes') {
  //       setPrice(prev => prev + tLevels[qnIndex].tlevel_price)
  //     }
  //     localStorage.clear()
  //     localStorage.setItem('user_level', price)
  //     navigate('/registration')
  //   }
  // }

  console.log('studylist =>', studylist)

  // Tests
  const updateAnswer = (id, optionIdx) => {

    if (qnIndex < studylist.first_lesson_tests.length - 1) {
      if (studylist.first_lesson_tests[qnIndex].answers[optionIdx] === 'yes') {
        setPrice(prev => prev + studylist.first_lesson_data.lesson_price)
      }
      setQnIndex(prev => prev + 1)
    } else {
      if (studylist.first_lesson_tests[qnIndex].answers[optionIdx] === 'yes') {
        setPrice(prev => prev + studylist.first_lesson_data.lesson_price)
      }
      localStorage.clear()
      localStorage.setItem('user_level', price)
      navigate('/registration')
    }
  }

  console.log('price =>', price)

  return (
    <>
      <button onClick={toInit}>Init tLevels</button>
      <button onClick={toInitTest}>Init Tests</button>
      {/* <div>
        {tLevels ? (
          <Card
            sx={{maxWidth: 640, mx: 'auto', mt: 5}}>
              <CardHeader 
                title={'Вопрос ' + (qnIndex + 1) + ' из 10'}
              />
              <Box>
                <LinearProgress 
                  variant='determinate'
                  value={(qnIndex + 1) * 100 / tLevels.length}
                />
              </Box>
            <CardContent>
              <Typography variant="h6">
                {tLevels[qnIndex].tlevel_question}
              </Typography>
              <List>
                {tLevels[qnIndex].options.map((item, idx) => <ListItemButton key={idx} onClick={() => updateAnswer(tLevels[qnIndex].id, idx)}>
                  <div>
                    <b>{item}</b>
                  </div>
                </ListItemButton>)}
              </List>
            </CardContent>
          </Card>
        ) : (
          <div>No Data</div>
        )}
      </div> */}
            <div>
        {studylist ? (
          <Card
            sx={{maxWidth: 640, mx: 'auto', mt: 5}}>
              <CardHeader 
                title={'Вопрос ' + (qnIndex + 1) + ' из ' + studylist.first_lesson_tests.length}
              />
              <Box>
                <LinearProgress 
                  variant='determinate'
                  value={(qnIndex + 1) * 100 / studylist.first_lesson_tests.length}
                />
              </Box>
            <CardContent>
              <Typography variant="h6">
                {studylist.first_lesson_tests[qnIndex].test_question}
              </Typography>
              <List>
                {studylist.first_lesson_tests[qnIndex].options.map((item, idx) => <ListItemButton key={idx} onClick={() => updateAnswer(studylist.first_lesson_tests[qnIndex].id, idx)}>
                  <div>
                    <b>{item}</b>
                  </div>
                </ListItemButton>)}
              </List>
            </CardContent>
          </Card>
        ) : (
          <div>No Data</div>
        )}
      </div>
    </>
  );
}

export default Example;
