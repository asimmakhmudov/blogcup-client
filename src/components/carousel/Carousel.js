import { Carousel } from "react-carousel-minimal";
import calousel1 from "../../assets/carousel1.png";
import calousel2 from "../../assets/carousel2.png";
import calousel3 from "../../assets/carousel3.png";

function CarouselComp() {
  const data = [
    {
      image: calousel1,
      caption: ""
    },
    {
      image: calousel2,
      caption: ""
    },
    {
      image: calousel3,
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
        height="90vh"
        captionStyle={captionStyle}
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        // radius="10px"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="fill"
        thumbnails={false}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "100%",
          maxHeight: "100%",
          margin: "60px auto 10px auto"
        }}
      />
    </div>
  );
}

export default CarouselComp;