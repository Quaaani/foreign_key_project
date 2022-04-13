import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography, Divider } from "@mui/material";
import { useSelector } from "react-redux";

function ProfileTeacher () {
  const { session } = useSelector((state) => state.sessionReducer)
  const { favorites } = useSelector((state) => state.favoritesReducer)

  console.log('Teacher Fav => ', favorites);
  console.log('session => ', session)
  
  return (
    <Container >
      <Grid container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={{ xs: 2, md: 3 }}
        marginY={{xs: 4, sm: 6, md: 4}}
      >
        <Grid item
          xs={6}
          sm={4}
          md={4}
          sx={{ mx: 'auto', my: 'auto'}}
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
              <Button color="secondary" variant="outlined" sx={{ mx: 'auto'}}>Редактировать профиль</Button>
            </CardActions>
          </Card>
          
          </Grid>

          <Grid item
            xs={2}
            sm={2}
            md={3}
            sx={{ my: 'auto'}}
          >
            <CardContent>
              <Typography variant="h6">
                Имя:
              </Typography>
              <Typography variant="h6">
                Фамилия:
              </Typography>
              <Typography variant="h6">
                Статус:
              </Typography>
            </CardContent>
          </Grid>

          <Grid item
            xs={2}
            sm={2}
            md={4}
            sx={{ my: 'auto'}}
          >
            <CardContent>
            <Typography variant="h6">
              {session?.user_firstName[0].toUpperCase() + session?.user_firstName.slice(1)}
            </Typography>
            <Typography variant="h6">
              {session?.user_lastName[0].toUpperCase() + session?.user_lastName.slice(1)}
            </Typography>
            <Typography variant="h6">
              Преподаватель
            </Typography>
          </CardContent>
          </Grid>

      </Grid>

      <Divider variant="middle" />

      <Grid container>
        <Grid item
          xs={2}
          sm={2}
          md={3}
          sx={{ my: 'auto'}}        
        >
          

          Мои курсы
      </Grid>

      </Grid>

    </Container>
  )
}

export default ProfileTeacher;
