import "./App.css";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Dashboard from "./Components/Dashboard";
import Landing from "./Components/Landing";
import GroupDetails from "./Components/GroupDetails/GroupDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/groupDetails/:id" element={<GroupDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
