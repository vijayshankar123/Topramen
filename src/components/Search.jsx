import React, { useState } from "react";
import { connect } from "react-redux";
import { searchRestaurants, getRestaurants } from "../actions/restaurantAction";
const Search = ({
  handleChange,
  getRestaurants,
  restaurants,
  searchRestaurants
}) => {
  const [search, setSearch] = useState("");

  //onchange for search engine
  const onChange = e => {
    if (e.target.value === "") {
      getRestaurants();
    }
    setSearch(e.target.value);
  };

  //submission of search
  const onSubmit = e => {
    e.preventDefault();
    searchRestaurants(search, restaurants);
    handleChange(true);
    setSearch("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <span className="input-group-text">
          <div className="input-group input-group-lg">
            <input
              style={{ background: "#cbc7c7" }}
              type="text"
              name="search"
              className="form-control"
              placeholder="Search Restaurants..."
              value={search}
              onChange={onChange}
            />
          </div>
        </span>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  restaurants: state.restaurant.restaurants
});

export default connect(mapStateToProps, { getRestaurants, searchRestaurants })(
  Search
);
