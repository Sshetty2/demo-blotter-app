import { createReducer } from 'typesafe-actions';
import { updateBlotterAction } from './blotter.actions';
import { mockBlotterData } from '../../mock/mockBlotterData';
import { TBlotterState } from '../types';

const initialState: TBlotterState = mockBlotterData;

const updateBlotterReducer = (
  state: TBlotterState,
  action: ReturnType<typeof updateBlotterAction>
) => {
  return [...state, action.payload];
};

export const handleActions = {
  [updateBlotterAction.toString()]: updateBlotterReducer
};

export const blotterReducer = createReducer<TBlotterState>(
  initialState,
  handleActions
);
