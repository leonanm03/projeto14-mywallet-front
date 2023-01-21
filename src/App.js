import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

// contexts
import { UserContext } from "./contexts/UserContext";

// pages
import SingInPage from "./pages/singIn/SingInPage";
import SingUpPage from "./pages/singUp/SingUpPage";
import HomePage from "./pages/Home/HomePage";

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SingInPage />}></Route>
            <Route path="/cadastro" element={<SingUpPage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
