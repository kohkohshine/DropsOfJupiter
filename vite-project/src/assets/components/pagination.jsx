/* eslint-disable react/prop-types */
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


export default function BasicPagination( ) {

 

  return (
    <Stack spacing={2} sx={{ margin: '16px' }}>
      <Pagination count={10} />
    </Stack>
  );
}