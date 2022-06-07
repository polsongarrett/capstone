import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function AdventureTypeSelect() {
  const [advType, setAdventureType] = React.useState('');

  const handleChange = (event) => {
    setAdventureType(event.target.value);
  };

  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="adv-type-select-label">Adventure Type</InputLabel>
        <Select
          labelId="adv-type-select-label"
          id="adv-type-select"
          value={advType}
          label="Adventure Type"
          onChange={handleChange}
        >
          <MenuItem value={0}>Random</MenuItem>
          <MenuItem value={1}>Competition</MenuItem>
          <MenuItem value={2}>Crime</MenuItem>
          <MenuItem value={3}>Curse</MenuItem>
          <MenuItem value={4}>Disaster</MenuItem>
          <MenuItem value={5}>Exploration</MenuItem>
          <MenuItem value={6}>Monster</MenuItem>
          <MenuItem value={7}>Plague</MenuItem>
          <MenuItem value={8}>Protection</MenuItem>
          <MenuItem value={9}>War</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
