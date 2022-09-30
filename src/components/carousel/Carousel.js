import { Carousel } from "react-carousel-minimal";

function CarouselComp() {
  const data = [
    {
      image:
        "https://c4.wallpaperflare.com/wallpaper/297/288/1009/5bd320d590bcf-wallpaper-preview.jpg",
      caption: ""
    },
    {
      image:
        "https://c4.wallpaperflare.com/wallpaper/677/667/795/united-arab-emirates-dubai-reflection-on-midnight-4k-ultra-hd-desktop-wallpapers-for-computers-laptop-tablet-and-mobile-phones-3840%C3%972400-wallpaper-preview.jpg",
      caption: ""
    },
    {
      image:
        "https://c4.wallpaperflare.com/wallpaper/974/932/861/dubai-united-arab-emirates-city-and-architecture-marina-night-reflection-ultra-hd-wallpaper-for-desktop-mobile-phones-and-laptops-3840%C3%972400-wallpaper-preview.jpg",
      caption: ""
    }
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold"
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold"
  };

  return (
    <div>
      <Carousel
        data={data}
        time={3000}
        width="100%"
        height="80vh"
        captionStyle={captionStyle}
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={false}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "100%",
          maxHeight: "80vh"
        }}
      />
    </div>
  );
}

export default CarouselComp;