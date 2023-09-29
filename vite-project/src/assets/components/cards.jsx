/* eslint-disable react/prop-types */
import { Card, CardContent, Typography, Link } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function MyCard({ item }) {

  return (
    <Card className='card'  sx={{ display: 'flex', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', marginTop: '16px',}}>
      {/* Card Content */}
      <CardContent sx={{ flex: 1 }}>
        {/* Title */}
        <Typography variant="h6" component="div">
          {item.title}
        </Typography>

  
       {/* Points & Author */}
      <Typography variant="body2" color="textSecondary">
        {item.points} points by {item.author}
        </Typography>

        {/* Created At */}
        <Typography variant="body2" color="textSecondary">
          Created At: {new Date(item.created_at).toLocaleDateString()}
        </Typography>

        {/* Link to the Article */}
        <Link href={item.url} target="_blank" rel="noopener noreferrer" color="primary">
        <Stack spacing={2} direction="row" sx={{marginTop:'10px'}}>
      <Button variant="contained" sx={{fontSize:'12px'}}>Read More</Button>
    </Stack>
        </Link>
  

      </CardContent>
    </Card>
  );
}