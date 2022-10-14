import { Carousel } from "react-carousel-minimal";
import calousel1 from "../../assets/carousel1.png";
import calousel2 from "../../assets/carousel2.png";

function CarouselComp() {
  const data = [
    {
      image:
      calousel1,
      caption: ""
    },
    {
      image:
        calousel2,
      caption: ""
    },
    {
      image:
        "https://englishwithjeff.com/wp-content/uploads/2016/08/stress.jpg",
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
        height="70vh"
        captionStyle={captionStyle}
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="bottom"
        automatic={true}
        dots={true}
        pauseIconColor="white"
        radius="10px"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="fill"
        thumbnails={false}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "95%",
          maxHeight: "100%",
          objectFit: "cover",
          margin: "80px auto 10px auto"
        }}
      />
    </div>
  );
}

export default CarouselComp;