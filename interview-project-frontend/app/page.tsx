"use client"

import Element from "@/Components/Element";
import Header from "@/Components/Header";
import MainSidebar from "@/Components/MainSidebar";
import SidebarComponent from "@/Components/SidebarComponent";
import { useState } from "react";

export default function Home() {
  const [version, setVersion] = useState("0.1")
  const [component, setComponent] = useState("A")
  const [element, setElement] = useState("element-A1")

  return (
    <div className="bg-white">
      <main>
        <Header version={version} setVersion={setVersion} />
      </main>
      <div className="grid grid-cols-12">
        <MainSidebar version={version} setComponent={setComponent} component={component} />

        <SidebarComponent component={component} setElement={setElement} element={element} />

        <Element element={element} />
      </div>

    </div>
  );
}
