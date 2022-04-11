import React from 'react';
import StatisticCard from "../StatisticCard/StatisticCard";
import { makeStyles } from '@mui/styles';

const stat = [{id: 1, stat_title: "Преподаватели", stat_value: 30}, {id: 2, stat_title: "Студенты", stat_value: 3056}, {id: 3, stat_title: "Курсы", stat_value: 256}]

const useStyles = makeStyles(() => ({
    statList: {
        marginTop: "8vw",
        marginBottom: "8vw",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around"
    }


}))


function StatisticList(props) {

  const classes = useStyles()

    return (
        <div id='stat' className={classes.statList} sx={{}}>
            {stat ? stat.map(stat => <StatisticCard key={stat.id} stat={stat} />) : <div>No data</div>}
        </div>
    );
}

export default StatisticList;
