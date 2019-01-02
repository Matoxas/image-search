import React, { Component } from "react";
import SearchBar from "./searchbar/searchbar";
import ImagesWrapper from "./imagesWrapper/imagesWrapper";
import { imageFetch } from "./imageFetch";
import Pagination from "./pagination";
import "./imageSearch.css";

class ImageSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      searchInput: "",
      images: [],
      page: 1,
      totalPages: 1
    };
  }

  handleInputChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  handlePageUp = e => {
    if (this.state.page < this.state.totalPages) {
      this.setState(
        {
          page: this.state.page + 1
        },
        this.handleImagesFetch
      );
    }
  };

  handlePageDown = e => {
    if (this.state.page > 1) {
      this.setState(
        {
          page: this.state.page - 1
        },
        this.handleImagesFetch
      );
    }
  };

  setLoading = bool => {
    this.setState({ loading: bool });
  };

  setImages = (images, totalPages) => {
    this.setState({
      totalPages,
      images
    });
  };

  handleSearchSubmit = () => {
    this.setState({ page: 1 });
    this.handleImagesFetch();
  };

  handleImagesFetch = () => {
    this.setLoading(true);
    imageFetch(this.state.searchInput, this.state.page, this.setImages).then(
      () => {
        this.setLoading(false);
      }
    );
  };

  render() {
    return (
      <div className="container imageSearch">
        <div className="row mt-4">
          <div className="col-12">
            <SearchBar
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSearchSubmit}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-9">
            <ImagesWrapper
              loading={this.state.loading}
              images={this.state.images}
              className={"mb-3"}
            />
            {this.state.totalPages > 1 && (
              <Pagination
                className={"mb-3"}
                page={this.state.page}
                pageUp={this.handlePageUp}
                pageDown={this.handlePageDown}
                totalPages={this.state.totalPages}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageSearch;
