import { Action, configureStore } from '@reduxjs/toolkit'
import thunk, { ThunkAction } from 'redux-thunk'
import rootReducer from './rootReducer'
import logger from 'redux-logger';
import { createWrapper } from "next-redux-wrapper";


export const initStore = () => configureStore({
  reducer: rootReducer,
  middleware: [thunk],
})


type Store = ReturnType<typeof initStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const store = createWrapper(initStore, { debug: true });
export default store;