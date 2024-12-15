import { TBlotterRow } from '../blotter/types';

export type TBlotterState = TBlotterRow[];

export type TEntryFormState = {};

export type TUiState = {
  loading: boolean;
  lastUpdated: string | null;
  orderTimeElapsedCountdown: number;
};

export interface IStore {
  blotter: TBlotterState;
  orderEntryForm: TEntryFormState;
  ui: TUiState;
}
