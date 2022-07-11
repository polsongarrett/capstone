import React, { useState } from 'react';
import {FormControl, InputLabel, MenuItem, Select } from '@mui/material';
// import { useDispatch } from 'react-redux';

import { getVariableOptions } from '../../redux/slices/variableSlice';

function capitlizeFirstLetter(string) {
  let capitilzedString = string.charAt(0).toUpperCase() + string.slice(1);
  return capitilzedString;
}

export default function SingleSelect({templateVar}) {
  const templateVarLabel = capitlizeFirstLetter(templateVar);
  const [variable, setVariableOption] = useState('');
  // const dispatch = useDispatch();
  // dispatch(getVariableOptions(var));
  // console.log('templateVar:', templateVar);


  const handleChange = (event) => {
    // let index = event.target.value;

  //   dispatch(changeAdvType(advTypeOptions[index]));
  //   dispatch(changeAdvTypeDescription(advTypeDescriptions[index]));
    
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="adv-template-select-label">{templateVarLabel}</InputLabel>
        <Select
          labelId={templateVar + "-variable-select-label"}
          id={templateVar + "-variable-select"}
          // value={variable}
          value={variable}
          label={templateVarLabel}
          onChange={handleChange}
        >
          {/* {
            variable.map((element, index) => {
              return <MenuItem key={element} value={index}>{element}</MenuItem>
            }) 
          } */}
        </Select>
      </FormControl>
    </>
  )
}