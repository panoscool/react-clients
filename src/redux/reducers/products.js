import _ from "lodash";
import { FETCH_PRODUCTS } from "../actions";

const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return _.mapKeys(action.payload.data, "id");
    default:
      return state;
  }
};

export default productsReducer;
