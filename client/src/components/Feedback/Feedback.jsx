import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import { Paper, Avatar } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Link } from "react-router-dom";

import { useSelector } from 'react-redux';

import { makeStyles } from "@mui/styles";


const useStyles = makeStyles(() => ({
  wrapper: {
    padding: "30px 0 5vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "justify-content": "center",
    fontFamily: "Roboto",
    fontSize: "1.5rem",
    "box-shadow": "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px"
  },
  textHeader: {
    marginBottom: "40px",
    fontSize: "3rem",
    fontWeight: 400,
    letterSpacing: "1.5px",
    "text-shadow": "0px 10px 30px rgba(150, 150, 150, 0.7)"
  },
  carouselBox: {
    "box-shadow": "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
    padding: "20px",
    borderRadius: "30px"
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
    fontSize: "1.1rem"
  },
  feedText: {
    overflowY: "scroll"
  }
}))

const steps = [
  {
    label: "Azamat",
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more. An ad group contains one or more ads which target a shared set of keywords.`,
  },
  {
    label: "Anton",
    description:
      "An ad group contains one or more ads which target a shared set of keywords. An ad group contains one or more ads which target a shared set of keywords. An ad group contains one or more ads which target a shared set of keywords. Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. ",
  },
  {
    label: "Natalia",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Vetal",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Natalia",
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Vetal",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
];

function Feedback(props) {
  const styles = useStyles()


  const { session } = useSelector((state) => state.sessionReducer);

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={styles.wrapper} id='feedback'>
      <h2 className={styles.textHeader}>Feedback</h2>
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
        > <Avatar className={styles.ava} src="/broken-image.jpg" />
          <Typography className={styles.authorName}>{steps[activeStep].label}</Typography>
        </Paper>
        <Box sx={{ height: 255, maxWidth: { lg: "45vw", md: "55vw", sm: "80vw", xs: "85vw"}, p: 2 }} className={styles.feedText}>
          {steps[activeStep].description}
          
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
              Next
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
              Back
            </Button>
          }
        />
      </Box>
      {session && (
        <Link to="/feedback">
          <Button variant="contained" sx={{marginTop: "3vw"}}>Оставить отзыв</Button>
        </Link>
      ) }
        
        
    </div>
  );
}

export default Feedback;
