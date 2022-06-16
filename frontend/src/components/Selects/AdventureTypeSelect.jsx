import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import { changeAdvTypeDescription } from '../../redux/slices/advTypeDescriptionSlice';

const advTypeOptions = [
  'Random',
  'Competition',
  'Crime',
  'Curse',
  'Disaster',
  'Exploration',
  'Monster',
  'Plague',
  'Protection',
  'War'
];

const advTypeDescriptions = [
  'Choose your adventure type or generate it randomly!',
  'In a competition, people compete against others to win a prize, which could be an improved reputation, money, real estate, etc. For adventurers, however, it is usually not that straightforward.',
  'Sometimes an adventure involves criminal activity. The adventurers could be the investigators, the victims, or the (framed) perpetrators of said criminal activity, which might range from burglary and theft to murder and treason.',
  'Curses vary widely in scope and effect. A curse may afflict just a person or object, or it could affect an entire country and everyone and everything in it. This adventure might depend on some adventurers taking steps to either break the curse or simply to escape it.',
  'A natural disaster may occur naturally, magically, or be brought about through mortal or divine intervention. Sometimes these events have been predicted and can even prevented. Sometimes they strike when everyone least expects it. Adventurers might interact with the cause of the disaster, such as an angry god. Or they must simply try to survive or deal with the aftermath.',
  'Most real-life adventurers have just been explorers. Exploration can lead to many rewards, such as finding lost treasure, artifacts, or an entire civilization. Some people are willing to pay for high-quality maps of yet unexplored regions.',
  'Monsters occaisionally terrorize populations of people, and then those people hire adventurers to deal with them. Some monsters can be reasonable while others must be killed or captured. Sometimes, the monster might have justifiable reasons for what they are doing. Maybe they are not the real monsters.',
  'Plagues can vary in their symptoms, infection method and rate, mortality rate, and how natural/unnatural they are. Adventurers might be challenged in obtaining the cure, or maybe they need to get out of the quarantine zone without getting killed by guards or soldiers.',
  'Sometimes adventurers only have one job to do: protect the target. The target could be an important diplomat, a bank vault, or a defensive fortification. However, the target might be in the wrong hands, and the adventurers must rescue or retrieve it.',
  'A war can be between nations, cities, factions, families, gangs, etc. Wars can be fought in the open or in secret. Adventurers may or may not be loyal to any side. They may take on secret missions, diplomatic missions, or assault missions.'
]

export default function AdventureTypeSelect() {
  const [advType, setAdventureType] = React.useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    let index = event.target.value;
    setAdventureType(index);
    dispatch(changeAdvTypeDescription(advTypeDescriptions[index]));
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
          {/* Dynamically populates the select options */}
          {
            advTypeOptions.map((e, i) => {
              return <MenuItem key={e} value={i} disabled={i>2}>{e}</MenuItem>
            })
          }

          {/* 
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
          */}
        </Select>
      </FormControl>
    </>
  );
}
