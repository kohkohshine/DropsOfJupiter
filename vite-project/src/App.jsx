import {useEffect, useState} from 'react';
import SearchAppBar from './assets/components/navbar';
import Footer from './assets/components/footer';
import BasicPagination from './assets/components/pagination';
import MyCard from './assets/components/cards';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { responsiveFontSizes } from '@mui/material';
{/*import * as data from './assets/components/mockupdata.json';*/}



export default function App() { 
const [data,setData] = useState({ hits: [] });  
const [loading,setLoading] = useState(true);

useEffect(()=> {
axios
.get('http://hn.algolia.com/api/v1/search?query=')
.then((response) => {setData(response.data);setLoading(false)})
.catch((error) => {console.error('error',error);setLoading(false)})
},[])




{/*useEffect (()=>{
  const url = 'http://hn.algolia.com/api/v1/search?query=';
  fetch(url)
  .then(response=>response.json())
  .then(newData=>setData(newData))
  .catch(error=>console.error('error',error))
}, []);*/}


return (
  <>
    <SearchAppBar />
    {loading 
    ? ( <Box sx={{ display: 'flex',justifyContent: 'center', marginTop: '5vh' }}>
      <CircularProgress />
    </Box> ) 
    : (data.hits.map((item) => 
      <MyCard key={item.ObjectID} item={item} /> 
    ))}
    <BasicPagination />
    <Footer />
  </>
);
}

