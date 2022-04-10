import { Button, Card, Grid, IconButton, Tooltip} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import * as React from 'react';

function Dictionary ({dictionary}) {
  
  return (

    <Grid container
    >
       <Tooltip title={dictionary?.word_example}>
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
      <Grid item xs={1} sx={{ mx: 'auto', my: 'auto'}}>
      <IconButton >
        <DeleteForeverIcon />
      </IconButton>
    </Grid>

    </Grid>
 

    

    
  )
}

export default Dictionary;
