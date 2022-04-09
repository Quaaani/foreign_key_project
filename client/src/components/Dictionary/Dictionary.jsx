import { Card, Grid } from "@mui/material";


function Dictionary ({dictionary}) {
  
  return (
    <Grid item 
      xs={6}
      sm={6}
      md={12}
      marginY={{xs: 2, sm: 2, md: 4}}
      sx={{ mx: 'auto'}} 
    >
      {dictionary?.word_name}
      {dictionary?.word_transcription}
      {dictionary?.word_translate}
      </Grid>

 

    

    
  )
}

export default Dictionary;
