import { EBlotterField, TBlotterRow } from '../blotter/types';

const getMockBlotterRow = (props?: Partial<TBlotterRow>): TBlotterRow => ({
  [EBlotterField.ACTION]: 'Buy',
  [EBlotterField.SYMBOL]: 'MSFT',
  [EBlotterField.QTY]: '100',
  [EBlotterField.ORDER_TYPE]: 'Market',
  [EBlotterField.TIF]: 'IOC',
  [EBlotterField.PRICE]: '99.25',
  [EBlotterField.STOP_PRICE]: '100.25',
  [EBlotterField.COMMENT]: '',
  ...props
});

// types force row data to adhere to col defs
export const mockBlotterData: TBlotterRow[] = [
  getMockBlotterRow(),
  getMockBlotterRow({
    [EBlotterField.QTY]: '50',
    [EBlotterField.TIF]: 'GTC',
    [EBlotterField.COMMENT]: 'For James'
  })
];
