import { Modal } from 'antd';
import { createReducer } from 'typesafe-actions';
import { updateBlotterAction } from '../blotter/blotter.actions';
import { updateLoadingStateAction } from './uiState.actions';
import { TUiState } from '../types';

const initialState: TUiState = {
  loading: false,
  lastUpdated: null,
  orderTimeElapsedCountdown: 10
};

const updateLoadingStateReducer = (
  state: TUiState,
  { payload }: ReturnType<typeof updateLoadingStateAction>
) => ({
  ...state,
  loading: payload,
  // if loading is false, set last updated
  lastUpdated: !payload ? new Date().toLocaleTimeString() : null
});

const updateOrderTimeElapsedReducer = (state: TUiState) => {
  const newOrderTimeElapsedCountdown = state.orderTimeElapsedCountdown - 1;

  if (newOrderTimeElapsedCountdown === 0) {
    Modal.confirm({
      title: 'Confirm',
      content: 'Order Time Elapsed',
      okText: 'Ok'
    });
  }

  return {
    ...state,
    orderTimeElapsedCountdown:
      state.orderTimeElapsedCountdown > 0 ? newOrderTimeElapsedCountdown : 9
  };
};

export const handleActions = {
  [updateLoadingStateAction.toString()]: updateLoadingStateReducer,
  [updateBlotterAction.toString()]: updateOrderTimeElapsedReducer
};

export const uiStateReducer = createReducer<TUiState>(
  initialState,
  handleActions
);
