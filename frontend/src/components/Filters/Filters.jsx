import Grid from '@mui/material/Grid';

import LocationFilter from './LocationFilter';
import ThemeFilter from './ThemeFilter';

export default function Filters() {
  return (
    <Grid container rowSpacing={3}>
      <Grid item xs={12} sm={6} md={12}>
        <LocationFilter />  
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
        <ThemeFilter />
      </Grid>
    </Grid>
  );
}