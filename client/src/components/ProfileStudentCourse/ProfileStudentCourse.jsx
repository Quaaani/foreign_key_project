import { Button, Card, CardActions, CardContent, CardMedia, ClickAwayListener, Grid, Link, Typography } from "@mui/material";
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
            onClick={handleClick}>
            Преподаватель: {favorite.teacher_name}
          </Typography>
          {open ? 
          <div>
            <div>
              <a href={`tel:${favorite.teacher_tel}`}>{favorite.teacher_tel}</a>
            </div>
            <div>
              <a href={`mailto:${favorite.teacher_mail}`}>{favorite.teacher_mail}</a>
            </div>
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
