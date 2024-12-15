import { createAction } from 'typesafe-actions';
import { ACTION_TYPE } from '../../constants';
import { TBlotterRow } from '../../blotter/types';

const updateBlotterAction = createAction(ACTION_TYPE.UPDATE_BLOTTER_ACTION)<
  TBlotterRow
>();

export { updateBlotterAction };
