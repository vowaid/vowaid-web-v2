import React from 'react';
import uuidv4 from 'uuid/v4';
import isEqual from 'lodash/isEqual';

import { Field } from 'formik';
import { FormControl, InputLabel, Select } from '@material-ui/core';

import { chance } from '../../../utils/generators';

/**
 * Description.
 *
 * @param {} props
 */
const SelectInput = (props) => {
  const { options, onChange, required, value, ...others } = props;
  const id = `${chance.className()}-select`;
  const [selectOptions, setOptions] = React.useState(options);
  const [selectValue, setValue] = React.useState(value);

  const handleChange = (event) => {
    const { value } = event.target;

    setValue(value);
    onChange(value);
  }

  React.useEffect(() => {
    let shiftedOptions = [...selectOptions];
    shiftedOptions.shift();

    if (!isEqual(options, selectOptions) && !isEqual(options, shiftedOptions)) {
      setOptions(options);
    }

    if (!selectOptions[0] || selectOptions[0].value !== '') {
      setOptions([{
        value: '',
        label: '',
      }].concat(selectOptions));
    }
  }, [options, selectOptions, setOptions]);

  return (
    <FormControl required={required}>
      <InputLabel id={id}>{props.label}</InputLabel>
      <Field
        as='select'
        component={Select}
        {...others}
        onChange={handleChange}
        labelId={id}
        native
        value={selectValue}
      >
        {selectOptions.map((option) => (
          <option key={uuidv4()} value={option.value}>{option.label}</option>
        ))}
      </Field>
    </FormControl>
  );
};

export default SelectInput;
