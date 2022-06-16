import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

export default function AdventureTypeDescription() {
const description = useSelector(state => state.advTypeDescription.description);

  return (
    <Typography>
      { description } 
    </Typography>
  )

}