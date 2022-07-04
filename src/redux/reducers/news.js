import {actionTypes} from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_NEWS:
      return [...action.payload];
    default:
      return state;
  }
};
