import React, { useState, useEffect } from 'react';
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
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: "20vh",
    backgroundColor: 'rgba(127,186,182, 0.7)',
    zIndex: 200,
  },
  "css-eglki6-MuiLinearProgress-root": {
    backgroundColor: "#7fbab6 !important"
}
}))

function RegTest(props) {

  const classes = useStyles()


  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [qnIndex, setQnIndex] = useState(0);
  const [price, setPrice] = useState(0)

  const { tLevels } = useSelector((state) => state.tLevelsReducer);

  const toInit = async (event) => {
    event.preventDefault();

    try {
      await dispatch(axiosInitTLevels());
    } catch (error) {
      console.log('tLevels Error =>', { ...error });
    }
  };

  // tLevels
  const updateAnswer = (id, optionIdx) => {

    if (qnIndex < tLevels.length - 1) {
      if (tLevels[qnIndex].answers[optionIdx] === 'yes') {
        setPrice(prev => prev + tLevels[qnIndex].tlevel_price)
      }
      setQnIndex(prev => prev + 1)
    } else {
      if (tLevels[qnIndex].answers[optionIdx] === 'yes') {
        setPrice(prev => prev + tLevels[qnIndex].tlevel_price)
      }
      localStorage.clear()
      localStorage.setItem('user_level', price)
      navigate('/registration')
    }
  }

  return (
    <>
      <div className={classes.overlay}>
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
      </div>
    </>
  );
}

export default RegTest;
