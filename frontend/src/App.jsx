
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import InputPage from "./pages/InputPage";
import Reports from "./pages/Reports";
import Assistant from "./pages/Assistant";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <div className="appContainer">
        <button className="mobileMenuBtn" onClick={toggleSidebar}>
          ☰
        </button>
        <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
        <div className="mainContent">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/input" element={<InputPage />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/assistant" element={<Assistant />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
