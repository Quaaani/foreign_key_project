import React from 'react';
import {TextField, Button} from "@mui/material";



function StudyListTaskForm(props) {
    return (
        <div>
            <div>
               <img src="/img/lessons/LessonID1.png" width="750px"/>
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
