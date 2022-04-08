import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ImageButton(props) {

    return (
        <Card sx={{ maxWidth: '70vw' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    width="140"
                    image="img/Home.photo/temp.jpg"
                    alt="start photo"
                />
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Начать обучение
                </Button>
            </CardActions>
        </Card>
    );
}

export default ImageButton;
