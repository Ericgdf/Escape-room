import './App.css'
import Home from './pages/Home'
import EscapeRoomSaintEx from './pages/EscapeRoomSaintEx';
import EscapeRoomHere from './pages/EscapeRoomHere';
import EscapeRoomZoom from './pages/EscapeRoomZoom';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/escape-room-1" element={<EscapeRoomSaintEx />} />
        <Route path="/escape-room-2" element={<EscapeRoomHere />} />
        <Route path="/escape-room-3" element={<EscapeRoomZoom />} />
      </Routes>
    </>
  )
}

export default App
