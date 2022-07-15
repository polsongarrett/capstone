import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';

function Display({plothook}) {
  const isTemplateError = useSelector(state => state.advTemplate.isError);
  const isVariableError = useSelector(state => state.advVariable.isError);
  const isError = isTemplateError && isVariableError === false;

  return (
    <>
      <Typography variant='h6' style={isError ? {color: 'red'} : {color: '#Eaea79'}}>
        {isError ? 'There was an error connecting to the database. Try again by refreshing the page and re-selecting your options.' : plothook}
      </Typography>
    </>
  )
}

export default Display