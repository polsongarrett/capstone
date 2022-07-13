import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

import { changePlothook } from '../redux/slices/plothookSlice';
import { useFilter } from '../hooks/useFilter';

export default function GeneratePlothooksButton({templateVars}) {

  const advType = useSelector(state => state.advType.advtype);
  const template = useSelector(state => state.advTemplate.template);
  const isTemplate = Object.keys(template).length > 0;
  const description = useSelector(state => state.advTemplate.description);
  const selectedVarOpts = useSelector(state => state.advVariable.selectedVarOpts);
  const variableOptions = useFilter(templateVars);
  // const variableOptions = useFilter(templateVar);
  // const variableOptions = useSelector(state => state.advVariable.variableOptions);

  const dispatch = useDispatch();
  // const [generatedVarOpts, setGeneratedVarOpts] = useState(selectedVarOpts);


  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const generatePlothooks = () => {
    
    let plothookString;
    
    // alert(
    //   `ADTYPE: ${advType}
    //   \nTEMPLATE: ${JSON.stringify(template)}
    //   \nDESCRIPTION: ${description}
    //   \nLOCATION: ${JSON.stringify(location)}
    //   \nTHEMES: ${JSON.stringify(themes)}
    //   \nSELECTED_VARIABLES: ${JSON.stringify(selectedVarOpts)}`
    // );

    // IF nothing is selected
    if (!advType || advType === 'Random') {
      console.log('Random everything');
    }
    // IF no template is selected
    else if (advType && (!isTemplate || template.name === 'Random')) {
      console.log(`Random ${advType}`);
    }
    // IF non-random template is selected
    else if (isTemplate && template.name !== 'Random') {

      const generatedVarOpts = [];
      if (selectedVarOpts.length < template.variables.length) {

        // Check which variables have been selected
        const selectedVars = selectedVarOpts.map(variableOption => variableOption.variableType);
        const missingVars = [];

        template.variables.forEach((templateVar) => {
          if(!selectedVars.includes(templateVar)) {
            missingVars.push(templateVar);
          }
        });

        // Get random variables that haven't been selected from variableOptions in store
        //   For each missing variable, get the length of the variableOptions with the matching variableType
        //   Get a random index to select (0-length) from the variable options that match the missing variables
        missingVars.forEach(missingVar => {
          const unselectedVarOpts = variableOptions.filter(variableOption => missingVar === variableOption.variableType);
          const randomIndex = getRandomInt(0, unselectedVarOpts.length);
          generatedVarOpts.push(unselectedVarOpts[randomIndex]);
        });
      }

      // push here to avoid preventExtensions() from being called too early
      generatedVarOpts.push(...selectedVarOpts); 

      // create array of regex and name pairs from each element in generatedVarOpts.variableType
      const regexNamePairs = generatedVarOpts.map(({ variableType, name }) => ({ regex: new RegExp('\\[' + variableType + '\\]', 'g'), selected: name }) );
      console.log(regexNamePairs);

      plothookString = description;
      regexNamePairs.forEach(pair => {
        plothookString = plothookString.replace(pair.regex, pair.selected)
      });
    }
    
    // submit plothook
    dispatch(changePlothook(plothookString));
  }

  return (
    <Button variant="contained" onClick={generatePlothooks}>Generate Plothook!</Button>
  )
}