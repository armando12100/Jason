import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Tab from "./pages/Tab.jsx";
import Parks from "./pages/Parks.jsx";
import MyParks from "./pages/MyParks.jsx";
import Account from "./pages/Account.jsx";
import NationalParks from "./pages/NationalParks.jsx";
import SingleParkInfo from "./pages/SingleParkInfo.jsx";
import SingleParkPage from "./pages/SingleParkPage.jsx";
import Register from "./pages/Register.jsx";
import { AuthContextProvider } from "./context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tab" element={<Tab />} />
        <Route path="/parkss" element={<Parks />} />
        <Route path="/parks" element={<NationalParks />} />
        <Route path="/myparks/:id" element={<MyParks />} />
        <Route path="/account" element={<Account />} />
        <Route path="/parks/:state" element={<SingleParkInfo />} />
        <Route path="/parks/:state/:park" element={<SingleParkPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthContextProvider>
  </BrowserRouter>
);
