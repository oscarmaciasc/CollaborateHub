import "./App.css";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Dashboard from "./Components/Dashboard";
import Landing from "./Components/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./Components/SearchBar/SearchBar";
import CssBaseline from "@mui/material/CssBaseline";

import { Box, Container } from "@mui/material";

function App() {
  return (
    <>
    <Container maxWidth={false} disableGutters>

      <CssBaseline />
      <SearchBar />
      <Box padding={8}>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </Router>
      </Box>
    </Container>
    </>
  );
}

export default App;
