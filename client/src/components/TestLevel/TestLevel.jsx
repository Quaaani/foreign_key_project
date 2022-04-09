import React from 'react';
import { Pagination, PaginationItem, Stack, Typography} from "@mui/material";
import { makeStyles } from '@mui/styles';import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TestLevelCard from "../TestLevelCard/TestLevelCard";
import {useState} from "react";

const useStyles = makeStyles(() => ({
    testLevelPag: {
        marginTop: "30px",
        marginBottom: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    testLevelList: {
        marginTop: "30px",
        marginBottom: "30px",

    }
}))

function TestLevel(props) {
    const classes = useStyles()

    const [quest, setQuest] = useState(1);
    const handleChange = (event, value) => {
        setQuest(value);
    }

        return (
            <div className={classes.testLevelList}>



                <div className={classes.testLevelPag}>
                    <Stack spacing={2}>
                        <Typography>Вопрос: {quest}</Typography>
                        <TestLevelCard/>
                        <Pagination count={10} page={quest} onChange={handleChange}/>
                    </Stack>
                </div>
            </div>
        );
    }


export default TestLevel;
