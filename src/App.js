import './styles/App.css';
import { Route, Routes } from 'react-router-dom'
import  Movies  from './components/Movies'
import Home from './components/Home'
import Nav from './components/Nav'

function App() {
  return (
    <Routes>
      <Route path='/' element = {<Nav/>}/>
      <Route path='/home' element = {<Home/>}/>
      <Route path='/movies' element = {<Movies/>}/>
    </Routes>
  );
}

export default App;

///:movieId