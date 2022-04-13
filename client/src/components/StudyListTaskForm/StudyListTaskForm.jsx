import React, {useRef} from 'react';
import {TextField, Button, FormControl, TextareaAutosize} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {safePreventDefault} from "react-slick/lib/utils/innerSliderUtils";
import {useDispatch, useSelector} from "react-redux";
import {axiosSendHomeworkAAC} from "../../redux/asyncActionCreators/homeworkAAC";

const useStyles = makeStyles(() => ({
    taskSend: {
        display: "flex",
        flexDirection: "column",

    },
    butt: {
        display: "flex",
        marginTop: "10px",

    }
}))


function StudyListTaskForm({lesson_img, lesson}) {
    const classes = useStyles()
    const dispatch = useDispatch()

    const { session } = useSelector(state => state.sessionReducer)
    const { studylist } = useSelector( state => state.studylistReducer)
    const homeworkText = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        const homework = {
            from_user_id: session?.id,
            to_user_id: studylist.user_id,
            lesson_id: lesson?.id,
            homework: homeworkText.current.value
        }
        console.log('homework', homework);
        dispatch(axiosSendHomeworkAAC(homework))
    }

    return (
        <div>
            <div>
               <img src={`/img/lessons/${lesson_img}`} width="750px"/>
            </div>

            <FormControl className={classes.taskSend}>
                <div className={classes.taskSend}>
                    <TextareaAutosize ref={homeworkText}
                        id="outlined-multiline-flexible"
                        multiline
                        maxRows={5}
                        minRows={5}
                        fullWidth={15}
                    />
                    <Button onClick={handleSubmit} className={classes.butt} variant="outlined">Отправить на проверку</Button>
                </div>
            </FormControl>
        </div>
    );
}

export default StudyListTaskForm;
