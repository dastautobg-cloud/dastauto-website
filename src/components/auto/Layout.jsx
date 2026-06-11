import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import FloatingActions from "./FloatingActions";

export default function Layout() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <NavBar />
      <main className="pt-[72px]">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}