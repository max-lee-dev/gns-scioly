import React from "react";
import { Box } from "@chakra-ui/react";
import { Slide } from "react-slideshow-image";
import slide1 from "./images/slide1.png";
import slide2 from "./images/slide2.png";
import slide3 from "./images/slide3.png";
import slide4 from "./images/slide4.png";
import slide5 from "./images/slide5.png";
import slide6 from "./images/slide6.png";
import yahao1 from "./images/yahao1.JPG";
import yahao2 from "./images/yahao2.jpg";
import yahao3 from "./images/yahao3.jpg";
import yahao4 from "./images/yahao4.JPG";
import "react-slideshow-image/dist/styles.css";




function Slideshow({type}) {
  let finalImages;
  const sciolyImages = [
    {
      url: slide1,
      caption: "Slide 1",
    },
    {
      url: slide2,
      caption: "Slide 2",
    },
    {
      url: slide3,
      caption: "Slide 3",
    },
    {
      url: slide4,
      caption: "Slide 4",
    },
    {
      url: slide5,
      caption: "Slide 5",
    },
    {
      url: slide6,
      caption: "Slide 6",
    },
  ];

  const yahaoImages = [
    {
      url: yahao1,
      caption: "Slide 1",
    },
    {
      url: yahao2,
      caption: "Slide 2",
    },
    {
      url: yahao3,
      caption: "Slide 3",
    },
    {
      url: yahao4,
      caption: "Slide 4",
    },
  ];

  if (type === "scioly") {
    finalImages = sciolyImages;
  } else {
    finalImages = yahaoImages;
  }

  const divStyle = {
    paddingTop: "56.25%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    margin: "auto",
    borderRadius: "15px",
  };
  return (
    <Box className="slide-container">
      <Slide>
        {finalImages.map((each, index) => (
          <div key={index} className="each-slide">
            <div
              style={{
                ...divStyle,
                backgroundImage: `url(${each.url})`,
              }}
            ></div>
          </div>
        ))}
      </Slide>
    </Box>
  );
}

export default Slideshow;