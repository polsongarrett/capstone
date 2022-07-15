
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
  const templateDescription = useSelector(state => state.advTemplate.description);
  const template = useSelector(state => state.advTemplate.template);
  const templateVariables = Object.keys(template).length !== 0 ? template.variables : [];
  const plothook = useSelector(state => state.plothook.plothook);

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        {/* -------------------------------------------------- B O D Y ----------------------------------------------------- */}
        <Grid container>

          {/* -------------------------------H E A D E R  R O W ---------------------------------- */}
          <Grid item xs={12} pl={15} pr={15} pt={4} pb={6}>
            <Header />
          </Grid>
          {/* ------------------------------- H E A D E R  R O W ---------------------------------- */}
            
            {/* ------------------------------- M A I N  R O W ---------------------------------- */}
            <Grid container>

              {/* -------- F I L T E R S  C O L U M N -------- */}
              <Grid item xs={3} pl={15}>
                <Filters />
              </Grid>
              {/* -------- F I L T E R S  C O L U M N -------- */}
              
              {/* ----------- M E N U  C O L U M N ----------- */}
              <Grid item xs={9} pr={15}>

                {/* ------------------------------- A D V E N T U R E  R O W ---------------------------------- */}
                <Grid container mb={3}>

                  {/* -------- A D V.  S E L E C T  C O L U M N -------- */}
                  <Grid item xs={3}>
                    <AdventureTypeSelect />
                  </Grid>
                  {/* -------- A D V.  S E L E C T  C O L U M N -------- */}

                  {/* -------- A D V.  D E S C R.   C O L U M N -------- */}
                  <Grid item xs={9} pl={4}>
                    <Description description={advTypeDescription} theme={darkTheme} />
                  </Grid>
                  {/* -------- A D V.  D E S C R.   C O L U M N -------- */}

                </Grid>
                {/* ------------------------------- A D V E N T U R E  R O W ---------------------------------- */}

                {/* ------------------------------- T E M P L A T E  R O W ---------------------------------- */}
                <Grid container mb={3}>

                  {/* -------- C O L U M N --------- */}
                  <Grid item xs={3}>
                    <AdventureTemplateSelect />
                  </Grid>
                  {/* -------- C O L U M N --------- */}

                  {/* -------- C O L U M N --------- */}
                  <Grid item xs={9} pl={4}>
                    <Description description={templateDescription} />
                  </Grid>
                  {/* -------- C O L U M N --------- */}
                </Grid>
                {/* ------------------------------- T E M P L A T E  R O W ---------------------------------- */}

                {/* ------------------------ T E M P L A T E  V A R I B L E S  R O W --------------------------- */}
                <Grid container mb={3}>
                  {
                    templateVariables.length > 0 ? (
                      templateVariables.map((v) => {
                        return (
                          <Grid item xs={3} pr={4} pb={1}>
                            <SingleSelect key={v} templateVar={v}></SingleSelect>
                          </Grid>
                        )
                      })
                    ) : <div></div>
                  }
                </Grid>
                {/* ------------------------ T E M P L A T E  V A R I B L E S  R O W --------------------------- */}

                {/* -------------------------------- T H E  B U T T O N  R O W ------------------------------------ */}
                <Grid container mb={5}>
                  <Grid item xs={12}>
                    <GeneratePlothooksButton templateVars={templateVariables}></GeneratePlothooksButton>
                  </Grid>
                </Grid>
                {/* -------------------------------- T H E  B U T T O N  R O W ------------------------------------ */}

                {/* -------------------------------- D I S P L A Y  R O W ------------------------------------ */}
                <Grid container>
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
