import './App.css'
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage'
import Cart from './pages/Cart';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component={Homepage} />
        <Route path='/cart' Component={Cart} />
      </Routes>
    </>
  )
}

export default App
