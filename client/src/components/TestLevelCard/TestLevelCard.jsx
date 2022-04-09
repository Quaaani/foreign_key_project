import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Checkbox, Box, FormLabel, FormGroup, FormControlLabel, FormHelperText, FormControl} from "@mui/material";
import {useState} from "react";
import {useSelector} from "react-redux";

const useStyles = makeStyles(() => ({
    testLevelCard: {
        marginTop: "30px",
        marginBottom: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    }
}))



    function TestLevelCard({curQuest}) {

        console.log(curQuest)

        const classes = useStyles()


        const [state, setState] = useState({
            // tlevel_option1: true,
            // tlevel_option2: false,
            // tlevel_option3: false,
            // tlevel_option4: false
        });
        const handleChange = (event) => {
            setState({
                ...state,
                [event.target.name]: event.target.checked,
            });
        };

        const {tlevel_option1, tlevel_option2, tlevel_option3, tlevel_option4} = state;
        const error = [curQuest.tlevel_option1, curQuest.tlevel_option2, curQuest.tlevel_option3, curQuest.tlevel_option4].filter((v) => v).length !== 1;

        return (
            <div className={classes.testLevelCard}>
                <Box sx={{display: 'flex'}}>
                    <FormControl
                        // error={error}
                        component="fieldset"
                        sx={{m: 3}}
                        variant="standard"
                    >
                        <FormLabel component="legend">{curQuest.tlevel_question}</FormLabel>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox checked={tlevel_option1} onChange={handleChange} name="tlevel_option1"/>
                                }
                                label={curQuest.tlevel_option1}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={tlevel_option2} onChange={handleChange} name="tlevel_option2"/>
                                }
                                label={curQuest.tlevel_option2}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={tlevel_option3} onChange={handleChange} name="tlevel_option3"/>
                                }
                                label={curQuest.tlevel_option3}
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox checked={tlevel_option4} onChange={handleChange} name="tlevel_option4"/>
                                }
                                label={curQuest.tlevel_option4}
                            />
                        </FormGroup>
                        <FormHelperText>Выберите только один вариант ответа!</FormHelperText>
                    </FormControl>
                </Box>
            </div>
        );
    }


export default TestLevelCard
