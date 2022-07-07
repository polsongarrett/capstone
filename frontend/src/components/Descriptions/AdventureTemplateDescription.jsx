import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

export default function AdventureTemplateDescription() {
const description = useSelector(state => state.advTemplateDescription.description);

  return (
    <Typography>
      { description } 
    </Typography>
  )
}