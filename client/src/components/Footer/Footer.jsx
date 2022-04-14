import React from 'react';
import {Box, Container, Grid, Link} from '@mui/material';
import { makeStyles } from '@mui/styles';

// Стили
import style from './Footer.module.css'

const useStyles = makeStyles(() => ({
  myLink: {
    marginBottom: "8px",
    fontFamily: "Roboto"
  },
  curLink: {
    fontFamily: "Roboto",
    textDecoration: "none"
  },
  foot: {
    marginTop: "auto"
  }


}))

function Footer(props) {

  const styles = useStyles()

  return (
    <footer className={styles.foot}>
      <Box
        px={{ xs: 3, sm: 3 }}
        py={{ xs: 2, sm: 2 }}
        bgcolor="#265351"
        color="white"
      >
        <Container maxWidth="lg">
          {/*<Grid container spacing={5}>*/}
          {/*  <Grid item xs={12} sm={4}>*/}
          {/*    <Box className={styles.myLink} borderBottom={1}>Help</Box>*/}
          {/*    <Box className={styles.myLink}>*/}
          {/*      <Link className={styles.curLink} href="/" color="inherit"*/}
          {/*      >*/}
          {/*        Contact*/}
          {/*      </Link>*/}
          {/*    </Box>*/}
          {/*    <Box className={styles.myLink}>*/}
          {/*      <Link className={styles.curLink} href="/" color="inherit">*/}
          {/*        Support*/}
          {/*      </Link>*/}
          {/*    </Box>*/}
          {/*    <Box className={styles.myLink}>*/}
          {/*      <Link className={styles.curLink} href="/" color="inherit">*/}
          {/*        Privacy*/}
          {/*      </Link>*/}
          {/*    </Box>*/}
          {/*  </Grid>*/}
          {/*  <Grid item xs={12} sm={4}>*/}
          {/*    <Box className={styles.myLink} borderBottom={1}>Account</Box>*/}
          {/*    <Box className={styles.myLink}>*/}
          {/*      <Link className={styles.curLink} href="/" color="inherit">*/}
          {/*        Login*/}
          {/*      </Link>*/}
          {/*    </Box>*/}
          {/*    <Box className={styles.myLink}>*/}
          {/*      <Link className={styles.curLink} href="/" color="inherit">*/}
          {/*        Register*/}
          {/*      </Link>*/}
          {/*    </Box>*/}
          {/*  </Grid>*/}
          {/*  <Grid item xs={12} sm={4}>*/}
          {/*    <Box className={styles.myLink} borderBottom={1}>Messages</Box>*/}
          {/*    <Box className={styles.myLink}>*/}
          {/*      <Link className={styles.curLink} href="/" color="inherit">*/}
          {/*        Backup*/}
          {/*      </Link>*/}
          {/*    </Box>*/}
          {/*    <Box className={styles.myLink}>*/}
          {/*      <Link className={styles.curLink} href="/" color="inherit">*/}
          {/*        History*/}
          {/*      </Link>*/}
          {/*    </Box>*/}
          {/*    <Box>*/}
          {/*      <Link className={styles.curLink} href="/" color="inherit">*/}
          {/*        Roll*/}
          {/*      </Link>*/}
          {/*    </Box>*/}
          {/*  </Grid>*/}
          {/*</Grid>*/}
          <Box className={styles.curLink} textAlign="center" pt={{ xs: 2, sm: 2 }} pb={{ xs: "10px", sm: "10px" }}>
            ForeignKey &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
