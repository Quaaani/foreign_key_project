import React, { useRef, useState } from 'react';

import axios from 'axios'

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
    <div>
      <button onClick={toChangeEN}>С английского на русский</button>
      <button onClick={toChangeRU}>С русского на английский</button>
      <button onClick={toTranslate}>Переводчик</button>
      <input ref={translate} placeholder="Впишите слово" />
      {word && <div>{word}</div>}
    </div>
  );
}

export default Translator;
