import { combineReducers } from "redux";
import { movieReducer } from "./module/movie/reducers";

const rootReducer = combineReducers({
    movie: movieReducer
});


export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;