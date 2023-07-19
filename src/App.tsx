import './App.css'
import Home from './pages/Home'
import EscapeRoomSaintEx from './pages/EscapeRoomSaintEx';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/escape-room-1" element={<EscapeRoomSaintEx />} />
        <Route path="/escape-room-2" element={<Home />} />
        <Route path="/escape-room-3" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
