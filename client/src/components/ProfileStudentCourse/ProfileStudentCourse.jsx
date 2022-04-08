import { Button, Card, CardActions, CardMedia, Grid } from "@mui/material";



function ProfileStudentCourse ({favorite}) {

  return(
    <Grid item xs={3}>

      <Card
        sx={{ maxWidth: 345 }}
        marginY={{xs: 4, sm: 6, md: 4}}
    >
        <CardMedia
          component='img'
          height="194"
          image={`/img/courses/${favorite?.course_img}`}
          alt="avatar"
        >
        </CardMedia>
        <CardActions centered>
          <Button color="secondary" variant="outlined" >Начать обучение</Button>
        </CardActions>
      </Card>
  </Grid>
  )
}

export default ProfileStudentCourse;
