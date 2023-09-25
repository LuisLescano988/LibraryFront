import Home from './views/Home'
import Detail from './views/Detail'
import Login from './views/Login'
import SignUp from './views/Signup'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/home' element={<Home />} />
        <Route exact path='/home/:id' element={<Detail/>}/>
      </Routes>
    </>
    )
}

export default App