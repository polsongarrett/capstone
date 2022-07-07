import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';

export default function SingleSelect({variable}) {
  const [advType, setAdventureType] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    let index = event.target.value;
    setAdventureType(index);

    // dispatch(changeAdvType(advTypeOptions[index]));
    // dispatch(changeAdvTypeDescription(advTypeDescriptions[index]));
    // dispatch(getTemplates(advTypeOptions[index]));
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="adv-template-select-label">{variable}</InputLabel>
        <Select
          labelId={variable + "-variable-select-label"}
          id={variable + "-variable-select"}
          value=""
          label={variable}
          onChange={handleChange}
        >
          {/* Dynamically populates the select options */}
          {
            // variable.map((element, index) => {
            //   return <MenuItem key={element} value={index}>{element}</MenuItem>
            // })
          }
        </Select>
      </FormControl>
    </>
  )
}