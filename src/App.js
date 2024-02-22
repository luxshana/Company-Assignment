
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import MovieList from './components/Movielist';
import MovieDetails from './components/MovieDetails';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <ul className='navigation '>
     <li><Link to='/'>Movie List</Link></li>
      <li><Link to='/search'>search by Title</Link></li>
  
     </ul>
     <Routes>
      <Route path='/' element={<MovieList/>} />
      <Route path="/movies/:id" element={ <MovieDetails/>} />
      <Route path="/search" element={ <SearchPage/>} />
     </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
