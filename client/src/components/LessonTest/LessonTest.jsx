import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { tLevelsReducer } from '../../redux/reducers/tlevelsReducer';
import { axiosInitTLevels } from '../../redux/asyncActionCreators/tlevelsAAC';
import { axiosInitStudylistAAC } from '../../redux/asyncActionCreators/studylistAAC';
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItemButton,
  CardHeader,
  Box,
  LinearProgress,
} from '@mui/material';

function LessonTest({ test }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qnIndex, setQnIndex] = useState(0);
  const [price, setPrice] = useState(0);

  const { tLevels } = useSelector((state) => state.tLevelsReducer);
  const { studylist } = useSelector((state) => state.studylistReducer);

  const toInitTest = async (event) => {
    event.preventDefault();

    try {
      await dispatch(axiosInitStudylistAAC(1));
    } catch (error) {
      console.log('studylist Error =>', { ...error });
    }
  };

  const toInit = async (event) => {
    event.preventDefault();

    try {
      await dispatch(axiosInitTLevels());
    } catch (error) {
      console.log('tLevels Error =>', { ...error });
    }
  };

  // Tests
  const updateAnswer = (id, optionIdx) => {
    if (qnIndex < test.length - 1) {
      if (test[qnIndex].answers[optionIdx] === 'yes') {
        setPrice((prev) => prev + test.lesson_price);
      }
      setQnIndex((prev) => prev + 1);
    } else {
      if (test[qnIndex].answers[optionIdx] === 'yes') {
        setPrice((prev) => prev + test.lesson_price);
      }
      localStorage.clear();
      localStorage.setItem('user_level', price);
    }
  };

  console.log('price =>', price);

  return (
    <>
      <div>
        {studylist ? (
          <Card sx={{ maxWidth: 640, mx: 'auto', mt: 5 }}>
            <CardHeader
              title={
                'Вопрос ' +
                (qnIndex + 1) +
                ' из ' +
                test.length
              }
            />
            <Box>
              <LinearProgress
                variant="determinate"
                value={
                  ((qnIndex + 1) * 100) / test.length
                }
              />
            </Box>
            <CardContent>
              <Typography variant="h6">
                {test[qnIndex].test_question}
              </Typography>
              <List>
                {test[qnIndex].options.map(
                  (item, idx) => (
                    <ListItemButton
                      key={idx}
                      onClick={() =>
                        updateAnswer(
                          test[qnIndex].id,
                          idx
                        )
                      }
                    >
                      <div>
                        <b>{item}</b>
                      </div>
                    </ListItemButton>
                  )
                )}
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

export default LessonTest;
