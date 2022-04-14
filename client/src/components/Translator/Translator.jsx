import React, { useRef, useState } from "react";

import axios from "axios";
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Grid,
  TextareaAutosize,
  TextField,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Alert,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { axiosAddNewWord } from "../../redux/asyncActionCreators/dictionariesAAC";
import { makeStyles } from "@mui/styles";
import { width } from "@mui/system";

const useStyles = makeStyles(() => ({
  wrapper: {
    height: "380px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  containerOut: {
    display: "flex",
    backgroundColor: "rgba(38, 83, 81, 0.15)",
    border: "none",
    marginLeft: "10px",
    borderRadius: "10px",
    "box-shadow": "0px 0px 50px -32px rgba(34, 60, 80, 0.2)"

  },
  btnWrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
    padding: "0 10%",
    marginBottom: "15px"
  },
  btnTranslate: {
    minWidth: "180px",
    backgroundColor: "#265351 !important",
    color: "white"
  },
  btnAdd: {
    backgroundColor: "#265351 !important",
    color: "white"
  },

  wordArea: {
    backgroundColor: "white",
    border: "none",
    marginBottom: "10px"
  },
  transHeader: {
    fontWeight: "bold"
  },
  alertBox: {
    position: "absolute",
    bottom: "140px",
    left: "0"
  },
  alertBoxAdd: {
    position: "absolute",
    bottom: "150px",
    left: "67px"
  }


}))

function Translator() {


const classes = useStyles()

  const dispatch = useDispatch();
  const word_name = useRef();
  const [word_translate, setWord] = useState("");
  const [btnEnColor, setEnBtnColor] = useState(true);
  const [btnRuColor, setRuBtnColor] = useState(false);
  const [langpair, setLangpair] = useState('en|ru');
  const [toggle, setToggle] = useState(false)
  const [msg, setMsg] = useState('');
  const [accessToggle, setAccessToggle] = useState(false)
  const [accessMsg, setAccessMsg] = useState('')

  const toChangeRU = (event) => {
    event.preventDefault();
    setLangpair("ru|en");
    setRuBtnColor(!btnRuColor);
    setEnBtnColor(false);
  };

  const toChangeEN = (event) => {
    event.preventDefault();
    setLangpair("en|ru");
    setEnBtnColor(!btnEnColor);
    setRuBtnColor(false);
  };

  const toTranslate = async (event) => {
    event.preventDefault();
    const q = word_name.current.value;

    const options = {
      method: "GET",
      url: "https://translated-mymemory---translation-memory.p.rapidapi.com/api/get",
      params: { langpair, q, mt: "1", onlyprivate: "0", de: "a@b.c" },
      headers: {
        "X-RapidAPI-Host":
          "translated-mymemory---translation-memory.p.rapidapi.com",
        "X-RapidAPI-Key": "466b582432msh4d47608325c8ec9p1d585bjsnee90b9688688",
      },
    };

    try {
      const response = await axios.request(options);
      setWord(response.data.responseData.translatedText);
    } catch (error) {
      console.log("error =>", { ...error });
    }
  };

  const addNewWord = async (event) => {
    event.preventDefault();
    const newWord = {
      word_name: word_name.current.value.toLowerCase(),
      word_translate: word_translate.toLowerCase(),
    };
    try {
      await dispatch(axiosAddNewWord(newWord))
      setAccessMsg('Слово добавлено');
      setAccessToggle(true);
      setTimeout(() => {
        setAccessToggle(false);
      }, 2000);
    } catch(error) {
      setMsg(error.response.data.message);
      setToggle(true);
      setTimeout(() => {
        setToggle(false);
      }, 2000);
    }
  };

  return (
    <div sx={{ mt: 2 }} className={classes.containerOut}>
      <FormControl sx={{ borderRadius: "10px", width: "min-content", padding: "20px" }} >
        <Grid container>
          <Grid sx={{ mx: "auto", my: "auto" }}>
            <Typography align="center" className={classes.transHeader}>Мой Переводчик</Typography>
          </Grid>
        </Grid>

        <Grid container className={classes.wrapper}>
          <Grid
            item
            // xs={12}
            // sm={12}
            // md={4}
            sx={{ mx: "auto" }}
            style={{ textAlign: "center" }}
            marginY={{ xs: 1, sm: 1, md: 1 }}
          >
            <TextareaAutosize
              maxRows={10}
              minRows={4}
              aria-label="maximum height"
              placeholder="Написать текст"
              ref={word_name}
              style={{ width: 300, borderRadius: "10px" }}
              className={classes.wordArea}
            />
            <Grid
              item
              // xs={12}
              // sm={12}
              // md={4}
              sx={{
                mx: "auto",
                // textAlign: { xs: "center", sm: "center", md: "left" },
              }}
              marginBottom={{ xs: 1, sm: 1, md: 3 }}
            >
              <Button
                color="success"
                variant="outlined"
                // size="small"
                onClick={toTranslate}
                className={classes.btnTranslate}
              >
                Перевести
              </Button>
            </Grid>
          </Grid>

          <Grid
            item
            // xs={12}
            // sm={12}
            // md={1}
            // sx={{ mx: "auto", my: "auto" }}
            // style={{ textAlign: "center" }}
            className={classes.btnWrapper}
          >
            <Button
              size="small"
              onClick={toChangeEN}
              style={btnEnColor ? {'backgroundColor' : 'rgb(105 135 133)', 'color': 'white'} : {'backgroundColor' : 'white', 'color': 'black'}} 
              className={classes.btnChange1}
            >
              EN-RU
            </Button>
            <Button
              size="small"
              // variant={btnRuColor ? "contained" : "outlined"}
              onClick={toChangeRU}
              style={btnRuColor ? {'backgroundColor' : 'rgb(105 135 133)', 'color': 'white'} : {'backgroundColor' : 'white', 'color': 'black'}} 
              className={classes.btnChange2}
            >
              RU-EN
            </Button>
          </Grid>

          <Grid
            item
            // xs={12}
            // sm={12}
            // md={4}
            sx={{ mx: "auto" }}
            style={{ textAlign: "center" }}
            marginY={{ xs: 1, sm: 1, md: 1 }}
          >
            <TextareaAutosize
              maxRows={10}
              minRows={4}
              aria-label="maximum height"
              placeholder="Перевод"
              sx={{ mx: "auto", backgroundColor: "red" }}
              defaultValue={word_translate}
              style={{ width: 300, borderRadius: "10px" }}
              className={classes.wordArea}
            />

            <Grid
              item
              // xs={12}
              // sm={12}
              // md={5}
              sx={{
                mx: "auto",
              }}
              marginBottom={{ xs: 1, sm: 1, md: 3 }}
            >
              <Button
                color="success"
                type="submit"
                variant="outlined"
                // size="small"
                // sx={{width: "200px"}}
                onClick={addNewWord}
                className={classes.btnAdd}
              >
                Добавить к себе
              </Button>

            </Grid>

            {toggle && <Alert severity='error' sx={{m: 1, mb: 7}} className={classes.alertBox}>
                {msg}
                </Alert>}
                {accessToggle && <Alert severity='success' sx={{m: 1, mb: 7}} className={classes.alertBoxAdd}>
                {accessMsg}
                </Alert>}
          </Grid>

        </Grid>
      </FormControl>
    </div>
  );
}

export default Translator;
