import { Button, Card, CardActions, CardContent, CardMedia, ClickAwayListener, Grid, Typography, IconButton, CardHeader, Divider } from "@mui/material";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { axiosInitStudylistAAC } from '../../redux/asyncActionCreators/studylistAAC'


const useStyles = makeStyles(()=>({
  details: {
    display: "flex",
    alignItems: "center"
  },
  btn: {
    textDecoration: "none",
  
    backgroundColor: "#265351",
  },
  nolink: {
    textDecoration: "none",
  color: "white",
}
}))



function ProfileStudentCourse ({favorite}) {

  const styles = useStyles()
  const { studylist } = useSelector(state => state.studylistReducer)
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  const handleClickAway = () => {
    setOpen(false)
  }

  const initCard = async (event) => {
    event.preventDefault()
    try {
      await dispatch(axiosInitStudylistAAC(favorite.id))
      localStorage.clear()
      localStorage.setItem('favorite_id', favorite.id)
    } catch (error) {
        console.log('error init card', {...error})
    }
  }

  return(

    <ClickAwayListener onClickAway={handleClickAway}>
    <Grid item 
      xs={10}
      sm={10}
      md={5}
      sx={{ mx: 'auto'}}
      marginY={{xs: 2, sm: 2, md: 4}} 
    >
      <Card
        sx={{ maxWidth: 345 }}  
    >
      <CardHeader
        sx={{mx: 'auto'}}
        title={favorite.course_name}
      >

        
      </CardHeader>

        <CardMedia
          component='img'
          height="194"
          image={`/img/courses/${favorite?.course_img}`}
          alt="avatar"
          
        >
        
        </CardMedia>
        <CardContent>
            <div className={styles.details}>
              <IconButton
                    
                    onClick={handleClick}
                    
                  >
                <ExpandMoreIcon />
              </IconButton>
            <div className={styles.detailsText}>Подробнее...</div>
            </div>
           

          {open ? 
          <div >
            <Typography align="center">
              {favorite.course_description}
            </Typography>

            <Divider variant="middle" />

            <Typography variant="body2" align="center">
              Автор курса:
            </Typography>

            <Typography align="center">
              {favorite.course_teacher}
            </Typography>
            
            <Typography align="center">
                  
              <a href={`tel:${favorite.course_phone}`}>
                <PhoneIphoneIcon color="primary"/>
              </a>

              <a href={`mailto:${favorite.course_email}`}>
                <EmailIcon color="primary"/>
              </a>

            </Typography>



          </div>: null}
        </CardContent>
        <CardActions>
          <Button 
          onClick={initCard}
          variant="contained" 
          color="primary"
          sx={{ mx: 'auto'}}
          className={styles.btn}
         
          >
            <Link to={`/studylist/${favorite?.id}`} className={styles.nolink}>
              
                Начать
            
              
            </Link>
            
          </Button>
        </CardActions>
      </Card>
  </Grid>
  </ClickAwayListener>
  )
}

export default ProfileStudentCourse;
