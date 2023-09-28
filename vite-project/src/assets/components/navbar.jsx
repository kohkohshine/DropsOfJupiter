import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import axios from 'axios';
import MyCard from './cards';
import { Link, useNavigate} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

 

  const fetchData = (query) => {
    setLoading(true);
    const url = `http://hn.algolia.com/api/v1/search?query=${query}`;
    axios.get(url)
      .then((response) => {
        const results = response.data.hits;
        setData(results);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const handleChange = (value) => {
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(input);
    setInput('');
    navigate(`/searchresults?query=${input}`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}
          >
            <Link style={{ textDecoration: 'none', color: 'white' }}  to='/home'>  Hacker News  </Link> 
            <nav>
              <ul style={{ listStyle: 'none' }}>
                <li>
                  <Link style={{ textDecoration: 'none', color: 'white' }} to="/home">Home</Link>
                </li>
              </ul>
            </nav>
          </Typography>
          <Search>
            <SearchIconWrapper>
              {loading ? <CircularProgress size={24} color="inherit" /> : <SearchIcon />}
            </SearchIconWrapper>
            <form onSubmit={handleSubmit}>
              <StyledInputBase
                value={input}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Type to search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </form>
          </Search>
        </Toolbar>
      </AppBar>
      {/* Display search results */}
      <div>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '5vh' }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            {data.map((item) => (
              <div key={item.objectID}>
                <MyCard item={item} />
              </div>
            ))}
          </>
        )}
      </div>
    </Box>
  );
}
