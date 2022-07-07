import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';

import { changeTemplateDescription } from '../../redux/slices/templateSlice';

export default function AdventureTemplateSelect() {
  const [advTemplate, setAdventureTemplate] = useState('');
  const dispatch = useDispatch();

  const advTemplateOptions = useSelector(state => state.advTemplate.options);

  const handleChange = (event) => {
    let index = event.target.value;
    setAdventureTemplate(index);
    dispatch(changeTemplateDescription(index));
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="adv-template-select-label">Adventure Template</InputLabel>
        <Select
          labelId="adv-template-select-label"
          id="adv-template-select"
          value={advTemplate}
          label="Adventure Template"
          onChange={handleChange}
        >
          {/* Dynamically populates the select options */}
          {
            advTemplateOptions.map((element, index) => {
              return <MenuItem key={element} value={index}>{element}</MenuItem>
            })
          }
        </Select>
      </FormControl>
    </>
  );
}