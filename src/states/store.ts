import { combineReducers, createStore } from "redux";
import tasksReducer from "./tasks/reducers";

export default function initStore(states = {}) {
  const reducers = combineReducers(tasksReducer);
  return createStore(reducers, states);
}