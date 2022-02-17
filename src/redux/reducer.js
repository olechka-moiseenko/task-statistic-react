import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  getCountriesAction,
  filterCountries,
  getOneCountryAction,
  modalAction,
} from "./actions";

const allCountriesReducer = createReducer([], {
  [getCountriesAction.fulfilled]: (state, { payload }) => {
    return (state = payload.Countries);
  },
});

const getOneCountryReducer = createReducer([], {
  [getOneCountryAction.fulfilled]: (state, { payload }) => (state = payload),
});

const filteredCountriesReducer = createReducer([], {
  [filterCountries]: (state, { payload }) => {
    console.log(payload);
    return (state = payload);
  },
});

const modalReducer = createReducer(false, {
  [modalAction]: (state, { payload }) => {
    return (state = payload);
  },
});

export const reducers = combineReducers({
  allCountriesReducer,
  filteredCountriesReducer,
  getOneCountryReducer,
  modalReducer,
});