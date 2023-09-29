import SearchAppBar from "../assets/components/navbar";
import axios from "axios";
import {useState,useEffect} from 'react';
import {Box} from '@mui/material';
import BasicPagination from "../assets/components/pagination";
import CircularProgress from '@mui/material/CircularProgress';
import MyCard from '../assets/components/cards';
import Footer from '../assets/components/footer';


export default function Home () {
    const [data, setData] = useState({ hits: [] });
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      axios
        .get('https://hn.algolia.com/api/v1/search?query=')
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
        <SearchAppBar/>
        <Box>
      {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '5vh' }}>
            <CircularProgress />
          </Box>
      ) : (
        data.hits.map((item) => (
          <MyCard key={item.ObjectID} item={item} /> 
        ))
      )}
    </Box>
    <BasicPagination />
    <Footer />
        </>
    )
}




