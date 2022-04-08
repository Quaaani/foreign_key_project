import { Button, Card, CardActions, CardMedia, Container, Grid } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";

function ProfileStudent () {
  
  const { session } = useSelector((state) => state.sessionReducer);

  console.log('SESSION PROFILE', session);

  return (
    <Container>
      <Grid container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={{ xs: 2, md: 3 }}
        marginTop={{xs: 7, sm: 6, md: 4}}
        
      >
        <Grid item
          xs={4}
          sm={8}
          md={12}
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
            <CardActions>
              <Button color="secondary" variant="outlined">Редактировать профиль</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProfileStudent
