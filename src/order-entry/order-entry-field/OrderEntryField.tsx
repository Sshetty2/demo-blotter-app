import { Select, Input, Button, AutoComplete } from 'antd';
import cx from 'classnames';
import { useState } from 'react';
import NumericInput from 'react-numeric-input';
import { EFormKey } from '../types';
import { IProps } from './types';

const { TextArea } = Input;
const { Option } = Select;

const OrderEntryField = ({
  formKey,
  formFieldConfig,
  className,
  onSubmit,
  handleSimpleChange,
  handleEventChange,
  handleNumericInputChange,
  formState
}: IProps) => {
  const {
    component,
    options,
    formFieldLabel,
    multiline,
    default: defaultValue,
    min,
    max,
    precision,
    step,
    placeholder
  } = formFieldConfig;

  const [searchText, setSearchText] = useState('');

  if (component === 'dropdown') {
    return (
      <div
        key={formKey}
        className={cx(
          `${className}__item`,
          `${className}__select-box`,
          `${className}__${formKey}`,
          {
            [`${className}__${formKey}--${formState[formKey]
              ?.toString()
              .toLowerCase()}`]: formKey === EFormKey.ACTION
          }
        )}
      >
        <div className={`${className}__label`}>{formFieldLabel}</div>
        <Select
          id={formKey}
          defaultValue={defaultValue}
          onChange={handleSimpleChange(formKey)}
        >
          {options?.map(option => (
            <Option key={option} value={option}>{option}</Option>
          ))}
        </Select>
      </div>
    );
  }

  if (
    formState[EFormKey.ORDER_TYPE] === 'Market'
    && (formKey === EFormKey.PRICE || formKey === EFormKey.STOP_PRICE)
  ) {
    return null;
  }

  if (component === 'spinner') {
    const numbericInputProps = {
      ...(min || min === 0) && { min },
      ...(max || max === 0) && { max },
      ...step && { step },
      ...precision && { precision }
    };

    return (
      <div
        key={formKey}
        className={cx(
          `${className}__item`,
          `${className}__spinner-box`,
          `${className}__${formKey}`
        )}
      >
        <div className={`${className}__label`}>{formFieldLabel}</div>
        <NumericInput
          {...numbericInputProps}
          id={formKey}
          onChange={handleNumericInputChange(formKey)}
          className={`${className}__numeric-input`}
          value={formState[formKey] || defaultValue}
        />
      </div>
    );
  }

  if (component === 'input') {
    if (multiline) {
      return (
        <div
          key={formKey}
          className={cx(
            `${className}__item`,
            `${className}__comment-box`,
            `${className}__${formKey}`
          )}
        >
          <TextArea
            onChange={handleEventChange}
            id={formKey}
            placeholder={placeholder}
            autoSize={{
              minRows: 4,
              maxRows: 6
            }}
          />
        </div>
      );
    }

    const filteredOptions = options?.filter(value => value
      .toString()
      .toUpperCase()
      .includes(searchText));

    const hasFilteredOptions = filteredOptions?.length;

    return (
      <div
        key={formKey}
        className={cx(`${className}__item`, `${className}__${formKey}`)}
      >
        <div className={`${className}__label`}>{formFieldLabel}</div>

        <AutoComplete
          dataSource={
            // eslint-disable-next-line no-nested-ternary
            !searchText ? [] : hasFilteredOptions ? filteredOptions : ['not found']
          }
          onSearch={text => setSearchText(text.toUpperCase())}
          onSelect={handleSimpleChange(formKey)}
          placeholder={placeholder}
        />
      </div>
    );
  }

  if (component === 'button') {
    return (
      <div
        key={formKey}
        className={cx(`${className}__item`, `${className}__${formKey}`)}
      >
        <Button onClick={onSubmit}>{formFieldLabel}</Button>
      </div>
    );
  }

  return null;
};

export default OrderEntryField;
