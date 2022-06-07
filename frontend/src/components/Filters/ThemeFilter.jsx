import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';

export default function ThemeFilter() {
  const [state, setState] = React.useState({
    fantasy: true,
    scifi: false,
    western: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { fantasy, scifi, western } = state;

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
          />
          <FormControlLabel
            control={
              <Checkbox checked={scifi} onChange={handleChange} name="scifi" />
            }
            label="Sci-fi"
          />
          <FormControlLabel
            control={
              <Checkbox checked={western} onChange={handleChange} name="western" />
            }
            label="Western"
          />
        </FormGroup>
      </FormControl>
    </>
  );
}