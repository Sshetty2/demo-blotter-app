import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { EFormKey, IFormConfig, TFormState } from '../types';

export interface IProps {
  formKey: EFormKey;
  className: string;
  formState: TFormState;
  formFieldConfig: IFormConfig;
  handleEventChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSimpleChange: (id: EFormKey) => (value: string | number) => void;
  handleNumericInputChange: (
    id: EFormKey
  ) => (
    value: number | null,
    stringValue: string,
    input: HTMLInputElement
  ) => void;
  setFormState: Dispatch<SetStateAction<TFormState>>;
  onSubmit: () => void;
}
