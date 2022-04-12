import React, { useRef, useState } from 'react';

import axios from 'axios'
import { Button, Container, FormControl, InputLabel, Input, FormHelperText, Grid, TextareaAutosize, TextField, Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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


          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">              
                <Typography>
                  Выберите язык
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Button size="small" variant="outlined" onClick={toChangeEN}>
                EN -> RU
              </Button>

              <Button size="small" variant="outlined" onClick={toChangeRU}>
                RU -> EN
              </Button>

            </AccordionDetails>

          </Accordion>

            <Grid item
              xs={12}
              sm={6}
              md={3}
              sx={{ mx: 'auto'}}
            >
              {/* <Button size="small" variant="outlined" onClick={toChangeEN}>
                EN -> RU
              </Button> */}
            </Grid>
            <Grid item
              xs={12}
              sm={6}
              md={3}
              sx={{ mx: 'auto'}}
            >
              {/* <Button size="small" variant="outlined" onClick={toChangeRU}>
                RU -> EN
              </Button> */}
            </Grid>  

           </Grid>
          {/* </Grid> */}
      <Grid container
      >
        <Grid item
          xs={12}
          sm={6}
          md={4}
          sx={{ mx: 'auto'}}
          marginY={{xs: 1, sm: 1, md: 1}}
        >
        <TextareaAutosize
          maxRows={10}
          minRows={6}
          aria-label="maximum height"
          placeholder="Написать текст"
          ref={translate} 
          style={{ width: 200 }}
        />
          <Button color="success" variant="outlined" size="small" onClick={toTranslate} sx={{ mx: 'auto'}}>
          Перевести
        </Button>
        </Grid>
        <Grid item
          xs={12}
          sm={6}
          md={4}
          sx={{ mx: 'auto'}}
          marginY={{xs: 1, sm: 1, md: 1}}          
        >
        <TextareaAutosize
          maxRows={10}
          minRows={6}
          aria-label="maximum height"
          placeholder='Перевод'
          sx={{ mx: 'auto', backgroundColor: 'red',}}
          defaultValue={word}
         
          style={{ width: 200 }}
        />
        </Grid>

      </Grid>
      {/* <Grid item
        xs={6}
        sm={6}
        md={8}
        sx={{ mx: 'auto'}}
      >
        <Button color="success" variant="outlined" size="small" onClick={toTranslate} sx={{ mx: 'auto'}}>
          Перевести
        </Button>
      </Grid> */}
      </FormControl>
    




      </Container>
  );
}

export default Translator;
