import { Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import ProfileStudentCourse from "../ProfileStudentCourse/ProfileStudentCourse";

const favorites = [
  {
    id: 1,
    course_name : 'Course A',
    course_img : 'photo1.png',
    teacher_name : 'Anna',
    teacher_tel : '+79997654598',
    teacher_mail : 'anna@mail.kz',
  },
  {
    id: 2,
    course_name : 'Course B',
    course_img : 'photo2.png',
    teacher_name : 'Galina',
    teacher_tel : '+79215437786',
    teacher_mail : 'galina@ya.ua',
  }
]

function ProfileStudent () {
  const { session } = useSelector((state) => state.sessionReducer)

  console.log('SESSION PROFILE', session);

  return (
    <Container>
      <Grid container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={{ xs: 2, md: 3 }}
        marginY={{xs: 4, sm: 6, md: 4}}
        
      >
        <Grid item
          xs={4}
          sm={4}
          md={4}
        >
          <Card
            sx={{ maxWidth: 345 }}
          >
            <CardMedia
              component='img'
              height="194"
              image={`/img/avatars/${session?.user_avatar}`}
              alt="avatar"
            >
            </CardMedia>
            <CardActions centered>
              <Button color="secondary" variant="outlined" >Редактировать профиль</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item
          sx={{ maxWidth: 345 }}
          xs={2}
          sm={2}
          md={2}
        >
          <CardContent>
            <Typography variant="h6">
              Name:
            </Typography>
            <Typography variant="h6">
              Last Name:
            </Typography>
            <Typography variant="h6">
              Status:
            </Typography>
            <Typography variant="h6">
              Level:
            </Typography>
          </CardContent>
        </Grid>
        <Grid item
          sx={{ maxWidth: 345 }}
          xs={2}
          sm={2}
          md={2}
        >
          <CardContent>
            <Typography variant="h6">
              {session?.user_firstName[0].toUpperCase() + session?.user_firstName.slice(1)}
            </Typography>
            <Typography variant="h6">
              {session?.user_lastName[0].toUpperCase() + session?.user_lastName.slice(1)}
            </Typography>
            <Typography variant="h6">
              {session?.user_role}
            </Typography>
            <Typography variant="h6">
              {session?.user_level}
            </Typography>
          </CardContent>
        </Grid>
      </Grid>

      <Divider variant="middle" />
      
       <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant='h2'>
            Мои курсы
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h2'>
            Мой словарь
          </Typography>
        </Grid>
        {favorites ? favorites.map(favorite => <ProfileStudentCourse key={favorite.id} favorite={favorite} />) : <div>No fav course</div> }
      </Grid>

    </Container>

  )
}

export default ProfileStudent
