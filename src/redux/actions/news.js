import {actionTypes} from './actionTypes';

export const addNews = news => {
  return {
    type: actionTypes.ADD_NEWS,
    news,
  };
};
