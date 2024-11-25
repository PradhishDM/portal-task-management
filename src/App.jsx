import AdminPage from "./components/AdminPage";
import FirstPage from "./components/FirstPage";
import HomePage from "./components/HomePage";
import TaskAllocation from "./components/TaskAllocation";
import UserSignIn from "./components/UserSignIn";
import UserSignUp from "./components/UserSignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />}></Route>
          <Route path="/signin" element={<UserSignIn />}></Route>
          <Route path="/signup" element={<UserSignUp />}></Route>
          <Route path="/homepage" element={<HomePage />}></Route>
          <Route path="/adminpage" element={<AdminPage />}></Route>
          <Route path="/taskallocation" element={<TaskAllocation />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
