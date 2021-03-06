import React, { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';

import { changeTemplate, changeTemplateDescription } from '../../redux/slices/templateSlice';
import { getVariableOptions, resetSelectedVarOpts } from '../../redux/slices/variableSlice';

export default function AdventureTemplateSelect() {
  const [advTemplate, setTemplate] = useState('');

  const advType = useSelector(state => state.advType.advtype);
  const template = useSelector(state => state.advTemplate.template);
  const templateAdvType = useSelector(state => state.advTemplate.templateAdvType);
  const stateTemplateOptions = useSelector(state => {
    return state.advTemplate.templates.map(template => {
      return template.name;
    })
  });

  const advTemplateOptions = ['Random', ...stateTemplateOptions];
  const variables = template.variables;

  const dispatch = useDispatch();

  useEffect(() => {
    if (templateAdvType !== advType) {
      setTemplate('');
    }
    if (variables && variables.length > 0) {
      dispatch(getVariableOptions(variables));
    }
  }, [advType, dispatch, templateAdvType, variables]);

  const handleChange = (event) => {
    let index = event.target.value;
    setTemplate(index);
    dispatch(changeTemplateDescription(index));
    dispatch(changeTemplate(index));
    dispatch(resetSelectedVarOpts());
  };

  const isRandomAdvType = (advType === 'Random' || advType === null) ? true : false;

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="adv-template-select-label" style={isRandomAdvType ? {color: 'rgba(255, 255, 255, 0.25)'} : {}}>Adventure Template</InputLabel>
        <Select
          labelId="adv-template-select-label"
          id="adv-template-select"
          value={advTemplate}
          label="Adventure Template"
          disabled={isRandomAdvType}
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