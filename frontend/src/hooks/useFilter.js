import { useSelector } from 'react-redux';

function filter (varOption, templateVar, themes, location) {
  return (JSON.stringify(varOption.variableType) === JSON.stringify(templateVar)) && (
    (
      (varOption.genres.fantasy && themes.fantasy === true) || 
      (varOption.genres.scifi && themes.scifi === true) || 
      (varOption.genres.western && themes.western === true)
    ) && 
    (
      (varOption.location.wilderness && location.wilderness === true) || 
      (varOption.location.urban && location.urban === true)
    )
  )
}

export function useFilter(templateVarOrVars) {
  
  const themes = useSelector(state => state.filters.themes);
  const location = useSelector(state => state.filters.location);
  
  const variableOptions = useSelector(state => {
    return state.advVariable.variableOptions.filter(varOption => {
      if (Array.isArray(templateVarOrVars)) {
        return templateVarOrVars.some(templateVar => filter(varOption, templateVar, themes, location));
          
          // (JSON.stringify(varOption.variableType) === JSON.stringify(templateVar)) && (
          //   (
          //     (varOption.genres.fantasy && themes.fantasy === true) || 
          //     (varOption.genres.scifi && themes.scifi === true) || 
          //     (varOption.genres.western && themes.western === true)
          //   ) && 
          //   (
          //     (varOption.location.wilderness && location.wilderness === true) || 
          //     (varOption.location.urban && location.urban === true)
          //   )
          // )
              
        // );
      }
      else {
        return filter(varOption, templateVarOrVars, themes, location);
        // if (JSON.stringify(varOption.variableType) === JSON.stringify(templateVarOrVars)) {
        //   if (((varOption.genres.fantasy && themes.fantasy === true) || 
        //        (varOption.genres.scifi && themes.scifi === true) || 
        //        (varOption.genres.western && themes.western === true)) && 
        //        ((varOption.location.wilderness && location.wilderness === true) ||
        //        (varOption.location.urban && location.urban === true))) {
        //     // return varOption;
        //     return true;
        //   }
        //   else {
        //     return false;
        //   }
        // }
      }
    })
  });
  return variableOptions;
}