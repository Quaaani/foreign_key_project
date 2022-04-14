import React, { useState } from 'react';
import { Button, Paper, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { axiosInitTLevels } from '../../redux/asyncActionCreators/tlevelsAAC';
import { useDispatch, useSelector } from 'react-redux';
import { tLevelsReducer } from '../../redux/reducers/tlevelsReducer';
import RegTest from '../RegTest/RegTest'

const useStyles = makeStyles(() => ({
  mainFeaturesPost: {
    position: 'relative',
    height: '81vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginTop: '-70px',
    paddingTop: '150px',
    // zIndex: "-1"
  },
  mainFeaturesPostContent: {
    height: '25vh',
  },
  buttonCenter: {
    display: 'flex',
    flexDirection: 'column',
  },
  ourBtn: {
    display: 'flex',
    // justifyContent: 'center',
    justifyContent: "start"
  },
  btn: {
    width: '230px',
    height: '50px',
    backgroundColor: "#a8875f !important; &>span{color: #977034}",
    // marginLeft: "100px"

  },
  head1: {
    color: "white",
    fontSize: "3rem"
  },
  head2: {
    color: "white",
    fontSize: "1.5rem"
  }
}));

function ImageButton(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { tLevels } = useSelector((state) => state.tLevelsReducer);

  const [press, setPress] = useState(false)

  async function handleChange(event) {
    event.preventDefault();
    try {
      await dispatch(axiosInitTLevels());
      setPress(true)
    } catch (error) {
      console.log('tlevels error ====>', { ...error });
    }
  }

  return (
    <Paper
      className={classes.mainFeaturesPost}
      sx={{ 'background-image': `url(/img/HomePhoto/test.gif)` }}
    >
      <Container fixed>
        <Grid container className={classes.buttonCenter}>
          <Grid item md={8}>
            <div className={classes.mainFeaturesPostContent}>
              <Typography
                component="h2"
                variant="h3"
                color="inherit"
                gutterBottom
                className={classes.head1}
              >
                Знать много языков
              </Typography>
              <Typography component="h5" color="inherit" paragraph
                className={classes.head2}
              >
                — значит иметь много ключей <br/>
                к одному замку.
              </Typography>
            </div>
          </Grid>
          <Grid item className={classes.ourBtn}>
            <Button
              onClick={handleChange}
              variant="contained"
              className={classes.btn}
            >
              пройти тест
            </Button>
          </Grid>
        </Grid>
        {press && <RegTest  setPress={setPress}/>}
      </Container>
    </Paper>
  );
}

export default ImageButton;
