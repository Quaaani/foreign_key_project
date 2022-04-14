
import React, { useState, useEffect } from 'react';
import StudyListVideo from "../StudyListVideo/StudyListVideo";
import StudyListMenu from "../StudyListMenu/StudyListMenu";
import {Typography, Container, Button} from "@mui/material";
import {makeStyles} from "@mui/styles";
import StudyListTaskForm from "../StudyListTaskForm/StudyListTaskForm";
import {useDispatch, useSelector} from "react-redux";
import Translator from '../Translator/Translator';
import LessonTest from '../LessonTest/LessonTest'
import { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInitStudylistAAC } from '../../redux/asyncActionCreators/studylistAAC'


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
        marginBottom: "3vw"
    },
    videoWrapper: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between"
    },
    video: {
      flexGrow: 1
    },
    translator: {
      width: "auto"
    },
    prevNext: {
      backgroundColor: "#265351 !important",
      color: "white",
      border: "none",
    },
    butCont: {
      display: "flex",
      justifyContent: "space-around",
      marginTop: '20px'
    }

}))

function StudyList(props) {
    const classes = useStyles()
    const { studylist } = useSelector(state => state.studylistReducer)
    const dispatch = useDispatch();
    const { id } = useParams()
    
    const [lesson, setLesson] = useState(studylist?.first_lesson_data)
    const [test, setTest] = useState(studylist?.first_lesson_tests)
    const [qnIndex, setQnIndex] = useState(0)


  useEffect(async () => {
    try {
      // await dispatch(axiosInitStudylistAAC(id))
      // localStorage.clear()
      // localStorage.setItem('favorite_id', id)
      setLesson(studylist?.first_lesson_data)
      setTest(studylist?.first_lesson_tests)
      setQnIndex(0)
    } catch (error) {
        console.log('error lesson', {...error})
    }  
  },[dispatch, studylist])

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

    return (
      
    <Container maxwidth="lg" className={classes.cont}>
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

                    <div className={classes.videoWrapper}>
                      <StudyListVideo lesson_video={lesson?.lesson_video} className={classes.video} />
                      <Translator className={classes.translator} />
                    </div>

                </div>
                <div className={classes.tasks}>
                    <Typography className={classes.taskText} id="task2">
                        Задание 2. Ответьте на вопросы.
                    </Typography>
                    {studylist && <LessonTest test={test} qnIndex={qnIndex} addIndex={addIndex}/>}
                </div>
                <div>
                    <Typography className={classes.taskText} id="task3">
                        Задание 3. Выполните задание ниже, не забудьте отправить его на проверку!
                    </Typography>
                    <StudyListTaskForm lesson_img={lesson?.lesson_img} lesson={lesson} key={lesson?.id}/>
                </div>
                <div className={classes.butCont}>
                   <Button className={classes.prevNext} variant='contained' onClick={previousLesson}>Предыдущий урок</Button>
                   <Button className={classes.prevNext} variant='contained' onClick={nextLesson}>Следующий урок</Button>
                </div>
            </div>
            <div>
                {/* <StudyListMenu /> */}
            </div>
        </div>
    </Container>
    );
}

export default StudyList;
