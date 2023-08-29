import React from "react";
import { Carousel } from "antd";
import type { DotPosition } from "antd/es/carousel";
import style from "./style.module.scss";

function Slider() {
  const contentStyle: React.CSSProperties = {
    height: "50vh",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Carousel effect="fade" dotPosition="right" className={style.slider}>
      <div>
        <h3 style={contentStyle}>1</h3>
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
  );
}

export default Slider;
