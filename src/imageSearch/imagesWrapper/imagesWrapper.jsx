import React from "react";
import "./imagesWrapper.css";

const imageBackground = src => ({
  backgroundImage: "url(" + src + ")",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center"
});

const imagesWrapper = props => {
  if (props.loading) {
    return (
      <div className="row justify-content-center">
        <img src="/three-dots.svg" alt="loading" />
      </div>
    );
  }

  if (props.images.length === 0 && props.page !== 0) {
    return (
      <div className="row justify-content-center">
        <p>Nothing to show. Try different search.</p>
      </div>
    );
  }
  return (
    <div className={"row images-wrapper " + props.className}>
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
