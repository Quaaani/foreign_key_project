import React, { useEffect, useState } from "react";
import { Box,  useTheme, MobileStepper, Paper, Avatar, Typography, Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from "@mui/styles";
import { axiosInitFeedback } from "../../redux/asyncActionCreators/feedbackAAC";


const useStyles = makeStyles(() => ({
  wrapper: {
    padding: "30px 0 5vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "justify-content": "center",
    fontFamily: "Roboto",
    fontSize: "1.5rem",
    "box-shadow": "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
    backgroundColor: "#bfbfb6"
  },
  textHeader: {
    marginBottom: "40px",
    marginTop: "60px",
    fontSize: "2rem",
    fontWeight: 700,
    letterSpacing: "1.5px",
    "text-shadow": "0px 10px 30px rgba(150, 150, 150, 0.7)"
  },
  carouselBox: {
    "box-shadow": "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
    padding: "20px",
    borderRadius: "30px",
    backgroundColor: "white"
  },
  ava: {
    width: "50px",
    height: "50px",
    marginBottom: "15px"
  },
  authorBox: {
    flexDirection: "column",
    // borderBottom: "1px solid black",
    "box-shadow": "rgba(17, 17, 26, 0.1) 0px 1px 0px",
    padding: "10px"
  },
  authorName: {
    fontSize: "1.2rem"
  },
  buttonsBox: {
    paddingTop: "20px"
  },
  buttons: {
    fontSize: "1.1rem",
    color: "#265351"
  },
  feedText: {
    overflowY: "scroll"
  },
  btnLeave: {
    backgroundColor: "#265351 !important"
  }
}))

function Feedback(props) {

  const { session } = useSelector((state) => state.sessionReducer);
  const { feedbacks } = useSelector((state) => state.feedbackReducer);

  const styles = useStyles()
  const theme = useTheme();
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(axiosInitFeedback())
  },
  [dispatch])



  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = feedbacks?.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={styles.wrapper} id='feedback'>
      <h2 className={styles.textHeader}>Отзывы</h2>
      <Box className={styles.carouselBox} sx={{ maxWidth: { lg: "45vw", md: "55vw", sm: "80vw", xs: "85vw"}, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 100,
            pl: 2,
            bgcolor: "background.default",
          }}
          className={styles.authorBox}
        > <Avatar className={styles.ava} src={ feedbacks && `./img/avatars/${feedbacks[activeStep].user_avatar}`} />
          <Typography className={styles.authorName}>{feedbacks && feedbacks[activeStep]?.user_firstName}</Typography>
        </Paper>
        <Box sx={{ height: 255, maxWidth: { lg: "45vw", md: "55vw", sm: "80vw", xs: "85vw"}, p: 2 }} className={styles.feedText}>
          {feedbacks && feedbacks[activeStep].comment}

        </Box>
        <MobileStepper
          className={styles.buttonsBox}
          variant="text"
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              className={styles.buttons}
            >
              Далее
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              className={styles.buttons}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Назад
            </Button>
          }
        />
      </Box>
      {session && (
        <Link to="/feedback" style={{"text-decoration": "none"}}>
          <Button className={styles.btnLeave} variant="contained" sx={{marginTop: "3vw"}}>Оставить отзыв</Button>
        </Link>
      ) }


    </div>
  );
}

export default Feedback;
