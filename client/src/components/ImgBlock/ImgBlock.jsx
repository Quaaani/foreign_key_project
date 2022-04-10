import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@mui/styles";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { style } from "@mui/system";

const useStyles = makeStyles(() => ({
  wrapper: {
    margin: "40px 0",
    boxSizing: "border-box",
    padding: "40px",
    backgroundColor: "rgba(30, 144, 255, 0.4)",
    "box-shadow": "0px 0px 20px 40px rgba(30, 144, 255, 0.35)"

  },
  item: {
    height: "42vw",
    overflow: "hidden",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
  },
  itemImg: {
    width: "90%",
    margin: "0 auto",
    marginTop: "-5%",
  }
}));

const images = ['https://nalogcons78.ru/img/23864060.jpg', 'https://jourcsu.ru/wp-content/uploads/2018/01/howust.jpg', 'https://www.estudy.ru/upload/0102/3.png', 'https://perspektiva-klab.ru/wp-content/uploads/2021/07/%D0%91%D0%B5%D0%B7-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-1-3.jpg', 'https://kuda-mo.ru/uploads/52dea95b0c2ffee78ba3163f067b13b7.jpeg']


function ImgBlock(props) {
  const styles = useStyles();

  const settings = {
    dots: true,
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
    <div className={styles.wrapper}>
      <Slider {...settings}>

        {images.length > 0 ? images.map(el => (
          <div className={styles.item}>
            <img className={styles.itemImg} src={el} alt="text" />
          </div>
        )) : (
          <div> No Data</div>
        )}

        
      </Slider>
    </div>
  );
}

export default ImgBlock;
