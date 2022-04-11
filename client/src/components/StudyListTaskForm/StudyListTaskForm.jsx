import React from 'react';
import {TextField, Button} from "@mui/material";

const taskRefer = {refer: "LessonID1.png"}

function StudyListTaskForm({lesson_img}) {
    return (
        <div>
            <div>
               <img src={`/img/lessons/${lesson_img}`} width="750px"/>
            </div>
            <div>
                <TextField
                    id="outlined-multiline-flexible"
                    multiline
                    maxRows={8}
                    fullWidth={15}
                />
                <Button>Отправить на проверку</Button>
            </div>
        </div>
    );
}

export default StudyListTaskForm;
