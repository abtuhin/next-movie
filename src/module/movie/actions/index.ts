import { GET_MOVIES_FAILED, GET_MOVIES_PENDING, GET_MOVIES_SUCCESS } from "../constants";
import { AnyAction } from 'redux';
import axios from "axios";
import { RootState } from '../../../store';
import { ThunkAction } from 'redux-thunk';

export const getMovies = (): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
    dispatch({type: GET_MOVIES_PENDING});
    try {
      const res = await axios.get(`/users/login`);
      dispatch({type: GET_MOVIES_SUCCESS, payload: res.data.data});
      return res;
    } catch (e: unknown) {
      dispatch({type: GET_MOVIES_FAILED}); //TODO: dispatch error
      throw new Error(JSON.stringify(e));
    }
};