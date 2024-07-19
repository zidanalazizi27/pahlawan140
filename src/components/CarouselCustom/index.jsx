import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  margin: 0,
  height: "100vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const imgStyle = {
  height: "100vh",
  width: "100vw",
  // display: "block",
  // marginLeft: "auto",
  // marginRight: "auto",
};

const CarouselCustom = () => (
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
export default CarouselCustom;
