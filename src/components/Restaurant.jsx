import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import RestaurantItem from "./RestaurantItem";
import Search from "./Search";
import { getRestaurants } from "../actions/restaurantAction";
import {
  sortRestaurantsByYear,
  sortRestaurantsByCountry
} from "../actions/restaurantAction";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Restaurant = ({
  restaurant: { filterRestaurant, restaurants, loading },
  sortRestaurantsByYear,
  sortRestaurantsByCountry,
  getRestaurants
}) => {
  const [unique, setUnique] = useState([]);
  const [toggle, setToggle] = useState(false);

  const [sort, setSort] = useState({ type: "" });
  const { type } = sort;

  const getUnique = filterRestaurant => {
    if (restaurants) {
      const unique = [...new Set(filterRestaurant.map(item => item.Country))];
      setUnique(unique);
    }
  };

  useEffect(
    () => {
      getUnique(restaurants);
    },
    [filterRestaurant]
  );

  const handleChange = toggled => {
    setToggle(!toggle);
  };

  //changing filter by year
  const onChangee = e => {
    const value = e.target.value;
    setSort({ type: e.target.value });
    console.log(e.target.value);
    sortRestaurantsByYear(value, restaurants);
    if (toggle === false) {
      setToggle(!toggle);
    }
  };

  //changing filter by country
  const onChange = e => {
    const value = e.target.value;
    setSort({ type: e.target.value });
    sortRestaurantsByCountry(value, restaurants);
    if (toggle === false) {
      setToggle(!toggle);
    }
  };

  //showing all restaurants
  const getRestos = () => {
    getRestaurants();
    setToggle(!toggle);
    setSort({ type: "" });
  };

  return (
    <div>
      <div className="row containere">
        <div className="col-md-7  container">
          <Search handleChange={e => handleChange(e)} />
          {toggle && (
            <div onClick={getRestos} className="btn btn-success">
              <strong> Show All Restaurants</strong>
            </div>
          )}
          {!loading &&
            filterRestaurant.length > 0 && (
              <TransitionGroup>
                {filterRestaurant.map((item, i) => (
                  <CSSTransition key={i} timeout={500} classNames="item">
                    <RestaurantItem item={item} />
                  </CSSTransition>
                ))}
              </TransitionGroup>
            )}
          {filterRestaurant &&
            filterRestaurant.length < 1 && (
              <h4 style={{ color: "white" }}>
                Sorry ! Please check your spelling
              </h4>
            )}
        </div>

        <div className="col-md-5">
          <div style={{ position: "fixed" }}>
            <div className="card container backggg">
              <div>
                <span>
                  <strong>Filter Restaurants By Year</strong>
                  <small style={{ display: "block" }}>From Top - Low</small>
                </span>
              </div>
              <form>
                <div>
                  <label htmlFor="rating">2016 </label>
                  <span style={{ float: "right" }}>
                    <input
                      type="radio"
                      name="type"
                      value="2016"
                      id="rating"
                      checked={type === "2016"}
                      onChange={onChangee}
                    />
                  </span>
                </div>
                <div>
                  <label htmlFor="votes">2015 </label>
                  <span style={{ float: "right" }}>
                    <input
                      type="radio"
                      name="type"
                      value="2015"
                      id="votes"
                      checked={type === "2015"}
                      onChange={onChangee}
                    />
                  </span>
                </div>
                <label htmlFor="cost">2014 </label>
                <span style={{ float: "right" }}>
                  <input
                    type="radio"
                    name="type"
                    value="2014"
                    id="cost"
                    checked={type === "2014"}
                    onChange={onChangee}
                  />
                </span>
                <div>
                  <label htmlFor="votes">2013 </label>
                  <span style={{ float: "right" }}>
                    <input
                      type="radio"
                      name="type"
                      value="2013"
                      id="votes"
                      checked={type === "2013"}
                      onChange={onChangee}
                    />
                  </span>
                </div>
                <div>
                  <label htmlFor="votes">2012 </label>
                  <span style={{ float: "right" }}>
                    <input
                      type="radio"
                      name="type"
                      value="2012"
                      id="votes"
                      checked={type === "2012"}
                      onChange={onChangee}
                    />
                  </span>
                </div>
              </form>
            </div>

            <div className="card mt-3 pr-4 pl-4 backggg">
              <span style={{ margin: "6px auto" }}>
                <strong>Filter by Country</strong>
              </span>
              {unique &&
                unique.map(
                  (item, i) =>
                    item === "SG" || item === "Taiwan" || item === "JPN" ? (
                      ""
                    ) : (
                      <form key={i}>
                        <div>
                          <label htmlFor="Indian">
                            <strong>{item}</strong>{" "}
                          </label>
                          <span style={{ float: "right" }}>
                            <input
                              type="radio"
                              value={item}
                              id={item}
                              checked={type === item}
                              onChange={onChange}
                            />
                          </span>
                        </div>
                      </form>
                    )
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  restaurant: state.restaurant
});

export default connect(mapStateToProps, {
  getRestaurants,
  sortRestaurantsByYear,
  sortRestaurantsByCountry
})(Restaurant);
