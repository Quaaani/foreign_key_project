import React from 'react';
import StudyListVideo from "../StudyListVideo/StudyListVideo";
import StudyListMenu from "../StudyListMenu/StudyListMenu";
import {Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import StudyListTaskForm from "../StudyListTaskForm/StudyListTaskForm";


const useStyles = makeStyles(() => ({
    list: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "50px",
    },
    tasks: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "50px",
    },
    taskText: {
        marginBottom: "20px",
    }

}))

function StudyList(props) {

    const classes = useStyles()

    return (
    <div>
        <Typography
            variant="h3"
        >
            Урок 1. Золотое прикосновение
        </Typography>
        <div className={classes.list}>

            <div>
                <div className={classes.tasks}>
                    <Typography className={classes.taskText} id="task1">
                        Задание 1. Посмотрите видео и запишите в словарь новые слова.
                    </Typography>
                    <StudyListVideo />
                    <div>Translator</div>
                </div>
                <div className={classes.tasks}>
                    <Typography className={classes.taskText} id="task2">
                        Задание 2. Ответьте на вопросы.
                    </Typography>
                    <div>Здесь должен быть тест</div>
                </div>
                <div>
                    <Typography className={classes.taskText} id="task3">
                        Задание 3. Выполните задание ниже, не забудьте отправить его на проверку!
                    </Typography>
                    <StudyListTaskForm />
                </div>
            </div>
            <div>
                <StudyListMenu />
            </div>
        </div>
    </div>
    );
}

export default StudyList;
