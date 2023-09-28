import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/home';
import SearchResults from './pages/searchresults';
import NoPage from './pages/nopage';


export default function App() {
 
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/searchresults" element={<SearchResults />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}
