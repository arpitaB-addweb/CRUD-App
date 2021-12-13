import { createStore ,combineReducers} from "redux";
import reducer from '../reducers/Reducer';

const rootReducer = combineReducers({count: reducer})

const store =createStore(
    rootReducer
);

export default store;