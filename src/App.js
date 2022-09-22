import './styles/App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Nav from './components/Nav'
import Genres from './components/Genres'
import Genre from './components/Genre'
import MovieDetails from './components/MovieDetails'

function App(props) {
  return (
    <div>
      <Nav />
      <Routes>
        <Route exact path='/' element = {<Home />} />
        <Route path = '/explore' element = {<Genres />} />
        <Route path = '/genre/:id' element = {<Genre />} />
        <Route path = '/movie/:id' element = {<MovieDetails />} />
      </ Routes>
    </div>
  );
}

export default App;

///:movieId