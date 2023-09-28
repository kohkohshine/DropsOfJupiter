import { useEffect, useState } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import MyCard from '../assets/components/cards';
import SearchAppBar from '../assets/components/navbar';
import { Pagination, Typography } from '@mui/material';
import Footer from '../assets/components/footer';
import { Box } from '@mui/material';



export default function SearchResults() {
  const [data, setData] = useState({ hits: [] });
  const [loading, setLoading] = useState(true);

  

  useEffect((query) => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?query=${query}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('error', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <SearchAppBar />
      {/* Display search results */}
      <div>
        {loading ? (
            <Box style={{display:'flex', justifyContent:'center'}}>
          <CircularProgress />
          </Box>
        ) :(
            <>
              <Typography><h2>Search Results</h2></Typography>
              {data.hits.map((item) => <MyCard key={item.objectID} item={item} />)}
            </>
        )}
      </div>

      <Pagination sx={{margin:'16px'}} count={10} />
      <Footer />
    </>
  );
}
