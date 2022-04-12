import React from 'react';
import {TextField, Button, FormControl} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {safePreventDefault} from "react-slick/lib/utils/innerSliderUtils";

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


function StudyListTaskForm({lesson_img}) {
    const classes = useStyles()

    // const handleSubmit = (event) => {
    //     event.preventDefault
    // }




    return (
        <div>
            <div>
               <img src={`/img/lessons/${lesson_img}`} width="750px"/>
            </div>

            <FormControl className={classes.taskSend}>
                <div className={classes.taskSend}>
                    <TextField
                        id="outlined-multiline-flexible"
                        multiline
                        maxRows={5}
                        fullWidth={15}
                    />
                    {/*<Button onSubmit={handleSubmit} className={classes.butt} variant="outlined">Отправить на проверку</Button>*/}
                </div>
            </FormControl>
        </div>
    );
}

export default StudyListTaskForm;
