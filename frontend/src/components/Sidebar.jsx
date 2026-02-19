import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ isOpen, closeSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <h2>SustainAI</h2>
      <Link to="/" onClick={closeSidebar}>Dashboard</Link>
      <Link to="/input" onClick={closeSidebar}>Daily Input</Link>
      <Link to="/assistant" onClick={closeSidebar}>AI Assistant</Link>
      <Link to="/reports" onClick={closeSidebar}>Reports</Link>
    </div>
  );
}

export default Sidebar;
