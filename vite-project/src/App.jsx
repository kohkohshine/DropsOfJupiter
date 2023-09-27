{/*import {useEffect, useState} from 'react';*/}
import SearchAppBar from './assets/components/navbar';
import Footer from './assets/components/footer';
import BasicPagination from './assets/components/pagination';
import MyCard from './assets/components/cards';
import * as data from './assets/components/mockupdata.json';



export default function App() { 
{/*const [data,setData] = useState([]);



useEffect (()=>{
  const url = 'https://gist.githubusercontent.com/MyElectricSheep/4f15c82c45409e06b220d4f7b67e1534/raw/106124f0632d8167001de62a12275dcbe660c2cd/hackernews.json';
  fetch(url)
  .then(response=>response.json())
  .then(newData=>setData(newData))
  .catch(error=>console.error('error',error))
}, []);*/}


return (
  <>
    <SearchAppBar />
    {data.hits.map((item) => (
      <MyCard key={item.ObjectID} item={item} /> 
    ))}
    <BasicPagination />
    <Footer />
  </>
);
}

