import { Card, CardContent, Container, Grid, Typography } from '@mui/material'

export function CoursesCard () {

  return (
    <Container>
    <Grid
      container
      // direction="row"
      // justifyContent="center"
      // alignItems="center"
      columns={{ xs: 4, sm: 8, md: 12 }}
      spacing={{ xs: 2, md: 3 }}
    >
      <Grid 
        item 
        xs={12}
        sm={4}
        md={4}
      >
        <Card>
          <CardContent>
            <Typography

            >
                FIRST
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid 
        item 
        xs={12}
        sm={4}
        md={4}
      >
        <Card>
          <CardContent>
            <Typography

            >
                  SECOND
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid 
        item 
        xs={12}
        sm={4}
        md={4}
      >
        <Card>
          <CardContent>
            <Typography

            >
                  THIRD
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </Container>
  )
}
