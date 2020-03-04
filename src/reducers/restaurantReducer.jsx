import {
  GET_RESTAURANTS,
  SEARCH_RESTAURANTS,
  SORT_RESTAURANTS,
  SORT_RESTAURANTS_COUNTRY
} from "../actions/types";

const initialState = {
  loading: true,
  restaurants: null,
  filterRestaurant: null,
  lowercase: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload.map(item => ({
          ...item,
          year: item["Top Ten"].substring(0, 4),
          count: parseInt(item["Top Ten"].substring(6))
        })),
        filterRestaurant: action.payload.map(item => ({
          ...item,
          year: item["Top Ten"].substring(0, 4),
          count: parseInt(item["Top Ten"].substring(6))
        })),
        loading: false
      };
    case SEARCH_RESTAURANTS:
      return {
        ...state,
        filterRestaurant: action.payload,
        loading: false
      };
    case SORT_RESTAURANTS:
      return {
        ...state,
        filterRestaurant: action.payload.sort((a, b) => a.count - b.count),
        loading: false
      };
    case SORT_RESTAURANTS_COUNTRY:
      return {
        ...state,
        filterRestaurant: action.payload,
        loading: false
      };

    default:
      return state;
  }
}
