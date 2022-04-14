import React from 'react';
import { Pagination, PaginationItem, Stack, Typography, Button} from "@mui/material";
import { makeStyles } from '@mui/styles';
import TestLevelCard from "../TestLevelCard/TestLevelCard";
import {useState} from "react";
import {useSelector} from "react-redux";

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

    const {tLevels} = useSelector((state) => state.tLevelsReducer)
  

    const [quest, setQuest] = useState(1);
    const [curQuest, setCurQuest] = useState({})

    const handleChange = (event) => {
        event.preventDefault();
        setQuest(prev => prev + 1)
        const q = tLevels.filter(el => el.id === quest)
        setCurQuest(q[0])
    }

        return (
            <div className={classes.testLevelList}>
                <div className={classes.testLevelPag}>
                    <button onClick={handleChange}>TEST</button>
                    <Stack spacing={2}>
                        <Typography>Вопрос: {quest}</Typography>
                        <TestLevelCard curQuest={curQuest}/>
                        <Button variant="contained" onClick={handleChange}>Далее</Button>
                        {/*<Pagination count={10} page={quest} onChange={handleChange}/>*/}
                    </Stack>
                </div>
            </div>
        );
    }


export default TestLevel;
