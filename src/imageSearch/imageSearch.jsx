import React, { Component } from "react";
import SearchBar from "./searchbar/searchbar";
import ImagesWrapper from "./imagesWrapper/imagesWrapper";
import { imageFetch } from "./imageFetch";
import Pagination from "./pagination";
import SearchHistory from "./searchHistory";
import "./imageSearch.css";

class ImageSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      searchInput: "",
      savedInputs: [],
      images: [],
      page: 0,
      totalPages: 1
    };
  }

  handleInputChange = e => {
    this.setState({
      searchInput: e.target.value
    });
  };

  addToSaved = () => {
    const { searchInput: item } = this.state;
    if (item.length > 0) {
      const filteredItems = this.state.savedInputs.filter(
        input => input.toLowerCase() !== item.toLowerCase()
      );
      const updatedItems = [item, ...filteredItems];
      this.setState({
        savedInputs: updatedItems
      });
    }
  };

  removeSaved = (e, item) => {
    e.preventDefault();
    const updatedItems = this.state.savedInputs.filter(input => input !== item);
    this.setState({
      savedInputs: updatedItems
    });
  };

  handleSavedClick = item => {
    this.setState(
      {
        searchInput: item
      },
      this.handleSearchSubmit
    );
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

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleSearchSubmit();
    }
  };

  handleSearchSubmit = () => {
    this.setState({ page: 1 }, this.handleImagesFetch);
  };

  handleImagesFetch = () => {
    this.setLoading(true);
    const modifiedInput = this.state.searchInput.replace(" ", "+");
    imageFetch(modifiedInput, this.state.page, this.setImages).then(() => {
      this.setLoading(false);
    });
  };

  render() {
    return (
      <div className="container imageSearch">
        <div className="row mt-4">
          <div className="col-12 ">
            <SearchBar
              searchInput={this.state.searchInput}
              handleInputChange={this.handleInputChange}
              handleKeyPress={this.handleKeyPress}
              handleSubmit={this.handleSearchSubmit}
              addToSaved={this.addToSaved}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-9">
            <ImagesWrapper
              page={this.state.page}
              loading={this.state.loading}
              images={this.state.images}
              className={"mb-2"}
            />
            {this.state.totalPages > 1 && !this.state.loading && (
              <Pagination
                className={"mb-4 mt-2"}
                page={this.state.page}
                pageUp={this.handlePageUp}
                pageDown={this.handlePageDown}
                totalPages={this.state.totalPages}
              />
            )}
          </div>
          <div className="col-md-3 mb-2 order-first order-md-12">
            <SearchHistory
              removeSaved={this.removeSaved}
              handleSavedClick={this.handleSavedClick}
              savedInputs={this.state.savedInputs}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageSearch;
