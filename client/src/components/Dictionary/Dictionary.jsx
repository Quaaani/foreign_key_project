import { Button, Card, Grid, IconButton} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import * as React from 'react';

function Dictionary ({dictionary}) {
  
  return (

    <Grid container
    >
      <Grid item xs={3} sx={{ mx: 'auto', my: 'auto'}}>
        {dictionary?.word_name}
      </Grid>
      <Grid item xs={3} sx={{ mx: 'auto', my: 'auto'}}>
        {dictionary?.word_transcription}
      </Grid>
      <Grid item xs={3} sx={{ mx: 'auto', my: 'auto'}}>
        {dictionary?.word_translate}
      </Grid>
      <Grid item xs={3} sx={{ mx: 'auto', my: 'auto'}}>
      <IconButton
               
               
               
            >
              <DeleteForeverIcon />
            </IconButton>
      </Grid>
    </Grid>
 

    

    
  )
}

export default Dictionary;
