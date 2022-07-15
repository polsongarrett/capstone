
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, Grid, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';

import AdventureTemplateSelect from './components/Selects/AdventureTemplateSelect';
import AdventureTypeSelect from './components/Selects/AdventureTypeSelect';
import Description from './components/Description';
import Display from './components/Display';
import Filters from './components/Filters/Filters';
import GeneratePlothooksButton from './components/GeneratePlothooksButton';
import Header from './components/Header';
import SingleSelect from './components/Selects/SingleSelect';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  }
});

function App() {
  const advTypeDescription = useSelector(state => state.advType.description);
  const plothook = useSelector(state => state.plothook.plothook);
  const templateDescription = useSelector(state => state.advTemplate.description);
  const template = useSelector(state => state.advTemplate.template);
  const templateVariables = Object.keys(template).length !== 0 ? template.variables : [];

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        {/* -------------------------------------------------- B O D Y ----------------------------------------------------- */}
        <Grid container rowSpacing={5}>

          {/* -------------------------------H E A D E R  R O W ---------------------------------- */}
          <Grid container item xs={12}>
            <Header />
          </Grid>
          {/* ------------------------------- H E A D E R  R O W ---------------------------------- */}
            
          {/* ------------------------------- M A I N  R O W ---------------------------------- */}
          <Grid container item spacing={5} rowSpacing={8}>

            {/* -------- F I L T E R S  C O L U M N -------- */}
            <Grid item xs={12} sm={12} md={2}>
              <Filters />
            </Grid>
            {/* -------- F I L T E R S  C O L U M N -------- */}

            {/* ----------- M E N U  C O L U M N ----------- */}
            <Grid container item xs={9} sm={12} md={10} rowSpacing={5}>

              {/* ------------------------------- A D V E N T U R E  R O W ---------------------------------- */}
              <Grid container item spacing={3}>

                {/* -------- A D V.  S E L E C T  C O L U M N -------- */}
                <Grid item xs={12} sm={12} md={4}>
                  <AdventureTypeSelect />
                </Grid>
                {/* -------- A D V.  S E L E C T  C O L U M N -------- */}

                {/* -------- A D V.  D E S C R.   C O L U M N -------- */}
                <Grid item xs={9} sm={12} md={8}>
                  <Description description={advTypeDescription} theme={darkTheme} />
                </Grid>
                {/* -------- A D V.  D E S C R.   C O L U M N -------- */}

              </Grid>
              {/* ------------------------------- A D V E N T U R E  R O W ---------------------------------- */}

              {/* ------------------------------- T E M P L A T E  R O W ---------------------------------- */}
              <Grid container item spacing={3}>

                {/* -------- S E L E C T  C O L U M N --------- */}
                <Grid item xs={12} sm={12} md={4}>
                  <AdventureTemplateSelect />
                </Grid>
                {/* -------- S E L E C T  C O L U M N --------- */}

                {/* -------- D E S C .  C O L U M N --------- */}
                <Grid item xs={9} sm={12} md={8}>
                  <Description description={templateDescription} />
                </Grid>
                {/* -------- D E S C .  C O L U M N --------- */}
              </Grid>
              {/* ------------------------------- T E M P L A T E  R O W ---------------------------------- */}

              {/* ------------------------ T E M P L A T E  V A R I B L E S  R O W --------------------------- */}
              <Grid container item spacing={2}>
                {
                  templateVariables.length > 0 ? (
                    templateVariables.map((v) => {
                      return (
                        <Grid item xs={12} sm={12} md={3}>
                          <SingleSelect key={v} templateVar={v}></SingleSelect>
                        </Grid>
                      )
                    })
                  ) : <div></div>
                }
              </Grid>
              {/* ------------------------ T E M P L A T E  V A R I B L E S  R O W --------------------------- */}

              {/* -------------------------------- T H E  B U T T O N  R O W ------------------------------------ */}
              <Grid container item>
                <Grid item xs={12}>
                  <GeneratePlothooksButton templateVars={templateVariables}></GeneratePlothooksButton>
                </Grid>
              </Grid>
              {/* -------------------------------- T H E  B U T T O N  R O W ------------------------------------ */}

              {/* -------------------------------- D I S P L A Y  R O W ------------------------------------ */}
              <Grid container item>
                <Grid item xs={12}>
                  <Display plothook={plothook}></Display>
                </Grid>
              </Grid>
              {/* -------------------------------- D I S P L A Y  R O W ------------------------------------ */}

            </Grid>
            {/* ----------- M E N U  C O L U M N ----------- */}

          </Grid>
          {/* ------------------------------- M A I N  R O W ---------------------------------- */}

        </Grid>
        {/* -------------------------------------------------- B O D Y ----------------------------------------------------- */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
