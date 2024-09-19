import React from "react";
import { Carousel } from "antd";
import useWindowDimensions from "../../hooks/useWindowDimensions.js";

const CarouselCustom = () => {
  const { width } = useWindowDimensions();

  const imgStyle = {
    height: width > 768 ? "100vh" : width > 480 ? "60vh" : "40vh",
    // width: "100vw",
  };

  return (
    <>
      <Carousel
        effect="fade"
        speed={2000}
        arrows
        infinite={true}
        autoplay
        autoplaySpeed={2500}
        className="overflow-hidden"
      >
        <div>
          <img alt="C1" src="/image/Carousel/C1.svg" style={imgStyle} />
        </div>
        <div>
          <img alt="C2" src="/image/Carousel/C2.svg" style={imgStyle} />
        </div>
        <div>
          <img alt="C3" src="/image/Carousel/C3.svg" style={imgStyle} />
        </div>
        <div>
          <img alt="C4" src="/image/Carousel/C4.svg" style={imgStyle} />
        </div>
      </Carousel>
    </>
  );
};

export default CarouselCustom;
