import React, { useState } from "react";
//import MobileHeader from "./mobileHeader/MobileHeader";

export const routes = [
  { name: "Agenda", href: "../components/Agenda.jsx" },
  { name: "Libros", href: "../components/Libros.jsx" },
  { name: "Contabilidad", href: "/contact" },
  { name: "Salones", href: "/events" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full overflow-hidden bg-[#BD89F1]">
      <div className="max-w-[1300px] mx-auto p-4">
        <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full mr-10">Agenda</button>
        <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full mr-10">Libros</button>
        <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full mr-10">Contabilidad</button>
        <button className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full mr-10">Salones</button>
      </div>
    </header>
  );
}
