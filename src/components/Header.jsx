import HeaderLink from "./headerLink/HeaderLink";


export const routes = [
  { name: "Agenda", href: "/" },

  { name: "Libros", href: "/libros" },

  { name: "Contabilidad", href: "/contabilidad" },

  { name: "Salones", href: "/salones" },

];

export default function Header() {
  //const [open, setOpen] = useState(false);
  return (
    <header className="w-full overflow-hidden bg-[#BD89F1] font-poppins">

      <div className="max-w-[675px] mx-auto p-4">

        <nav className= "hidden md:flex justify-between">

          <div className="flex space-x-14">

            {routes.map((route, idx) => (

              <HeaderLink route={route} key={idx} />

            ))}

          </div>

        </nav>

      </div>

    </header>

  );

}
