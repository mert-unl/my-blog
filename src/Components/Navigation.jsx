import { Link } from "react-router-dom";

export default function Navigation(){

    return(
        <div className="navbar px-5 m-0 border-b-1  border-t-1 border-b-gray-500 border-t-gray-500 justify-between  ">
 
  
 <div className="">
    <div className="dropdown ">
      <div tabIndex={0} role="button">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h12" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm  dropdown-content bg-base-100  rounded-box z-1 w-fit p-1 shadow">
             <li><Link to="/">Ana Sayfa</Link></li>
        <li><Link to="/poem">Şiirler</Link></li>
        <li><a>Kısa Hikayeler</a></li>
        <li><a>Dublajlar</a></li>
      </ul>
    </div>
  </div>
  
  <div className="navbar-center">
    <a className="text-xl text-orange-300 font-semibold" href="https://my-portfolyo-taupe.vercel.app/">Mert ÜNAL</a>
  </div>
</div>
            )
}