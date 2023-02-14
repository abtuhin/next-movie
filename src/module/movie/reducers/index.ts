import { AnyAction } from 'redux';
import { GET_MOVIES_SUCCESS } from '../constants';
import { IMovie } from '../state';

const initialState: IMovie = {
  movies: []
}

export const movieReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: [...action.payload]
      }
    default: 
        return state
  }
}