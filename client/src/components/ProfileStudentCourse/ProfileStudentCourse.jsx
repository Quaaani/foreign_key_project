import { Button, Card, CardActions, CardMedia, Grid } from "@mui/material";



function ProfileStudentCourse ({favorite}) {

  return(
    <Grid item 
      xs={6}
      sm={6}
      md={5}
      marginY={{xs: 2, sm: 2, md: 4}}
      marginLeft={{xs: 1, sm: 1, md: 1}}
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
        <CardActions centered>
          <Button color="success" variant="outlined" >Начать обучение</Button>
        </CardActions>
      </Card>
  </Grid>
  )
}

export default ProfileStudentCourse;
