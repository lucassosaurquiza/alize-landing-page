import Link from "next/link"
import MenuHamburger from "./MenuHamburger"

const HeaderComponent = () => {
  return (
    <>
      <header className="max-w-7xl m-auto bg-gray-900 flex items-center justify-between p-3 md:justify-between lg:justify-between">
        <div className="">
          <img className="h-20 w-20" src="/alize-logo.png" alt="" />
        </div>
        <div className="sm:hidden block">
          <MenuHamburger/>
        </div>
        <div className="gap-10 hidden sm:flex ">
          <Link href="/">
            <p className="text-white font-bold hover:text-gray-300">Inicio</p>
          </Link>
          <Link href="/">
            <p className="text-white font-bold hover:text-gray-300">Contacto</p>
          </Link>
          <Link href="/">
            <p className="text-white font-bold hover:text-gray-300">Nosotros</p>
          </Link>
        </div>
      </header>
    </>
  )
}

export default HeaderComponent