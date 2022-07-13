import { Typography } from '@mui/material';


export default function Description({description}) {
  return (

      <Typography style={{color: '#fff'}}>
        { description }
      </Typography>
  )
}