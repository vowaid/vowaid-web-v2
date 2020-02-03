import React from 'react';

import { InputLabel, Select, MenuItem } from '@material-ui/core';

import { chance } from '../../../utils/generators';

/**
 * Description.
 *
 * @param {} props
 */
const SelectInput = (props) => {
  const { options, ...others } = props;
  const id = `${chance.className()}-select`;

  return (
    <>
      <InputLabel id={id}>{props.label}</InputLabel>
      <Select {...others} labelId={id}>
        {props.options.map((option) => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </Select>
    </>
  );
};

export default SelectInput;
