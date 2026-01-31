import { Routes, Route } from "react-router-dom";
import Status from "./statusCheck/status";
import LogIn from "./pages/login";
import SignUp from "./pages/signup";
import Hero from "./pages/landing/Hero";

function App() {
  return (
    <>
      <Routes>
        {/* <Status /> */}
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
