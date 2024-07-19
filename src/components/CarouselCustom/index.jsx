import React from "react";
import { Carousel } from "antd";
import useWindowDimensions from "../../hooks/useWindowDimensions.js";

const CarouselCustom = () => {
  const { width } = useWindowDimensions();

  const imgStyle = {
    height: width > 768 ? "100vh" : width > 480 ? "60vh" : "40vh",
    width: "100vw",
  };

  return (
    <>
      <Carousel
        arrows
        infinite={true}
        autoplay
        autoplaySpeed={3000}
        className="overflow-hidden"
      >
        <div>
          <img alt="C1" src="/image/C1.png" style={imgStyle} />
        </div>
        <div>
          <img alt="C2" src="/image/C2.png" style={imgStyle} />
        </div>
        <div>
          <img alt="C3" src="/image/C3.png" style={imgStyle} />
        </div>
        <div>
          <img alt="C4" src="/image/C4.png" style={imgStyle} />
        </div>
      </Carousel>
    </>
  );
};

export default CarouselCustom;
