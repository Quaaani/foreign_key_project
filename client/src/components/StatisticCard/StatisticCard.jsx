import React from 'react';
import { Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';

// const data = [{title: "Преподаватели", value: 30}, {title: "Студенты", value: 3056}, {title: "Курсы", value: 256}]

const useStyles = makeStyles(() => ({
    statCard: {
        height: "260px",
        width: "290px",
        display: "flex",
        margin: "2vw",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "70px",
        boxSizing: "border-box",
        background: "linear-gradient(-320deg, #7fbab6 0%, #73dcc8 100%)"
    }
}))

function StatisticCard({stat}) {

    const classes = useStyles()

    return (
        <Paper elevation={10} className={classes.statCard}
          md={{width: "200px"}}
        >
                <Typography>
                    {stat.stat_title}
                </Typography>
               <Typography
                   component="h2"
                   variant="h3"
               >
                   {stat.stat_value}
               </Typography>


        </Paper>
    );
}

export default StatisticCard;
