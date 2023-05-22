
import DetailedSongView from './components/pages/SongDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/pages/Home"
import Login from './components/pages/Login'
import Singup from './components/pages/Singup'
import ProtectedRoute from './ProtectedRoute'


function App() {
 
  return (
      <Router>
        <Routes>
          <Route element={<Login />} path='/login'/>
          <Route element={<Singup />} path='/singup'/>
          <Route element={<ProtectedRoute />}>
          <Route element={<Home />} path='/'/>
          <Route element={<DetailedSongView />} path='/song/1'/>
          </Route>
      </Routes>
      </Router>
    // </Body>
  )
}

export default App
