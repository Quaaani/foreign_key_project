import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'

export function CoursesCard ({course}) {

  console.log('CARD', course);
  return (
      
      <Grid 
        item 
        xs={12}
        sm={4}
        md={4}
      >
        <Card 
          sx={{
            display: 'flex', 
            height: 200,
        }}>
          <CardMedia
            component='img'
            sx={{ width: 150}}
            image='https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg'
            alt='Course NAME'
          >
          </CardMedia>
          <CardContent
            sx={{
              display: 'flex', flexDirection: 'column',
            }}
          >
            <Typography 
              variant="h5"
            >
                {course.course_name}
            </Typography>
            <Typography
              variant="body"
            >
              {course.course_level}
            </Typography>
            <Typography
              variant='body'
            >
              {course.course_description}
            </Typography>
            <CardActions
              sx={{
                display: 'flex', justifyContent: 'center',alignItems: 'center'
                
              }}
            >
              <Button variant="outlined" color="success">ГАЗУЙ</Button>
          </CardActions>
          </CardContent>

        </Card>
      </Grid>
  )
}
