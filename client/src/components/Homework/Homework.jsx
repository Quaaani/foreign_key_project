import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography, TextareaAutosize } from '@mui/material'
import { margin } from '@mui/system'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { axiosAddLevelAAC } from '../../redux/asyncActionCreators/homeworkAAC'

const Homework = ({homework}) => {
  const dispatch = useDispatch()
  const [status, setStatus] = useState(false)

  const changeStatus = async (event) => {
    event.preventDefault()
    try {
      const obj = {
        user_level: homework.lesson_price
      }
      await dispatch(axiosAddLevelAAC(homework.from_user_id, obj))
    } catch (error) {
        console.log('ERROR HOMEWORK', { ...error})
    }
    setStatus(true)
  }

  console.log(homework)
  return (
    <Grid
        item
        xs={12}
        sm={12}
        md={12}
        marginTop={{xs: 1, sm: 1, md: 2}}
      >
        <Card
          sx={{
            display: 'flex',
            }}
        >
          <Avatar 
          alt="Remy Sharp" 
          src={`/img/avatars/${homework.user_avatar}`}
          sx={{ width: 100, height: 100, m: 3}}
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
              marginBottom={{xs: 1, sm: 1, md: 2}}
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

            {status ?  
              <Typography 
                style={{width: 150, color: 'green'}}
                marginTop={{xs: 1, sm: 1, md: 2}}
                sx={{ my: 'auto'}}
                >
                  Проверено
              </Typography>
            : 
            <Typography size="small" color="error" 
            style={{width: 150}}
            marginTop={{xs: 1, sm: 1, md: 2}}
            sx={{ my: 'auto'}}
            >
              Не проверено
          </Typography>
            }
           
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
            style={{ width: 500, overflow: 'auto', textAlign: 'justify' }}
            minRows={10}
            >
              {homework.homework}
            </Typography>
  
        </CardContent>
        <Button size="small" color="success"
              style={{width: 150, height: 40}}
              sx={{ mt: 8}}
              data-id={homework.from_user_id}
              onClick={changeStatus}
              >
                Проверить
          </Button>
          
        </Card>

      </Grid>
  )
}

export default Homework
