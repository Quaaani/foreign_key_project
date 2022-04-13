import React, { useState } from 'react';
import StudyListVideo from "../StudyListVideo/StudyListVideo";
import StudyListMenu from "../StudyListMenu/StudyListMenu";
import {Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import StudyListTaskForm from "../StudyListTaskForm/StudyListTaskForm";
import {useSelector} from "react-redux";
import Translator from '../Translator/Translator';


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

    const[lesson, setLesson] = useState(studylist?.first_lesson_data)

    const changeLesson = (event) => {
        event.preventDefault()

        setLesson(studylist?.second_lesson_data)
    }

    const previousLesson = (event) => {
        event.preventDefault()

        setLesson(studylist?.first_lesson_data)
    }

    console.log('studylist heeereeeeee', studylist)
    console.log('lesson =>', lesson)

    return (
    <div className={classes.cont}>
        <Typography
            variant="h4"
            mt={4}
        >
            {lesson?.lesson_name}
        </Typography>
        <div className={classes.list}>

            <div>
                <div className={classes.tasks}>
                    <Typography className={classes.taskText} id="task1">
                        Задание 1. Посмотрите видео и запишите в словарь новые слова.
                    </Typography>
                    <StudyListVideo lesson_video={lesson?.lesson_video}/>
                    {/*<StudyListVideo lesson_video={lesson.lesson_video}/>*/}
                    <div>
                      <Translator />
                    </div>

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
                    <StudyListTaskForm id={lesson?.id} lesson_img={lesson?.lesson_img} lesson={lesson}/>
                    <button onClick={previousLesson}>Пред урок</button>
                    <button onClick={changeLesson}>След урок</button>
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
