import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';

export default function LocationFilter() {
  const [state, setState] = React.useState({
    urban: true,
    wilderness: true,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { urban, wilderness } = state;

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
          />
          <FormControlLabel
            control={
              <Checkbox checked={wilderness} onChange={handleChange} name="wilderness" />
            }
            label="Wilderness"
          />
        </FormGroup>
      </FormControl>
    </>
  );
}