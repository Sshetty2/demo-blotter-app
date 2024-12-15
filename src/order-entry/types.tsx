import { Dispatch, SetStateAction } from 'react';

export interface IProps extends IContainerProps {
  setFormState: Dispatch<SetStateAction<TFormState>>;
  onSubmit: () => void;
  formState: TFormState;
}

export interface IContainerProps {}

export enum EFormKey {
  ACTION = 'action',
  SYMBOL = 'symbol',
  QUANTITY = 'qty',
  PRICE = 'price',
  ORDER_TYPE = 'orderType',
  TIF = 'tif',
  STOP_PRICE = 'stopPrice',
  COMMENT = 'comment',
  SUBMIT = 'submit'
}

export interface IFormConfig {
  component: 'dropdown' | 'spinner' | 'input' | 'button';
  options?: string[];
  formFieldLabel?: string;
  multiline?: boolean;
  default?: string | number;
  step?: number;
  min?: number;
  max?: number;
  placeholder?: string;
  precision?: number;
}

export type TFormState = Partial<Record<EFormKey, string | number>>;
