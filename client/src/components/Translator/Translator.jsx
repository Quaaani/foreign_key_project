import React, { useRef, useState } from 'react';

import axios from 'axios'
import { Button, Container, FormControl, InputLabel, Input, FormHelperText, Grid, TextareaAutosize, TextField, Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch } from 'react-redux';
import { axiosAddNewWord } from '../../redux/asyncActionCreators/dictionariesAAC';

function Translator() {

  const dispatch = useDispatch();
  const word_name = useRef();
  const [word_translate, setWord] = useState('');
  const [btnEnColor, setEnBtnColor] = useState(true);
  const [btnRuColor, setRuBtnColor] = useState(false);
  const [langpair, setLangpair] = useState('en|ru');


  const toChangeRU = (event) => {
    event.preventDefault();
    setLangpair('ru|en');
    setRuBtnColor(!btnRuColor);
    setEnBtnColor(false);
  };

  const toChangeEN = (event) => {
    event.preventDefault();
    setLangpair('en|ru');
    setEnBtnColor(!btnEnColor);
    setRuBtnColor(false);
  };

  const toTranslate = async (event) => {
    event.preventDefault();
    const q = word_name.current.value;

    const options = {
      method: 'GET',
      url: 'https://translated-mymemory---translation-memory.p.rapidapi.com/api/get',
      params: { langpair, q, mt: '1', onlyprivate: '0', de: 'a@b.c' },
      headers: {
        'X-RapidAPI-Host':
          'translated-mymemory---translation-memory.p.rapidapi.com',
        'X-RapidAPI-Key': '466b582432msh4d47608325c8ec9p1d585bjsnee90b9688688',
      },
    };

    try {
      const response = await axios.request(options);
      setWord(response.data.responseData.translatedText);
    } catch (error) {
      console.log('error =>', { ...error });
    }
  };


  const addNewWord = async (event) => {
    event.preventDefault();
    const newWord = {
      word_name: word_name.current.value.toLowerCase(),
      word_translate: word_translate.toLowerCase(),
    }
    try {
      await dispatch(axiosAddNewWord(newWord))
    } catch(error) {
      console.log('Error ADD WORD', {...error})
    }
  }

  return (
    <Container
        sx={{mt: 2}}
    >
      
      <FormControl
        sx={{border: 'solid', borderRadius: '10px'}}
      >

        <Grid container>
          <Grid
          sx={{ mx: 'auto', my: 'auto'}}
          >
            <Typography align="center">
              Мой Переводчик
            </Typography>
          </Grid>

        </Grid>

        <Grid container
        >

          <Grid item
            xs={12}
            sm={12}
            md={4}
            sx={{ mx: 'auto'}}
            style={{textAlign: 'center' }}
            marginY={{xs: 1, sm: 1, md: 1}}
          >
            <TextareaAutosize
              maxRows={10}
              minRows={6}
              aria-label="maximum height"
              placeholder="Написать текст"
              ref={word_name} 
              style={{ width: 300, borderRadius: '10px' }}
            />
        </Grid>

        <Grid item
          xs={12}
          sm={12}
          md={1}
          sx={{ mx: 'auto', my: 'auto'}}
          style={{textAlign: 'center' }}
        >
          <Button size="small" onClick={toChangeEN} variant = {btnEnColor ? "contained" : "outlined"}>
              EN-RU
          </Button>
          <Button size="small" variant = {btnRuColor ? "contained" : "outlined"} onClick={toChangeRU}>
              RU-EN
          </Button>
        </Grid>
            
        <Grid item
          xs={12}
          sm={12}
          md={4}
          sx={{ mx: 'auto'}}
          style={{textAlign: 'center' }}
          marginY={{xs: 1, sm: 1, md: 1}}          
        >
          <TextareaAutosize
            maxRows={10}
            minRows={6}
            aria-label="maximum height"
            placeholder='Перевод'
            sx={{ mx: 'auto', backgroundColor: 'red',}}
            defaultValue={word_translate}
            style={{ width: 300, borderRadius: '10px' }}
          />
        </Grid>

      <Grid container>
        <Grid item
          xs={12}
          sm={12}
          md={4}
          sx={{ mx: 'auto', textAlign: {xs: 'center', sm: 'center', md: 'left'}}}
          marginBottom={{xs: 1, sm: 1, md: 3}}
        >
          <Button color="success" variant="outlined" size="small" onClick={toTranslate}>
            Перевести
          </Button>
        </Grid>
        <Grid item
          xs={12}
          sm={12}
          md={5}
          sx={{ mx: 'auto', textAlign: {xs: 'center', sm: 'center', md: 'right'}}}
          marginBottom={{xs: 1, sm: 1, md: 3}}
        >
          <Button color="success" type='submit' variant="outlined" size="small" onClick={addNewWord}>
            Добавить к себе
          </Button>
        </Grid>
      </Grid>
      </Grid>
      </FormControl>
    




      </Container>
  );
}

export default Translator;
