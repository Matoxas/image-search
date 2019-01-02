import React, { Component } from "react";
import SearchBar from "./searchbar/searchbar";
import ImagesWrapper from "./imagesWrapper/imagesWrapper";
import { imageFetch } from "./imageFetch";

class ImageSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, searchInput: "", images: [] };
  }

  handleInputChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  setLoading = bool => {
    this.setState({ loading: bool });
  };

  setImages = images => {
    this.setState({ images });
  };

  handleSubmit = () => {
    this.setLoading(true);
    imageFetch(this.state.searchInput, this.setImages).then(() => {
      console.log(this.state.images);
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-12">
            <SearchBar
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-9">
            <ImagesWrapper
              loading={this.state.loading}
              images={this.state.images}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageSearch;
