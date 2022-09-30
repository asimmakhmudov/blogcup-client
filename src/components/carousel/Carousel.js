import React from "react";
import CarouselSlider from "react-carousel-slider";

let h1Style = {
  textAlign: "center",
  top: "50%",
  width: "auto",
  background: "transparent",
  fontSize: "2em",
  fontFamily: "Arial",
};

let element1 = (
  <div className="imtxt">
    <img src="https://c4.wallpaperflare.com/wallpaper/297/288/1009/5bd320d590bcf-wallpaper-preview.jpg" />
    <p style={h1Style}>Works Hard</p>
  </div>
);

let element2 = (
  <div id="imtxt2" className="imtxt">
    <img src="https://c4.wallpaperflare.com/wallpaper/677/667/795/united-arab-emirates-dubai-reflection-on-midnight-4k-ultra-hd-desktop-wallpapers-for-computers-laptop-tablet-and-mobile-phones-3840%C3%972400-wallpaper-preview.jpg" />
    <p style={h1Style}>Awesome Skills</p>
  </div>
);

let element3 = (
  <div className="imtxt">
    <img src="https://c4.wallpaperflare.com/wallpaper/310/473/125/5bd32abb3f77b-wallpaper-preview.jpg" />
    <p style={h1Style}>Fast Learner</p>
  </div>
);

let slideCpnt = [element1, element2, element3];

let sliderBoxStyle = {
  width: "100%",
  background: "transparent"
};

let itemsStyle = {
  margin: "0px 0px",
  padding: "0px",
  width: "100%",
  maxWith: "100vh",
  height: "100%",
  objectFit: "cover",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

let buttonSetting = {
  placeOn: "bottom-beneath",
  hoverEvent: true,
  style: {
    left: {
      margin: "0px 0px 0px 10px"
    },
    right: {
      margin: "0px 10px 0px 0px"
    }
  }
};

let manner = {
  autoSliding: { interval: "4s" }
};

const Carousel = () => (
  <CarouselSlider
    slideCpnts={slideCpnt}
    manner={manner}
    buttonSetting={buttonSetting}
    sliderBoxStyle={sliderBoxStyle}
    itemsStyle={itemsStyle}
  />
);

export default Carousel;
