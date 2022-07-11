import { BrowserRouter as Router } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

import AdventureTemplateSelect from './components/Selects/AdventureTemplateSelect';
import AdventureTypeSelect from './components/Selects/AdventureTypeSelect';
import Description from './components/Description';
import Filters from './components/Filters/Filters';
import Header from './components/Header';
import SingleSelect from './components/Selects/SingleSelect';

function App() {
  const advTypeDescription = useSelector(state => state.advType.description);
  const templateDescription = useSelector(state => state.advTemplate.description);
  const variables = useSelector(state => state.advTemplate.variables);
  return (
    <>
      <Router>
        {/* -------------------------------------------------- B O D Y ----------------------------------------------------- */}
        <Grid container>

          {/* -------------------------------H E A D E R  R O W ---------------------------------- */}
          <Grid item xs={12} pl={4} pt={4} pb={6}>
            <Header />
          </Grid>
          {/* ------------------------------- H E A D E R  R O W ---------------------------------- */}
            
            {/* ------------------------------- M A I N  R O W ---------------------------------- */}
            <Grid container>

              {/* -------- F I L T E R S  C O L U M N -------- */}
              <Grid item xs={3} pl={4}>
                    <Filters />
              </Grid>
              {/* -------- F I L T E R S  C O L U M N -------- */}
              
              {/* ----------- M E N U  C O L U M N ----------- */}
              <Grid item xs={9}>

                  {/* ------------------------------- A D V E N T U R E  R O W ---------------------------------- */}
                  <Grid container mb={3}>

                    {/* -------- A D V.  S E L E C T  C O L U M N -------- */}
                    <Grid item xs={2}>
                      <AdventureTypeSelect />
                    </Grid>
                    {/* -------- A D V.  S E L E C T  C O L U M N -------- */}

                    {/* -------- A D V.  D E S C R.   C O L U M N -------- */}
                    <Grid item xs={9} pl={4}>
                      <Description description={advTypeDescription} />
                    </Grid>
                    {/* -------- A D V.  D E S C R.   C O L U M N -------- */}

                  </Grid>
                  {/* ------------------------------- A D V E N T U R E  R O W ---------------------------------- */}

                  {/* ------------------------------- T E M P L A T E  R O W ---------------------------------- */}
                  <Grid container mb={3}>
                    
                    {/* -------- C O L U M N --------- */}
                    <Grid item xs={2}>
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
                      variables.length > 0 ? (
                        variables.map((v) => {
                          return <SingleSelect key={v} templateVar={v}></SingleSelect>
                        })
                      ) : <div>No Variables</div> 
                    }
                  </Grid>
                  {/* ------------------------ T E M P L A T E  V A R I B L E S  R O W --------------------------- */}

                  {/* -------------------------------- D I S P L A Y  R O W ------------------------------------ */}

                  {/* -------------------------------- D I S P L A Y  R O W ------------------------------------ */}

              </Grid>
              {/* ----------- M E N U  C O L U M N ----------- */}

            </Grid>
            {/* ------------------------------- M A I N  R O W ---------------------------------- */}

        </Grid>
        {/* -------------------------------------------------- B O D Y ----------------------------------------------------- */}

      </Router>
    </>
  );
}

export default App;
