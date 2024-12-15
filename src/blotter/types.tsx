import { ColDef } from 'ag-grid-community';

export interface IProps {
  blotterData: TBlotterRow[];
  loadingState: boolean;
  lastUpdated: string | null;
}

export enum EBlotterField {
  ACTION = 'action',
  SYMBOL = 'symbol',
  QTY = 'qty',
  ORDER_TYPE = 'orderType',
  TIF = 'tif',
  PRICE = 'price',
  STOP_PRICE = 'stopPrice',
  COMMENT = 'comment'
}

export type TBlotterColumnSettings = Record<EBlotterField, ColDef>;

type TBlotterRowGetter<T, T2> = {
  [P in keyof T]: T2;
};

export type TBlotterRow = TBlotterRowGetter<
  TBlotterColumnSettings,
  string | number
>;
