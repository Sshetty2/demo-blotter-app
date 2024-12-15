import { createAction } from 'typesafe-actions';
import { ACTION_TYPE } from '../../constants';

const updateLoadingStateAction = createAction(
  ACTION_TYPE.UPDATE_LOADING_STATE_ACTION
)<boolean>();

const updatedOrderTimeElapsedAction = createAction(
  ACTION_TYPE.UPDATE_LOADING_STATE_ACTION
)();

export { updateLoadingStateAction, updatedOrderTimeElapsedAction };
