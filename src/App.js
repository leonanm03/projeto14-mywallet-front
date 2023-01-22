import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

// contexts
import { UserContext } from "./contexts/UserContext";

// pages
import SingInPage from "./pages/singIn/SingInPage";
import SingUpPage from "./pages/singUp/SingUpPage";
import HomePage from "./pages/Home/HomePage";
import NewChangePage from "./pages/newchange/newChangePage";

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
            <Route
              path="/nova-entrada"
              element={<NewChangePage type="in" pageName="Nova entrada" />}
            ></Route>
            <Route
              path="/nova-saida"
              element={<NewChangePage type="out" pageName="Nova saída" />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
