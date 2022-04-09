import { Button, Card, CardActions, CardContent, CardMedia, ClickAwayListener, Grid, Link, Typography, IconButton, CardHeader } from "@mui/material";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import * as React from 'react';



function ProfileStudentCourse ({favorite}) {

  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen((prev) => !prev)
  }

  const handleClickAway = () => {
    setOpen(false)
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
          <Typography>
            {favorite.course_name}
          </Typography>
          <Typography 
            >
            Преподаватель: {favorite.teacher_name}
            <IconButton
               
               onClick={handleClick}
               
            >
              <ContactPhoneIcon />
            </IconButton>
          </Typography>
          
          {open ? 
          <div style={{'text-align' : 'center'}}>
            <div>

                <a href={`tel:${favorite.teacher_tel}`}>
                <PhoneIphoneIcon />
                </a> 
                <a href={`mailto:${favorite.teacher_mail}`}><EmailIcon />
                </a>

            </div>
            {/* <div>
              <a href={`mailto:${favorite.teacher_mail}`}><EmailIcon /></a>
            </div> */}
          </div>: null}
        </CardContent>
        <CardActions centered>
          <Button 
          color="success" 
          variant="outlined" 
          sx={{ mx: 'auto'}}
         
          >
            Начать обучение
          </Button>
        </CardActions>
      </Card>
  </Grid>
  </ClickAwayListener>
  )
}

export default ProfileStudentCourse;
