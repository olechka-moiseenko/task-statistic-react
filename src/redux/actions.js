import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = "https://api.covid19api.com";

export const getCountriesAction = createAsyncThunk(
  "countries/get",
  async () => {
    const response = fetch(`${baseURL}/summary`)
      .then((respose) => {
        return respose.json();
      })
      .then((data) => {
        return data;
      });
    return response;
  }
);

export const getOneCountryAction = createAsyncThunk(
  "countries/getOne",
  async (country) => {
    const response = fetch(`${baseURL}/total/country/${country}`)
      .then((respose) => {
        return respose.json();
      })
      .then((data) => {
        return data;
      });
    return response;
  }
);

export const filterCountries = createAction(
  ("countries/filter",
  (countries) => {
    console.log(countries);
    return { payload: [...countries] };
  })
);

export const modalAction = createAction(
  ("modal/toggle",
  (boolean) => {
    return { payload: boolean };
  })
);