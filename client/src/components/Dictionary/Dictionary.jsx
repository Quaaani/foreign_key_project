import { Button, Card, Grid, IconButton, Tooltip} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import * as React from 'react';
import { useDispatch } from "react-redux";
import { axiosInitDictionaryAAC, axiosDeleteWord } from "../../redux/asyncActionCreators/dictionariesAAC";

function Dictionary ({dictionary}) {
  console.log(dictionary.id)
  const dispatch = useDispatch()

  const deleteWord = async (event) => {
    event.preventDefault();
    try {
      await dispatch(axiosDeleteWord(event.target.dataset.id))
      await dispatch(axiosInitDictionaryAAC())
    } catch(error) {
      console.log('Error DELETE WORD', {...error})
    }
  }
  
  return (

    <Grid container
    >
       <Tooltip enterDelay={500} leaveDelay={200} title={dictionary?.word_example}>
        <Grid item xs={3} sx={{ mx: 'auto', my: 'auto'}}>
          {dictionary?.word_name}
        </Grid>
      </Tooltip>
      <Grid item xs={3} sx={{ mx: 'auto', my: 'auto'}}>
        {dictionary?.word_transcription}
      </Grid>
      <Tooltip title={dictionary?.word_transExample}>
        <Grid item xs={3} sx={{ mx: 'auto', my: 'auto'}}>
          {dictionary?.word_translate}
        </Grid>
      </Tooltip>
      <Grid enterDelay={500} leaveDelay={200} item xs={1} sx={{ mx: 'auto', my: 'auto'}}>
        <Button onClick={deleteWord} color="error" data-id={dictionary.id}>
          Удалить
          {/* <IconButton >
          <DeleteForeverIcon />
          </IconButton> */}
        </Button>
      
    </Grid>

    </Grid>
 

    

    
  )
}

export default Dictionary;
