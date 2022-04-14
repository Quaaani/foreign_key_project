import React, {useRef, useState} from 'react';
import {TextField, Button, FormControl, TextareaAutosize, Alert} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {safePreventDefault} from "react-slick/lib/utils/innerSliderUtils";
import {useDispatch, useSelector} from "react-redux";
import {axiosSendHomeworkAAC, axiosInitHomeworkAAC} from "../../redux/asyncActionCreators/homeworkAAC";
import { CleaningServices } from '@mui/icons-material';

const useStyles = makeStyles(() => ({
    taskSend: {
        display: "flex",
        flexDirection: "column",

    },
    butt: {
        display: "flex",
        marginTop: "10px",
        width: "750px",
        margin: "0 auto",
        backgroundColor: "rgba(105, 135, 133, 0.6)",
        border: "none",
        color: "black"
    },
    imgWrapper: {
      display: "flex",
      justifyContent: "center"
    },
    mainWrapper: {
      display: "flex",
      flexDirection: "column"
    },
    inputAnsw: {
      width: "750px",
      margin: "0 auto"
    }
}))


function StudyListTaskForm({lesson_img, lesson}) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const { session } = useSelector(state => state.sessionReducer)
    const { studylist } = useSelector( state => state.studylistReducer)
    const homeworkText = useRef()
    const [accessToggle, setAccessToggle] = useState(false)
    const [accessMsg, setAccessMsg] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        const homework = {
            from_user_id: session?.id,
            to_user_id: studylist.user_id,
            lesson_id: lesson?.id,
            homework: homeworkText.current.value
        }
    dispatch(axiosSendHomeworkAAC(homework))
    setAccessMsg('Домашнее задание отправлено');
      setAccessToggle(true);
      setTimeout(() => {
        setAccessToggle(false);
      }, 2000);
    }

    return (
        <div className={classes.mainWrapper}>
            <div className={classes.imgWrapper}>
               <img src={`/img/lessons/${lesson_img}`} width="750px"/>
            </div>

            <FormControl className={classes.taskSend}>
                <div className={classes.taskSend}>
                    <TextareaAutosize ref={homeworkText}
                        id="outlined-multiline-flexible"
                        multiline
                        maxRows={5}
                        minRows={5}
                        // fullWidth={15}
                        className={classes.inputAnsw}
                    />
                    <Button onClick={handleSubmit} className={classes.butt} variant="outlined">Отправить на проверку</Button>
                </div>
                {accessToggle && <Alert severity="success" sx={{m: 1, mb: 7}}>
                  {accessMsg}
                </Alert>}
            </FormControl>
        </div>
    );
}

export default StudyListTaskForm;
