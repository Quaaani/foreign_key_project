import React from 'react';
import StudyListVideo from "../StudyListVideo/StudyListVideo";
import StudyListMenu from "../StudyListMenu/StudyListMenu";
import {Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import StudyListTaskForm from "../StudyListTaskForm/StudyListTaskForm";
import {useSelector} from "react-redux";


const useStyles = makeStyles(() => ({
    list: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: "20px",
    },
    tasks: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "50px",
    },
    taskText: {
        marginBottom: "20px",
        fontWeight: "bold",
    },
    cont: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: 'center',
    }

}))

function StudyList(props) {

    const classes = useStyles()
    const { studylist } = useSelector(state => state.studylistReducer)

    return (
    <div className={classes.cont}>
        <Typography
            variant="h4"
            mt={4}
        >
            {studylist?.first_lesson_data.lesson_name}
        </Typography>
        <div className={classes.list}>

            <div>
                <div className={classes.tasks}>
                    <Typography className={classes.taskText} id="task1">
                        Задание 1. Посмотрите видео и запишите в словарь новые слова.
                    </Typography>
                    <StudyListVideo lesson_video={studylist?.first_lesson_data.lesson_video}/>
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
                    <StudyListTaskForm lesson_img={studylist?.first_lesson_data.lesson_img}/>
                </div>
            </div>
            <div>
                {/*<StudyListMenu />*/}
            </div>
        </div>
    </div>
    );
}

export default StudyList;
