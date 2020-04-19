import { createStore, combineReducers } from "redux";
import { LEADERS } from "../resources/leaders";
import { COMMENTS } from "../resources/comments";
import { PROMOTIONS } from "../resources/promotions";
import { DISHES } from "../resources/dishes";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      leaders: LEADERS,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      dishes: DISHES,
    })
  );

  return store;
};
