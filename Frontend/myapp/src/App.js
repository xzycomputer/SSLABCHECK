import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Chemicals from "./pages/Chemicals"
import Tools from "./pages/Tools"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={ <Login/> } />
        <Route path="/Home" element={ <Home/> } />
        <Route path="/" element={ <Home/> } />
        <Route path="/Chemicals" element={ <Chemicals/> } />
        <Route path="/Tools" element={ <Tools/> } />
      </Routes>
    </div>
  )
}

export default App