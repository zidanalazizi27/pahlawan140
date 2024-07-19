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
  width: "auto",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};

const CarouselCustom = () => (
  <>
    <Carousel
      arrows infinite={true}
      autoplay autoplaySpeed={2000}
      className="overflow-hidden"
    >
      <div>
        <img alt="C1" src="/image/C1.png" style={imgStyle} />
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  </>
);
export default CarouselCustom;
