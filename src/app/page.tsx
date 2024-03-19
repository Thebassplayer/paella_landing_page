import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <header className="flex h-[143px] w-full flex-row border-2 border-gray-200">
        <h1 className="font-rm text-4xl text-black">Paella</h1>
        <nav className="flex-rw flex w-full grow items-center justify-between">
          <ul className="font-rd text-dark  flex flex-row space-x-4">
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
          <button className="bg-accent rounded-sm border-2 px-8 py-2">
            Reservas
          </button>
        </nav>
      </header>
    </main>
  );
}
