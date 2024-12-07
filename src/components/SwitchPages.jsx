import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./Login/Login"
import RegistrationForm from "./Registration/RegistrationForm"
import Header from "./Header"
import ObjectsPage from "./MainPage/Objects"
import ObjectPage from "./ObjectPage/ObjectPage"

export default function SwitchPages() {
    return (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<ObjectsPage />} />
            <Route path="/registration" element={<RegistrationForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/obj" element={<ObjectPage />} />
          </Routes>
        </Router>
      );
}