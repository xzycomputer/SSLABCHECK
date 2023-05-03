import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Login" element={ <Login/> } />
        <Route path="/Home" element={ <Login/> } />
      </Routes>
    </div>
  )
}

export default App