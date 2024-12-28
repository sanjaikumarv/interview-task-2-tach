"use client"

import StateProvider from "@/Components/context/StateContext";
import Element from "@/Components/Element";
import Header from "@/Components/Header";
import MainSidebar from "@/Components/MainSidebar";
import SidebarComponent from "@/Components/SidebarComponent";

export default function Home() {

  return (
    <div className="bg-white">
      <StateProvider>
        <main>
          <Header />
        </main>
        <div className="grid grid-cols-12">
          <MainSidebar />
          <SidebarComponent />
          <Element />
        </div>
      </StateProvider>

    </div>
  );
}
