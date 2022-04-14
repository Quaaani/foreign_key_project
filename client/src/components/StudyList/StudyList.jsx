
import React, { useState, useEffect } from 'react';
import StudyListVideo from "../StudyListVideo/StudyListVideo";
import StudyListMenu from "../StudyListMenu/StudyListMenu";
import {Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import StudyListTaskForm from "../StudyListTaskForm/StudyListTaskForm";
import {useSelector} from "react-redux";
import Translator from '../Translator/Translator';
import LessonTest from '../LessonTest/LessonTest'


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

    const [lesson, setLesson] = useState(studylist?.first_lesson_data)
    const [test, setTest] = useState(studylist?.first_lesson_tests)
    const [qnIndex, setQnIndex] = useState(0)

    const addIndex = () => {
      setQnIndex(prev => prev + 1)
    }

    const previousLesson = (event) => {
      event.preventDefault()
      setLesson(studylist?.first_lesson_data)
      setTest(studylist?.first_lesson_tests)
      setQnIndex(0)
    }

    const nextLesson = (event) => {
      event.preventDefault()
      setLesson(studylist?.second_lesson_data)
      setTest(studylist?.second_lesson_tests)
      setQnIndex(0)
    }

    console.log('studylist =>', studylist)

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
                    <div>
                      <Translator />
                    </div>

                </div>
                <div className={classes.tasks}>
                    <Typography className={classes.taskText} id="task2">
                        Задание 2. Ответьте на вопросы.
                    </Typography>
                    {/* <div>Здесь должен быть тест</div> */}
                    {studylist && <LessonTest test={test} qnIndex={qnIndex} addIndex={addIndex}/>}
                </div>
                <div>
                    <Typography className={classes.taskText} id="task3">
                        Задание 3. Выполните задание ниже, не забудьте отправить его на проверку!
                    </Typography>
                    <StudyListTaskForm lesson_img={lesson?.lesson_img} lesson={lesson} key={lesson?.id}/>
                </div>
                <button onClick={previousLesson}>Предыдущий урок</button>
                <button onClick={nextLesson}>Следующий урок</button>
            </div>
            <div>
                {/* <StudyListMenu /> */}
            </div>
        </div>
    </div>
    );
}

export default StudyList;
