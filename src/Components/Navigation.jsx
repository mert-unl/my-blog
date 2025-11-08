import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export default function Navigation(){

     const {user} = useContext(AppContext)


  const navClass = ({ isActive }) =>
  isActive
    ? "text-orange-400 font-semibold transition-colors duration-300"
    : "hover:text-orange-300 transition-colors duration-300 ease-in-out";
    return(
        <div className="navbar px-5 md:px-12 md:py-6 m-0 border-b-1  border-t-1 border-b-gray-500 fixed z-2 bg-black top-0 left-0 border-t-gray-500 justify-between ">
 
  
 <div className="md:hidden">
    <div className="dropdown ">
      <div tabIndex={0} role="button">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h12" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm  dropdown-content bg-base-100  rounded-box z-1 w-fit p-1 shadow">
             <li><Link to="/">Ana Sayfa</Link></li>
        <li><Link to="/poem">Şiirler</Link></li>
        <li><a>Hikayeler</a></li>
        <li><a>Dublajlar</a></li>
         <li><a>Çizimler</a></li>
        <li><a>Yazılar</a></li>

      </ul>
    </div>
  </div>

  <div className="hidden md:flex  justify-center gap-8 ">
   <NavLink className={navClass} to="/">Ana Sayfa</NavLink>
     <NavLink className={navClass} to="/poem">Şiirler</NavLink>
           <NavLink className={navClass} to="/stories">Hikayeler</NavLink>
     <NavLink className={navClass} to="dubs">Dublajlar</NavLink>
      <NavLink className={navClass} to="dubs">Çizimler</NavLink>
       <NavLink className={navClass} to="dubs">Yazılar</NavLink>

  </div>
  
  <div className="navbar-center">
    <a className="text-xl text-orange-300 font-semibold" href="https://my-portfolyo-taupe.vercel.app/">{user.name}</a>
  </div>
</div>
            )
}