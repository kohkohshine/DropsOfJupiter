import { Routes, Route } from 'react-router-dom';
import Home from './home';
import SearchResults from './searchresults';
import NoPage from './nopage';


export default function Layout() {
  return (
    <>
    
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/searchresults" element={<SearchResults />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}
