import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    menu: {
        position: "fixed",
        right: "150px",
        width: "250px"
    },
    tasks: {
        textDecoration: "none",
    }
}))

function StudyListMenu(props) {
const classes = useStyles()

    return (
        <div className={classes.menu}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography>Урок 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <a href="#task1" className={classes.tasks}>Задание 1: Видео</a>
                    </Typography>
                    <Typography>
                        <a href="#task2" className={classes.tasks}>Задание 2: Вопросы</a>
                    </Typography>
                    <Typography>
                        <a href="#task3" className={classes.tasks}>Задание 3: Перевод</a>
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}

export default StudyListMenu;
