import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@mui/styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { style } from "@mui/system";
import {Container} from "@mui/material";

const useStyles = makeStyles(() => ({
  wrapper: {
    margin: "0",
    marginTop: "-20px",
    marginBottom: "-50px",
    boxSizing: "border-box",
    padding: "40px",
    backgroundColor: "white"

  },
  item: {
    height: "42vw",
    overflow: "hidden",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
  },
  itemImg: {
    width: "80%",
    margin: "0 auto",
    marginTop: "-5%",
  },
  header: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "10px",
    fontWeight: 700,
    letterSpacing: "1.5px",
  },
  galleryWrapper: {
    paddingTop: "70px"
  }
}));

const images = ['pic-1.jpg', 'pic-2.jpg', 'pic-3.jpg', 'pic-4.jpg', 'pic-5.jpg']


function ImgBlock(props) {
  const styles = useStyles();

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false
  };

  return (
      <div id="gallery" className={styles.galleryWrapper}>
        <h2 className={styles.header}>Галерея</h2>
        <Container maxWidth="lg">
          <div className={styles.wrapper} >
            <Slider {...settings}>

              {images.length > 0 ? images.map(el => (
                  <div className={styles.item}>
                    <img className={styles.itemImg} src={`/img/carousel/${el}`} alt="text" />
                  </div>
              )) : (
                  <div> No Data</div>
              )}


            </Slider>
          </div>
        </Container>
      </div>

  );
}

export default ImgBlock;
