import { message } from 'antd';
import OrderEntry from './OrderEntry';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateBlotterAction } from '../store/blotter/blotter.actions';
import { updateLoadingStateAction } from '../store/ui/uiState.actions';
import { DEFAULT_ORDER_ENTRY_VALUES } from '../constants';
import { TBlotterRow } from '../blotter/types';
import { TFormState } from './types';

const OrderEntryContainer = () => {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState<TFormState>(
    DEFAULT_ORDER_ENTRY_VALUES
  );

  const onSubmit = () => {
    const { orderType, symbol, qty, price, stopPrice } = formState;

    if (orderType === 'Limit' && (!symbol || !qty || !price || !stopPrice)) {
      return message.error('Must supply Symbol, QTY, Price, AND, Stop Price');
    }

    if (orderType === 'Market' && (!symbol || !qty)) {
      return message.error('Must supply Symbol AND Quantity');
    }

    dispatch(updateLoadingStateAction(true));

    setTimeout(() => {
      dispatch(updateBlotterAction(formState as TBlotterRow));
      dispatch(updateLoadingStateAction(false));

      // waits for 2 seconds before firing update action
    }, 2000);
  };

  return (
    <OrderEntry
      setFormState={setFormState}
      onSubmit={onSubmit}
      formState={formState}
    />
  );
};

export default OrderEntryContainer;
