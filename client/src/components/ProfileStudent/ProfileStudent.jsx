import { Button, Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, LinearProgress, Typography } from "@mui/material"
import { useSelector } from "react-redux";
import Dictionary from "../Dictionary/Dictionary";
import ProfileStudentCourse from "../ProfileStudentCourse/ProfileStudentCourse";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
  boldText: {
    fontWeight: "bold"
  },
  avatar: {
    border: "none",
    boxShadow: "none"
  }

}));

function ProfileStudent () {
  const { session } = useSelector((state) => state.sessionReducer)
  const { favorites } = useSelector((state) => state.favoritesReducer)
  const { dictionary } = useSelector((state) => state.dictionariesReducer)

  const styles = useStyles();
    
  return (
    <Container>
      <Grid container
        columns={{ xs: 4, sm: 8, md: 12 }}
        spacing={{ xs: 2, md: 3 }}
        marginY={{xs: 4, sm: 6, md: 4}}
        sx={{ mx: 'auto', my: 'auto'}}
      >
        <Grid item
          xs={4}
          sm={4}
          md={4}
        >
          <Card
            sx={{ maxWidth: 345 }}
            className={styles.avatar}
          >
            <CardMedia
              component='img'
              height="340"
              image={`/img/avatars/${session?.user_avatar}`}
              alt="avatar"
            >
            </CardMedia>
            {/* <CardActions centered>
              <Button color="secondary" variant="outlined" sx={{ mx: 'auto'}}>Редактировать профиль</Button>
            </CardActions> */}
          </Card>
        </Grid>
        <Grid item
          sx={{ maxWidth: 345 }}
          xs={2}
          sm={2}
          md={2}
          sx={{ mx: 'auto', my: 'auto'}}
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
            <Typography variant="h6">
              Уровень:
            </Typography>
          </CardContent>
        </Grid>
        <Grid item
          sx={{ maxWidth: 345 }}
          xs={2}
          sm={2}
          md={2}
          sx={{ mx: 'auto', my: 'auto'}}
        >
          <CardContent>
            <Typography variant="h6" className={styles.boldText}>
              {session?.user_firstName[0].toUpperCase() + session?.user_firstName.slice(1)}
            </Typography>
            <Typography variant="h6" className={styles.boldText}>
              {session?.user_lastName[0].toUpperCase() + session?.user_lastName.slice(1)}
            </Typography>
            <Typography variant="h6" className={styles.boldText}>
              Студент
            </Typography>
            <Typography variant="h6" className={styles.boldText}>
              {session?.user_level}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item
          xs={4}
          md={4}
          sm={4}
          sx={{ mx: 'auto', my: 'auto'}}
        >     
              
              {session?.user_level < 400 ? 
                <Grid >
                  <Typography align="center">
                    Твой прогресс 
                  </Typography> 
                  <LinearProgress sx={{height: 15, primary: "red"}} variant="determinate" value={Number(session?.user_level)/4} />
                  <Typography variant="caption">
                    {(session?.user_level)/4}%
                  </Typography> 
                </Grid>: 
                <Grid > 
                  <Typography>
                    Поздравляю! ТЫ стал Гуру ЛИНГВИСТИКИ 
                  </Typography> 
                  <LinearProgress sx={{height: 15}} variant="determinate" color="secondary" value={100} />
                  <Typography variant="caption" color="text.secondary">
                    {100}%
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
            <Typography 
              variant='h6'
              align="center"
              className={styles.boldText}
            >
              Мои курсы
            </Typography>
            <Grid container
               
            >
              {favorites ? favorites?.map(favorite => <ProfileStudentCourse key={favorite.id} favorite={favorite} />) : null }
            </Grid>
          </Grid>

          <Grid item 
             xs={12}
             sm={6}
             md={6}
             sx={{ mx: 'auto'}}
          >
            <Typography 
              variant='h6'
              align="center"
              className={styles.boldText}
            >
              Мой словарь
            </Typography>
            <Grid container>

                {dictionary ? dictionary?.map(dictionary => <Dictionary key={dictionary?.id} dictionary={dictionary} />) : null}

            </Grid>
          </Grid>

      </Grid>

    </Container>

  )
}

export default ProfileStudent
