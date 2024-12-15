import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { blotterReducer } from './blotter/blotter.reducer';
import { uiStateReducer } from './ui/uiState.reducer';

const initialState = {};

const createRootReducer = () => combineReducers({
  blotter: blotterReducer,
  ui     : uiStateReducer
});

const configureStore = (state = initialState) => createStore(
  createRootReducer(),
  state,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default configureStore;
