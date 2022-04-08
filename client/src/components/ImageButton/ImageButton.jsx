import React from 'react';
import { Button, Paper,Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({

    mainFeaturesPost: {
        position: "relative",
        height: "55vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        marginTop: "-70px",
        paddingTop: "150px",
        // zIndex: "-1"
    },
    mainFeaturesPostContent: {
        height: "40vh"
    },
    buttonCenter: {
        display: "flex",
        flexDirection: "column",
    },
    ourBtn: {
        display: "flex",
        justifyContent: "center",
    },
    btn: {
        width: "230px",
        height: "50px",
    }
}))

function ImageButton(props) {

    const classes = useStyles()

    return (
        <Paper className={classes.mainFeaturesPost}
        sx={{ "background-image": `url(/img/HomePhoto/temp.jpg)`}}>
            <Container fixed>
                <Grid container className={classes.buttonCenter}>
                    <Grid item md={8}>
                        <div className={classes.mainFeaturesPostContent}>
                            <Typography
                            component="h2"
                            variant="h3"
                            color="inherit"
                            gutterBottom
                            >
                                Key to your successful communication
                            </Typography>
                            <Typography
                                component="h5"
                                color="inherit"
                                paragraph
                            >
                                <ul>
                                    <li>Избранные курсы</li>
                                    <li>Квалифицированные специалисты</li>
                                    <li>Эффективные задания</li>
                                </ul>
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item className={classes.ourBtn}>
                        <Button variant="contained" color="secondary" className={classes.btn}>
                            Начать обучение
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
}

export default ImageButton;
