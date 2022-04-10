import { Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, LinearProgress, Typography } from "@mui/material"
import { useState } from "react";
import { useSelector } from "react-redux";
import Dictionary from "../Dictionary/Dictionary";
import ProfileStudentCourse from "../ProfileStudentCourse/ProfileStudentCourse";

const progress = [{
  scores: 170,
  next_level: 'B'
  }, 
  {
  scores: 50,
  next_level: 'C'  
  }]

function ProfileStudent () {
  const { session } = useSelector((state) => state.sessionReducer)
  const { favorites } = useSelector((state) => state.favoritesReducer)
  const { dictionary } = useSelector((state) => state.dictionariesReducer)

    
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
              <Button color="secondary" variant="outlined" sx={{ mx: 'auto'}}>Редактировать профиль</Button>
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
        <Grid item
          xs={4}
          md={4}>
            
             
              
              {progress[1].scores > 200 ? 
                <Grid >
                  <Typography>
                    Следующий уровень '{progress[1].next_level}'
                  </Typography> 
                  <LinearProgress sx={{height: 10}} variant="determinate" color="secondary" value={progress[1].scores/4} />
                  <Typography variant="caption" color="text.secondary">
                   {progress[1].scores/4}%
                  </Typography> 
                </Grid>: 
                <Grid > 
                  <Typography>
                    Следующий уровень '{progress[0].next_level}'
                  </Typography> 
                  <LinearProgress sx={{height: 10}} variant="determinate" color="secondary" value={progress[0].scores/2} />
                  <Typography variant="caption" color="text.secondary">
                    {progress[0].scores/2}%
                  </Typography> 
                </Grid> }
             
              

        </Grid>
      </Grid>
    
      <Divider variant="middle" />
       <Grid container 
          spacing={{ xs: 2, md: 3 }}
          marginY={{xs: 4, sm: 6, md: 4}}
       >
         
         <Grid item 
             xs={12}
             sm={6}
             md={6}
             sx={{ mx: 'auto'}}
          >
            <Typography variant='h6'
              sx={{ mx: 'auto'}}
            >
              Мои курсы
            </Typography>
            <Grid container
               
            >
              {favorites ? favorites.map(favorite => <ProfileStudentCourse key={favorite.id} favorite={favorite} />) : <div>No fav course</div> }
            </Grid>
          </Grid>

          <Grid item 
             xs={12}
             sm={6}
             md={6}
             sx={{ mx: 'auto'}}
          >
            <Typography variant='h6'
              sx={{ mx: 'auto'}}
            >
              Мой словарь
            </Typography>
            <Grid container>

                {dictionary ? dictionary.map(dictionary => <Dictionary key={dictionary.id} dictionary={dictionary} />) : 'NO WORDS'}

            </Grid>
          </Grid>

      </Grid>

    </Container>

  )
}

export default ProfileStudent
