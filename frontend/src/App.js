import { BrowserRouter as Router } from 'react-router-dom';
import Grid from '@mui/material/Grid';

import AdventureTemplateDescription from './components/Descriptions/AdventureTemplateDescription';
import AdventureTemplateSelect from './components/Selects/AdventureTemplateSelect';
import AdventureTypeDescription from './components/Descriptions/AdventureTypeDescription';
import AdventureTypeSelect from './components/Selects/AdventureTypeSelect';
import Filters from './components/Filters/Filters'
import Header from './components/Header'

function App() {
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
                  <Grid container >

                    {/* -------- A D V.  S E L E C T  C O L U M N -------- */}
                    <Grid item xs={2}>
                      <AdventureTypeSelect />
                    </Grid>
                    {/* -------- A D V.  S E L E C T  C O L U M N -------- */}

                    {/* -------- A D V.  D E S C R.   C O L U M N -------- */}
                    <Grid item xs={9} pl={4}>
                      <AdventureTypeDescription />
                    </Grid>
                    {/* -------- A D V.  D E S C R.   C O L U M N -------- */}

                  </Grid>
                  {/* ------------------------------- A D V E N T U R E  R O W ---------------------------------- */}

                  {/* ------------------------------- T E M P L A T E  R O W ---------------------------------- */}
                  <Grid container >
                    
                    {/* -------- C O L U M N --------- */}
                    <Grid item xs={2}>
                      <AdventureTemplateSelect />
                    </Grid>
                    {/* -------- C O L U M N --------- */}

                    {/* -------- C O L U M N --------- */}
                    <Grid item xs={9} pl={4}>
                      <AdventureTemplateDescription />
                    </Grid>
                    {/* -------- C O L U M N --------- */}
                  </Grid>
                  {/* ------------------------------- T E M P L A T E  R O W ---------------------------------- */}

                  {/* ------------------------ T E M P L A T E  O P T I O N S  R O W --------------------------- */}

                  {/* ------------------------ T E M P L A T E  O P T I O N S  R O W --------------------------- */}

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
