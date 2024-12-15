import { ChangeEvent, useCallback } from 'react';
import OrderEntryField from './order-entry-field/';
import { ORDER_ENTRY_FORM_CONFIG } from '../constants';
import { EFormKey, IProps } from './types';

import './OrderEntry.scss';

const baseClass = 'order-entry';

const OrderEntry = ({ setFormState, onSubmit, formState }: IProps) => {
  const handleEventChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      event?.persist();
      setFormState(prevFormState => ({
        ...prevFormState,
        [event.target.id]: event.target.value
      }));
    },
    []
  );

  const handleSimpleChange = useCallback(
    (id: EFormKey) => (value: string | number) => {
      setFormState(prevFormState => ({
        ...prevFormState,
        [id]: value
      }));
    },
    []
  );

  const handleNumericInputChange = useCallback(
    (id: EFormKey) => (value: number | null) => setFormState(prevFormState => ({
      ...prevFormState,
      [id]: value
    })),
    []
  );

  return (
    <div className={baseClass}>
      <div className={`${baseClass}__title-bar`}>
        <div className={`${baseClass}__title`}>Order Entry</div>
      </div>
      <div className={`${baseClass}__grid`}>
        {Object.entries(ORDER_ENTRY_FORM_CONFIG).map(([key, value]) => (
          <OrderEntryField
            key={key}
            setFormState={setFormState}
            formState={formState}
            formKey={key as EFormKey}
            formFieldConfig={value}
            onSubmit={onSubmit}
            handleNumericInputChange={handleNumericInputChange}
            handleEventChange={handleEventChange}
            handleSimpleChange={handleSimpleChange}
            className={`${baseClass}__grid`}
          />
        ))}
      </div>
    </div>
  );
};

export default OrderEntry;
