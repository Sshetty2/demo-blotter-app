import { ColDef } from 'ag-grid-community';
import { EBlotterField } from './blotter/types';

export const getDefaultColumnSettings = (
  field: EBlotterField,
  headerName: string
): ColDef => ({
  headerName,
  field,
  autoHeight: false,
  width     : 115
});
