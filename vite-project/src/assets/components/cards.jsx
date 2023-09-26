import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';


function MyCard() {
  return (
    <Card className='card'>
      <CardHeader
        title="Card Header Title"
        subheader="Subheader"
      />
      <CardContent>
        {/* Your card content goes here */}
      </CardContent>
    </Card>
  );
}

export default MyCard;
