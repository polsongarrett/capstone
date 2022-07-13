import Typography from '@mui/material/Typography';

function Display({plothook}) {
  return (
    <>
      <Typography variant='h6' style={{color: '#Eaea79'}}>
        {plothook}
      </Typography>
    </>
  )
}

export default Display