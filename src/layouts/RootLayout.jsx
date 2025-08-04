// src/layouts/RootLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/global.css"; // om du vill ha globala stilar

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}
