import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Chemicals from "./pages/Chemicals"
import Tools from "./pages/Tools"
import Reserve from "./pages/Reserve"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  const token = localStorage.getItem('accessToken');

  if(!token) {
    return <Login />
  }

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="/Home" element={ <Home/> } />
            <Route path="/Chemicals" element={ <Chemicals/> } />
            <Route path="/Tools" element={ <Tools/> } />
            <Route path="/Reserve" element={ <Reserve/> } />
          </Routes>
      </LocalizationProvider>
    </div>
  )
}

export default App