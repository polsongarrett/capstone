import Grid from '@mui/material/Grid';

import LocationFilter from './LocationFilter';
import ThemeFilter from './ThemeFilter';

export default function Filters() {
  return (
    <Grid container>
      <Grid item xs={12} pb={2}>
        <LocationFilter />  
      </Grid>
      <Grid item xs={12}>
        <ThemeFilter />
      </Grid>
    </Grid>
  );
}