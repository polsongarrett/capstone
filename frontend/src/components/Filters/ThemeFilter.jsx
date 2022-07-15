import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';

import { changeThemeFilters } from '../../redux/slices/filterSlice';

export default function ThemeFilter() {
  const INITIALLY_CHECKED_BOXES = 3;
  const CHECKED_CHECKBOX_MINIMUM = 1;
  const [state, setState] = useState({
    fantasy: true,
    scifi: true,
    western: true
  });
  const [checkBoxCount, setCheckBoxCount] = useState(INITIALLY_CHECKED_BOXES)

  const handleChange = (event) => {
    setState(
      () => {
        if (!event.target.checked) {
          if (checkBoxCount === CHECKED_CHECKBOX_MINIMUM) {
            setState({
              ...state,
              [event.target.name]: !event.target.checked
            });
            console.log('min reached');
          }
          else {
            setState({
              ...state,
              [event.target.name]: event.target.checked
            });
            setCheckBoxCount(checkBoxCount - 1);
            console.log('checkBoxCount - 1');
          }
        }
        else {
          setState({
            ...state,
            [event.target.name]: event.target.checked
          })
          setCheckBoxCount(checkBoxCount + 1);
          console.log('checkBoxCount + 1');
        }
      }
    );
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