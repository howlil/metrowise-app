import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";


export default function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<AuthPage/>} />
            <Route path="/dashboard" element={<DashboardPage/>} />
        </Routes>
      </Router>
    </>
  )
}
