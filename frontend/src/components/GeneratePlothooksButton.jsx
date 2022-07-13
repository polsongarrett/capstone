import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

import { changePlothook } from '../redux/slices/plothookSlice';
import { changeTemplate } from '../redux/slices/templateSlice';
import { useFilter } from '../hooks/useFilter';

export default function GeneratePlothooksButton({templateVars}) {

  const advType = useSelector(state => state.advType.advtype);
  const template = useSelector(state => state.advTemplate.template);
  const templates = useSelector(state => state.advTemplate.templates);
  const isTemplate = Object.keys(template).length > 0;
  const description = useSelector(state => state.advTemplate.description);
  const selectedVarOpts = useSelector(state => state.advVariable.selectedVarOpts);
  const variableOptions = useFilter(templateVars);

  const dispatch = useDispatch();


  function getRandomIndex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const generatePlothooks = () => {
    
    let plothookString = '';
    const generatedVarOpts = [];
    
    // alert(
    //   `ADTYPE: ${advType}
    //   \nTEMPLATE: ${JSON.stringify(template)}
    //   \nDESCRIPTION: ${description}
    //   \nLOCATION: ${JSON.stringify(location)}
    //   \nTHEMES: ${JSON.stringify(themes)}
    //   \nSELECTED_VARIABLES: ${JSON.stringify(selectedVarOpts)}`
    // );

    // IF non-random template is selected
    if (isTemplate && template.name !== 'Random') {

      // IF there are variables unselected
      if (selectedVarOpts.length < template.variables.length) {

        // Check which variables have been selected
        const selectedVars = selectedVarOpts.map(variableOption => variableOption.variableType);
        const missingVars = [];

        // For each template.variable, if any are unselected, push that variable to missingVars
        template.variables.forEach((templateVar) => {
          if (!selectedVars.includes(templateVar)) {
            missingVars.push(templateVar);
          }
        });

        // Get random variables that haven't been selected from variableOptions in store
        //   For each missing/unselected variable, store all variable options with the variableType 
        //     property that matche the missing/unselected variable 
        //   Push a random variable option to an array that will hold all selcted and random options
        missingVars.forEach(missingVar => {
          const unselectedVarOpts = variableOptions.filter(variableOption => missingVar === variableOption.variableType);
          const randomIndex = getRandomIndex(0, unselectedVarOpts.length);
          generatedVarOpts.push(unselectedVarOpts[randomIndex]);
        });
      }

      // push here to avoid preventExtensions() from being called too early
      generatedVarOpts.push(...selectedVarOpts); 

      // create array of regex and name pairs from each element in generatedVarOpts.variableType
      const regexNamePairs = generatedVarOpts.map(({ variableType, name }) => ({ regex: new RegExp('\\[' + variableType + '\\]', 'g'), selected: name }) );

      plothookString = description;
      regexNamePairs.forEach(pair => {
        plothookString = plothookString.replace(pair.regex, pair.selected)
      });
    }
    // IF no template is selected
    else if (advType && (!isTemplate || template.name === 'Random')) {

      // Get a random template
      const randomIndex = getRandomIndex(0, templates.length);
      dispatch(changeTemplate(randomIndex));
      console.log(template);
      const missingVars = [];

      template.variables.forEach((templateVar) => {
        missingVars.push(templateVar);
      });

      missingVars.forEach(missingVar => {
        const unselectedVarOpts = variableOptions.filter(variableOption => missingVar === variableOption.variableType);
        const randomIndex = getRandomIndex(0, unselectedVarOpts.length);
        generatedVarOpts.push(unselectedVarOpts[randomIndex]);
      });

      const regexNamePairs = generatedVarOpts.map(({ variableType, name }) => ({ regex: new RegExp('\\[' + variableType + '\\]', 'g'), selected: name }) );

      plothookString = template.description;
      regexNamePairs.forEach(pair => {
        plothookString = plothookString.replace(pair.regex, pair.selected)
      });
    }
    // IF nothing is selected
    else if (!advType || advType === 'Random') {
      console.log('Random everything');
    }

    // submit plothook
    dispatch(changePlothook(plothookString));
  }

  return (
    <Button variant="contained" onClick={generatePlothooks}>Generate Plothook!</Button>
  )
}