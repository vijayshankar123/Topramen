import {
  GET_RESTAURANTS,
  ERROR,
  SEARCH_RESTAURANTS,
  SORT_RESTAURANTS,
  SORT_RESTAURANTS_COUNTRY
} from "./types";
import axios from "axios";

//getting all restaurants
export const getRestaurants = () => {
  return async dispatch => {
    try {
      const res = await axios.get("http://starlord.hackerearth.com/TopRamen");

      dispatch({
        type: GET_RESTAURANTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: ERROR });
    }
  };
};

//sort
export const sortRestaurantsByYear = (field, restaurants) => {
  return async dispatch => {
    try {
      const yearBy = restaurants.filter(item => item.year === field);

      dispatch({
        type: SORT_RESTAURANTS,
        payload: yearBy
      });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.message });
    }
  };
};

export const sortRestaurantsByCountry = (field, restaurants) => {
  return async dispatch => {
    try {
      const countryBy = restaurants.filter(item => item.Country === field);
      dispatch({
        type: SORT_RESTAURANTS_COUNTRY,
        payload: countryBy
      });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.message });
    }
  };
};

export const searchRestaurants = (field, restaurants) => {
  return async dispatch => {
    try {
      const search = restaurants.filter(
        item => item.Brand.toLowerCase() === field.toLowerCase()
      );
      dispatch({
        type: SEARCH_RESTAURANTS,
        payload: search
      });
    } catch (err) {
      dispatch({ type: ERROR, payload: err.message });
    }
  };
};
