import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'
import Pnf from './pages/Pnf'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/recipes/:id/' element={<RecipeDetails/>} ></Route>
        <Route path='/*' element={<Pnf/>} ></Route>
      </Routes>
    </>
  )
}

export default App
