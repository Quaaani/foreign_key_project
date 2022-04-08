import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'

export function CoursesCard ({course}) {

  console.log('CARD', course);
  return (
      
      <Grid 
        item 
        xs={12}
        sm={4}
        md={6}
      >
        <Card 
         sx={{
          display: 'flex', justifyContent: 'space-around',
        }}>
          <CardMedia
            component='img'
            sx={{ width: 200}}
            image='https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg'
            alt='Course NAME'
          >
          </CardMedia>
          <CardContent
           
          >
            <Typography 
              variant="h5"
            >
                {course.course_name}
            </Typography>
            <Typography
              variant='body'
            >
              Course Description
            </Typography>
          </CardContent>
        </Card>
      </Grid>
  )
}
