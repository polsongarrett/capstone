import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';

import { changeThemeFilters } from '../../redux/slices/filterSlice';

export default function ThemeFilter() {
  const [state, setState] = useState({
    fantasy: true,
    scifi: false,
    western: false
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { fantasy, scifi, western } = state;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeThemeFilters(state))
  })

  return (
    <>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Theme</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={fantasy} onChange={handleChange} name="fantasy" />
            }
            label="Fantasy"
            style={{color: '#fff'}}
          />
          <FormControlLabel
            control={
              <Checkbox checked={scifi} onChange={handleChange} name="scifi" />
            }
            label="Sci-fi"
            style={{color: '#fff'}}
          />
          <FormControlLabel
            control={
              <Checkbox checked={western} onChange={handleChange} name="western" />
            }
            label="Western"
            style={{color: '#fff'}}
          />
        </FormGroup>
      </FormControl>
    </>
  );
}