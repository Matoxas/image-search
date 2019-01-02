import React from "react";
import "./imagesWrapper.css";

const imageBackground = src => ({
  backgroundImage: "url(" + src + ")",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center"
});

const imagesWrapper = props => {
  return (
    <div className="row images-wrapper">
      {props.images.map((image, index) => {
        return (
          <div key={index} className="col-12 col-sm-6 col-md-4 image-spacing">
            <div
              style={imageBackground(image)}
              className="col-12 image-wrapper"
            />
          </div>
        );
      })}
    </div>
  );
};

export default imagesWrapper;
