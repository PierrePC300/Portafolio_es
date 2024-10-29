import { useState } from "react"


const Navbar = () => {

  const [isShowNav, setIsShowNav] = useState(false)

  const handleShowNav = () => {
    setIsShowNav(!isShowNav)

  }
         

  return (
    <header className="fixed flex justify-between py-4 px-2 text-2xl text-white 
     bg-inherit items-center w-full  md:px-4 md:py-0 bg-gradient-to-r from-blue-950
     via-sky-900 to-sky-600 opacity-98 z-20">
        <h1 className="font-semibold capitalize px-4">Portafolio</h1>

        <i onClick={handleShowNav} className="bx bx-menu 
        text-gray-300 text-2xl cursor-pointer md:hidden"></i>

        <nav className={`md:bg-inherit text-white absolute top-full 
        bg-slate-900 ${isShowNav ? "left-0" : "-left-full"} w-full grid text-lg px-2 
        gap-2 duration-100 md:static md:flex md:w-auto `}>
            <a onClick={handleShowNav} className="hover:bg-sky-100 hover:text-black rounded-md p-4 duration-100"  href="#presentation">Presentación</a>
            <a onClick={handleShowNav} className="hover:bg-sky-100  hover:text-black rounded-md p-4 duration-100 " href="#skills">Habilidades</a>
            <a onClick={handleShowNav} className="hover:bg-sky-100  hover:text-black rounded-md p-4 duration-100 " href="#projects">Proyectos</a>
            <a onClick={handleShowNav} className="hover:bg-sky-100  hover:text-black rounded-md p-4 duration-100 " href="#experience">Experiencia</a>
            <a onClick={handleShowNav} className="hover:bg-sky-100  hover:text-black rounded-md p-4 duration-100 " href="#contact">Contáctame</a>
        </nav>
    </header>
  )
}

export default Navbar