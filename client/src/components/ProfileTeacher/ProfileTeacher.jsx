import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

function ProfileTeacher () {
  const { session } = useSelector((state) => state.sessionReducer)
  
  return (
    <Container >
      <Grid container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={{ xs: 2, md: 3 }}
        marginY={{xs: 4, sm: 6, md: 4}}
      >
        <Grid item
          xs={6}
          sm={2}
          md={6}
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
            sx={{ mx: 'auto', my: 'auto'}}
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
            </CardContent>
          </Grid>

          <Grid item
            xs={2}
            sm={2}
            md={3}
            sx={{ mx: 'auto', my: 'auto'}}
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
    </Container>
  )
}

export default ProfileTeacher;
