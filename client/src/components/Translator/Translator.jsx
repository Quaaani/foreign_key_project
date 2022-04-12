import React, { useRef, useState } from 'react';

import axios from 'axios'
import { Button, Container, FormControl, InputLabel, Input, FormHelperText, Grid, TextareaAutosize, TextField } from '@mui/material';

function Translator(props) {


  const translate = useRef();
  const [word, setWord] = useState('');
  const [langpair, setLangpair] = useState('en|ru');

  const toChangeRU = (event) => {
    event.preventDefault();
    setLangpair('ru|en');
  };

  const toChangeEN = (event) => {
    event.preventDefault();
    setLangpair('en|ru');
  };

  const toTranslate = async (event) => {
    event.preventDefault();
    const q = translate.current.value;

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

  return (
    <Container>
      
      <FormControl>
        <Grid container>
        <Grid item>
          <Button onClick={toChangeEN}>
          EN -> RU
          </Button>
          <Button onClick={toChangeRU}>
          RU -> EN
          </Button>
        </Grid>
        <Grid item>
        <TextareaAutosize
          maxRows={4}
          minRows={3}
          aria-label="maximum height"
          placeholder="Написать текст"
          ref={translate} 
          style={{ width: 200 }}
        />

        </Grid>
        <Grid item>
        <TextareaAutosize
          maxRows={4}
          minRows={3}
          aria-label="maximum height"
          
          defaultValue={word}
         
          style={{ width: 200 }}
        />

        {/* {word && <div>{word}</div>} */}

        </Grid>

      </Grid>

      </FormControl>
    
      <button onClick={toTranslate}>Переводчик</button>

      

      </Container>
  );
}

export default Translator;
