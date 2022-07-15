import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

import { changePlothook } from '../redux/slices/plothookSlice';
import { getTemplates, setRandomTemplate } from '../redux/slices/templateSlice';
import { getVariableOptions } from '../redux/slices/variableSlice';
import { useFilter } from '../hooks/useFilter';

export default function GeneratePlothooksButton({templateVars}) {

  const advType = useSelector(state => state.advType.advtype);
  const advTypes = useSelector(state => state.advType.advTypes);
  const template = useSelector(state => state.advTemplate.template);
  const templates = useSelector(state => state.advTemplate.templates);
  const description = useSelector(state => state.advTemplate.description);
  const randomTemplate = useSelector(state => state.advTemplate.randomTemplate);
  const selectedVarOpts = useSelector(state => state.advVariable.selectedVarOpts);     

  if (templateVars.length < 1) {
    templateVars = randomTemplate.variables;
  }

  const variableOptions = useFilter(templateVars);

  const dispatch = useDispatch();
  const [tempAdvType, setTempAdvType] = useState(advType);
  const [tempTemplate, setTempTemplate] = useState(template);
  const [tempVarOpts, setTempVarOpts] = useState(variableOptions);

  const LENGTH_OF_ADVTYPES = 3; // TODO: Fill out database so more adventure types are available
  const START_INDEX_ZERO = 0;
  const START_INDEX_ONE = 1;
  const isTemplate = Object.keys(template).length > 0;

  useEffect(() => {

    /**
     * STEP 1: Check if adventure type is selected
     *   FALSE: Set a random adventure type for tempAdvType
     *   TRUE: Set the selected adventure type for tempAdvType
     */
    if (advType === 'Random' && tempAdvType === 'Random') {
      const randomIndex = getRandomIndex(START_INDEX_ONE, LENGTH_OF_ADVTYPES);
      setTempAdvType(advTypes[randomIndex]);
    }
    else if (advType !== 'Random') {
      setTempAdvType(advType);
    }
    /**
     * STEP 2: Check if template is selected or that the selected template's adventure type is equal to the type stored in state 
     *   FALSE: Do nothing
     *   TRUE: If the store templates has templates, then set the template. Else, fetch templates from the database
     */
    if (Object.keys(tempTemplate).length < 1 || tempTemplate.advType !== tempAdvType) {

      if (templates.length > 0) {
        const randomIndex = getRandomIndex(START_INDEX_ZERO, templates.length);
        setTempTemplate(templates[randomIndex]);
      }
      else {
        dispatch(getTemplates(tempAdvType));
      }
    }
    /**
     * STEP 3a: Check if variable options have been generated or if the variable options match those of the selected template
     *   FALSE: Do nothing
     *   TRUE: If the store variable options is populated, then set the variable options. Else, fetch options from the database 
     */
    else if (tempVarOpts.length < 1) {
      if (variableOptions.length > 0) {
        setTempVarOpts(variableOptions);
      }
      else {
        dispatch(getVariableOptions(tempTemplate.variables));
        dispatch(setRandomTemplate(tempTemplate));
      }
    }
    /**
     * STEP 3b: Check that tempVarOpts.variableTypes and tempTemplate.variableTypes match. 
     * If the template changes, then tempVarOpts (whose value is set with variableOptions) is out of sync.
     */
    else if (tempVarOpts.length > 0 && (tempTemplate !== undefined || tempTemplate !== null)) {
      // Check that tempTemplate has the same variables and same length as tempVarOpts variableTypes
      const tempVarOptsVarTypes = [];
      tempVarOpts.forEach(varOpt => {
        if (!tempVarOptsVarTypes.includes(varOpt.variableType)) {
          tempVarOptsVarTypes.push(varOpt.variableType);
        }
      });

      // same length?
      if (tempVarOptsVarTypes.length === tempTemplate.variables.length) {

        // same variables?
        const isSameTempVarOpts = tempVarOpts.every(varOpt => tempTemplate.variables.includes(varOpt.variableType));
        if (!isSameTempVarOpts) {
          // Fetch the correct variable options and then set tempVarOpts state
          dispatch(getVariableOptions(tempTemplate.variables));
          dispatch(setRandomTemplate(tempTemplate))
          const isSameVarOpts = tempVarOpts.every(varOpt => variableOptions.includes(varOpt.variableType));

          if (!isSameVarOpts) {
            setTempVarOpts(variableOptions);
          }
          dispatch(getVariableOptions(tempTemplate.variables));
          dispatch(setRandomTemplate(tempTemplate))
        }
      }
      else {
       // Fetch the correct variable options and then set tempVarOpts state
       dispatch(getVariableOptions(tempTemplate.variables));
       dispatch(setRandomTemplate(tempTemplate))
       const isSameVarOpts = tempVarOpts.every(varOpt => variableOptions.includes(varOpt.variableType));

       if (!isSameVarOpts) {
         setTempVarOpts(variableOptions);
       }
      }

      /**
       * TODO: 
       * This is a temporary fix for the filters not affecting tempVarOpts
       * There will be corner cases when the filters change but the variableOptions.length and tempVarOpts.length are still equal      
       */
      if (tempVarOpts.length !== variableOptions.length) {
        setTempVarOpts(variableOptions);
      }
    }
  },
  [
    advType,
    tempTemplate,
    tempAdvType,
    tempVarOpts,
    variableOptions,
    advTypes,
    templates,
    dispatch
  ]);

  // Get a random number in a range from "min" (inclusive) to "max" (exclusive)
  function getRandomIndex(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const generatePlothooks = () => {
    
    let plothookString = '';
    const generatedVarOpts = [];
    
    // IF non-random template is selected
    if (isTemplate && template.name !== 'Random') {
      // IF there are variables unselected
      if (selectedVarOpts.length < template.variables.length) {
        // Check which variables have been selected
        const selectedVars = selectedVarOpts.map(variableOption => variableOption.variableType);
        const missingVars = [];
        // For each template.variable, if any are unselected, push that variable to missingVars
        template.variables.forEach(templateVar => {
          if (!selectedVars.includes(templateVar)) {
            missingVars.push(templateVar);
          }
        });

        /**
         * Get random variables that haven't been selected from variableOptions in store
         *   For each missing/unselected variable, store all variable options with the variableType
         *     property that matche the missing/unselected variable
         *   Push a random variable option to an array that will hold all selected and random options
         */
        missingVars.forEach(missingVar => {
          const unselectedVarOpts = variableOptions.filter(variableOption => missingVar === variableOption.variableType);
          const randomIndex = getRandomIndex(START_INDEX_ZERO, unselectedVarOpts.length);
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
    else {
      tempTemplate.variables.forEach(missingVar => {
        const unselectedVarOpts = tempVarOpts.filter(variableOption => missingVar === variableOption.variableType);
        const randomIndex = getRandomIndex(START_INDEX_ZERO, unselectedVarOpts.length);
        generatedVarOpts.push(unselectedVarOpts[randomIndex]);
      });

      const regexNamePairs = generatedVarOpts.map(({ variableType, name }) => ({ regex: new RegExp('\\[' + variableType + '\\]', 'g'), selected: name }) );

      plothookString = tempTemplate.description;
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