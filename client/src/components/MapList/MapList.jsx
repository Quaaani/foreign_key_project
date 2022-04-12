import React from 'react';
import {useSelector} from "react-redux";
import {makeStyles} from "@mui/styles";
import {Typography} from "@mui/material";

const useStyles = makeStyles(() => ({
    cont: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "40px",
        // backgroundImage: `url(https://images.pexels.com/photos/3584309/pexels-photo-3584309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`
    },
    levelText: {
        fontWeight: "bold"
    }

}))

function MapList(props) {

    const classes = useStyles()

    const { session } = useSelector((state) => state.sessionReducer)

    console.log(session?.user_level)
    let notice = ''
    if (session?.user_level < 100){
        notice = "Тебе нужно пройти начальный курс."
    } else if (session?.user_level > 100 && session?.user_level < 400){
        notice = "Ты будешь комфортно общаться в странах, отмеченных жёлтым цветом."
    } else {
        notice = "Ты можешь смело путешествовать по миру!"
    }

    return (
        <div className={classes.cont}>
            <Typography className={classes.levelText}>Твой текущий уровень: {session?.user_level}</Typography>
            <Typography mb={3}>{notice}</Typography>
            <Typography mb={7}>
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa6fd8c78b7d4f55ffb1ab1bdf1c0d56f02c16c8ee365a4b98deeb346a77109b8&amp;source=constructor"
                    width="900" height="500" frameBorder="0" ></iframe>
            </Typography>

        </div>
    );
}

export default MapList;
