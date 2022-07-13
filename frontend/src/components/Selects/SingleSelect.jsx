import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import { changeSelectedVarOpts } from '../../redux/slices/variableSlice';
import { useFilter } from '../../hooks/useFilter';

function capitlizeFirstLetter(string) {
  let capitilzedString = string.charAt(0).toUpperCase() + string.slice(1);
  return capitilzedString;
}

export default function SingleSelect({templateVar}) {
  const templateVarLabel = capitlizeFirstLetter(templateVar);
  const [variable, setVariableOption] = useState('');

  const variableOptions = useFilter(templateVar);

  variableOptions.unshift({_id: 0, name: 'Random', variableType: templateVar});
  const dispatch = useDispatch();

  const handleChange = (event) => {
    let index = event.target.value;
    setVariableOption(index);
    dispatch(changeSelectedVarOpts(variableOptions[index]));
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="adv-template-select-label">{templateVarLabel}</InputLabel>
        <Select
          labelId={templateVar + "-variable-select-label"}
          id={templateVar + "-variable-select"}
          value={variable}
          label={templateVarLabel}
          onChange={handleChange}
        >
          {
            variableOptions.map((element, index) => {
              return <MenuItem key={element._id} value={index}>{element.name}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </>
  )
}