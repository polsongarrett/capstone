import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel } from '@mui/material';

import { changeLocationFilters } from '../../redux/slices/filterSlice';

export default function LocationFilter() {
  const INITIALLY_CHECKED_BOXES = 2;
  const CHECKED_CHECKBOX_MINIMUM = 1;
  const [state, setState] = useState({
    urban: true,
    wilderness: true
  });
  const [checkBoxCount, setCheckBoxCount] = useState(INITIALLY_CHECKED_BOXES)

  // const handleChange = (event) => {
  //   setState({
  //     ...state,
  //     [event.target.name]: event.target.checked
  //   });
  // };

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

  const { urban, wilderness } = state;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeLocationFilters(state))
  })



  return (
    <>
      <FormControl component="fieldset" variant="standard">
        <FormLabel component="legend">Location</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={urban} onChange={handleChange} name="urban" />
            }
            label="Urban"
            style={{color: '#fff'}}
          />
          <FormControlLabel
            control={
              <Checkbox checked={wilderness} onChange={handleChange} name="wilderness" />
            }
            label="Wilderness"
            style={{color: '#fff'}}
          />
        </FormGroup>
      </FormControl>
    </>
  );
}