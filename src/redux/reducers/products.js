import _ from 'lodash';
import { FETCH_PRODUCTS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return _.mapKeys(action.payload.data, 'id')
    default:
      state;
  }
}
