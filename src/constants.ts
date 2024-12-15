import { EBlotterField, TBlotterColumnSettings } from './blotter/types';
import { EFormKey, IFormConfig, TFormState } from './order-entry/types';
import { getDefaultColumnSettings } from './utils';

export const AG_GRID_BALHAM_THEME = 'ag-theme-balham';

export const ACTION_TYPE = {
  UPDATE_ENTRY_FORM_ACTION   : 'UPDATE_ENTRY_FORM_ACTION',
  UPDATE_BLOTTER_ACTION      : 'UPDATE_BLOTTER_ACTION',
  UPDATE_LOADING_STATE_ACTION: 'UPDATE_LOADING_STATE_ACTION'
};

export const DRAG_HEIGHT_MIN = 330;

export const BLOTTER_COLUMN_SETTINGS: TBlotterColumnSettings = {
  [EBlotterField.ACTION]: { ...getDefaultColumnSettings(
    EBlotterField.ACTION,
    'Action'
  ),
  width: 100 },
  [EBlotterField.SYMBOL]: { ...getDefaultColumnSettings(
    EBlotterField.SYMBOL,
    'Symbol'
  ),
  width: 100 },
  [EBlotterField.QTY]       : getDefaultColumnSettings(EBlotterField.QTY, 'Qty'),
  [EBlotterField.ORDER_TYPE]: getDefaultColumnSettings(
    EBlotterField.ORDER_TYPE,
    'Order Type'
  ),
  [EBlotterField.TIF]       : getDefaultColumnSettings(EBlotterField.TIF, 'TIF'),
  [EBlotterField.PRICE]     : getDefaultColumnSettings(EBlotterField.PRICE, 'Price'),
  [EBlotterField.STOP_PRICE]: getDefaultColumnSettings(
    EBlotterField.STOP_PRICE,
    'Stop Price'
  ),
  [EBlotterField.COMMENT]: {
    ...getDefaultColumnSettings(EBlotterField.COMMENT, 'Comment'),
    cellRenderer: 'commentCellRenderer',
    flex        : 1
  }
};

export const ORDER_ENTRY_FORM_CONFIG: Record<EFormKey, IFormConfig> = {
  [EFormKey.ACTION]: {
    component     : 'dropdown',
    options       : ['Buy', 'Sell'],
    formFieldLabel: 'Action',
    default       : 'Buy'
  },
  [EFormKey.SYMBOL]: {
    component     : 'input',
    formFieldLabel: 'Symbol',
    options       : [
      'AAPL',
      'MSFT',
      'GOOGL',
      'VZ',
      'MMM',
      'NFLX',
      'FB',
      'TWTR',
      'AMZN',
      'EBAY'
    ],
    placeholder: '<Enter Symbol>'
  },
  [EFormKey.QUANTITY]: {
    component     : 'spinner',
    formFieldLabel: 'Qty',
    default       : 0,
    min           : 0,
    max           : 999,
    precision     : 0
  },
  [EFormKey.PRICE]: {
    component     : 'spinner',
    formFieldLabel: 'Price',
    step          : 0.01,
    precision     : 2
  },
  [EFormKey.ORDER_TYPE]: {
    component     : 'dropdown',
    options       : ['Market', 'Limit'],
    formFieldLabel: 'Order Type',
    default       : 'Limit'
  },
  [EFormKey.TIF]: {
    component     : 'dropdown',
    options       : ['GTC', 'DAY', 'FOK', 'IOC'],
    formFieldLabel: 'TIF',
    default       : 'DAY'
  },
  [EFormKey.STOP_PRICE]: {
    component     : 'spinner',
    formFieldLabel: 'Stop Price',
    step          : 0.01,
    precision     : 2
  },
  [EFormKey.COMMENT]: {
    component  : 'input',
    multiline  : true,
    placeholder: '<Comment>'
  },
  [EFormKey.SUBMIT]: {
    component     : 'button',
    formFieldLabel: 'Submit'
  }
};

export const DEFAULT_ORDER_ENTRY_VALUES = Object.entries(
  ORDER_ENTRY_FORM_CONFIG
).reduce((acc: TFormState, [key, { default: defaultValue }]) => {
  if (defaultValue || defaultValue === 0) {
    acc[key as keyof TBlotterColumnSettings] = defaultValue;
  }

  if (!defaultValue && key !== EFormKey.SUBMIT) {
    acc[key as keyof TBlotterColumnSettings] = '';
  }

  return acc;
}, {});
