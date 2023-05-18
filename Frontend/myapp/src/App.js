import { Routes, Route } from "react-router-dom"
import Login from "./pages/userpage/Login"
import Home from "./pages/userpage/Home"
import Chemicals from "./pages/userpage/Chemicals"
import Tools from "./pages/userpage/Tools"
import Reserve from "./pages/userpage/Reserve"
import Adminhome from "./pages/adminpage/Adminhome"
import AdminChemicals from "./pages/adminpage/AdminChemicals"
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  const token = localStorage.getItem('accessToken');
  const role = localStorage.getItem('role')

  if (!token) {
    return <Login />
  }

  if (role == "user") {
    return (
      <div className="App">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Chemicals" element={<Chemicals />} />
            <Route path="/Tools" element={<Tools />} />
            <Route path="/Reserve" element={<Reserve />} />
          </Routes>
        </LocalizationProvider>
      </div>

    )
  }
  else if (role == "admin") {
    return (
      <div className="App">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Routes>
            <Route path="/" element={<Adminhome />} />
            <Route path="/Home" element={<Adminhome />} />
            <Route path="/Chemicals" element={<AdminChemicals />} />
            <Route path="/Tools" element={<Tools />} />
            <Route path="/Reserve" element={<Reserve />} />
          </Routes>
        </LocalizationProvider>
      </div>

    )
  }



}

export default App