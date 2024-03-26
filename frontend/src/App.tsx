import "./App.css";
import SignUp from "./Components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<SignUp />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
