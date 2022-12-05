import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { apiSlice } from "../features/dogs/dogsApiSlice";

// redux store
export const store = configureStore({
  reducer: {
    // combine reducer automatically object
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// export store dispatch types
export type AppDispatch = typeof store.dispatch;
// export redux root state type
export type RootState = ReturnType<typeof store.getState>;

export default store;
