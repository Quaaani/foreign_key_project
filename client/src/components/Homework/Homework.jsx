import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography, TextareaAutosize } from '@mui/material'


const Homework = ({homework}) => {
  
  console.log(homework)
  return (
    <Grid
        item
        xs={12}
        sm={12}
        md={12}
      >
        <Card
          sx={{
            display: 'flex',
            }}
        >
          <Avatar 
          alt="Remy Sharp" 
          src={`/img/avatars/${homework.user_avatar}`}
          sx={{ width: 100, height: 100}}
          style={{backgroundColor: "blue"}}
          />

          <CardContent
            sx={{
              display: 'flex', flexDirection: 'column', position: 'relative',
            }}
            style={{textAlign: 'center' }}
            
          >
            <Typography
              variant="body"
            >
                {homework.user_firstName}
            </Typography>
            <Typography
              variant="body"
            >
              {homework.user_lastName}
            </Typography>
            <Typography
              variant='body'
            >
              {homework.user_phone}
            </Typography>
            <Typography
              variant='body'
            >
              {homework.user_email}
            </Typography>
            <CardActions
              sx={{
                display: 'flex', justifyContent: 'center',alignItems: 'center', mt: 'auto',

              }}
            >
             
          </CardActions>
          </CardContent>
          <CardContent
            sx={{
              display: 'flex', flexDirection: 'column', position: 'relative',
            }}
          >
            <Typography variant="h5"
            style={{fontWeight: 'bold'}}
            marginBottom={{xs: 1, sm: 1, md: 2}}
            >
              Урок: {homework.lesson_name}
            </Typography>
            <Typography 
            style={{ width: 600, overflow: 'auto', textAlign: 'justify' }}
            minRows={10}
            >
              {homework.homework}
            </Typography>

        </CardContent>

        </Card>

      </Grid>
  )
}

export default Homework
