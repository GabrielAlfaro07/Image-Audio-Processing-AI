import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Toolbar from "./components/Toolbar";
import AudioScreen from "./screens/AudioScreen";
import HomeScreen from "./screens/HomeScreen";
import ImageScreen from "./screens/ImageScreen";

function App() {
  return (
    <BrowserRouter>
      <Toolbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/audio" element={<AudioScreen />} />
        <Route path="/images" element={<ImageScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
