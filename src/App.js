import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingUpPage from "./pages/singUp/SingUpPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/cadastro" element={<SingUpPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
