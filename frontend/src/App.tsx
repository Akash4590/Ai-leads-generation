import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/Forgotpassword"
import ResetPassword from "./pages/Resetpassword";
import NotFound from "./pages/Notfound";
import DashboardPage from "./pages/Dashboard";
import CreateProject from "./pages/Createproject";
import LeadDiscovery from "./pages/Leaddiscovery";
import WebsiteAudit from "./pages/WebsiteAudit";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> 
      <Route path="/forgotpassword" element={<ForgotPassword />} />
     <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/create-project" element={<CreateProject />} />
      <Route path="/leads-discovery" element={<LeadDiscovery />} />
      <Route path="/website-audit" element={<WebsiteAudit/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;