import React from 'react';
import uuidv4 from 'uuid/v4';

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
    setValue(event.target.value);
    onChange(event);
  }

  if (selectOptions[0].value !== '') {
    setOptions([{
      value: '',
      label: '',
    }].concat(selectOptions));
  }

  return (
    <FormControl required={required}>
      <InputLabel id={id}>{props.label}</InputLabel>
      <Select {...others} onChange={handleChange} labelId={id} native value={selectValue}>
        {selectOptions.map((option) => (
          <option key={uuidv4()} value={option.value}>{option.label}</option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
