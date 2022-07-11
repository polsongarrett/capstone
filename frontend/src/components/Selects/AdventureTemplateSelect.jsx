import React, { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';

import { changeTemplateDescription } from '../../redux/slices/templateSlice';


export default function AdventureTemplateSelect() {
  const advTemplateOption = useSelector(state => state.advTemplate.option);
  const advTemplateOptions = useSelector(state => state.advTemplate.options);

  const [advTemplate, setTemplate] = useState('');
  useEffect(()=> {
    if (advTemplateOptions.length === 1) {
      if (advTemplateOption === 'Random') {
        setTemplate(0)
      }
      else {
        setTemplate('');
      }
    }
  }, [advTemplateOption, advTemplateOptions.length]);
  
  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    let index = event.target.value;
    setTemplate(index);
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