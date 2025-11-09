import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function NotFound() {
     const navigate = useNavigate();

  useEffect(() => {
    const delay = setTimeout(() => navigate("/"), 5000);
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="h-screen px-4 flex flex-col justify-center items-center text-center">
    
      <h1 className="text-5xl md:text-8xl font-bold ">404</h1>
      <h2 className="text-3xl md:text-5xl font-bold py-12">Opps! Sayfa Bulunamadı :/</h2>

      <p className="md:text-2xl mb-6">Kaybolmuş görünüyorsun. Birazdan seni otomatik olarak ana sayfaya yönlendiriyorum.</p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-4 bg-gray-800 text-orange-400 cursor-pointer hover:text-orange-300 mt-12 font-bold text-xl rounded-xl"
      >
        Ana Sayfaya Git
      </button>
    </div>
  );
}

export default NotFound