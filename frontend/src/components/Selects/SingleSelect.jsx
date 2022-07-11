import React, { useState } from 'react';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
import {FormControl, InputLabel, MenuItem, Select } from '@mui/material';
// import { useDispatch } from 'react-redux';

// import { getVariableOptions } from '../../redux/slices/variableSlice';

export default function SingleSelect({templateVar}) {
  // const [variable, setAdventureType] = useState('');
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
        <InputLabel id="adv-template-select-label">{templateVar}</InputLabel>
        <Select
          labelId={templateVar + "-variable-select-label"}
          id={templateVar + "-variable-select"}
          // value={variable}
          value=""
          label={templateVar}
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