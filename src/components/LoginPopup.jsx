import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import Loginn from "../icons/loginico";
import Usser from "../icons/user-plus";
import Cerrar from "../icons/cerrar";
import { useState, useEffect } from "react";
import "../resolucion/LoginPopup.css";

const LoginPopup = ({ onClose }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Agrega una pequeña demora para permitir la transición CSS
    const timeout = setTimeout(() => {
      setIsActive(true);
    }, 50);

    // Limpia el timeout al desmontar el componente
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`popup-container ${isActive ? "active" : ""}`}>
      <div className={`popup ${isActive ? "active" : ""}`}>
        <AiOutlineClose className="close-icon" onClick={() => onClose("close")} />
        <h2 className="text-[30px] font-bold">¿Qué deseas hacer?</h2>
        <div>
          <Link to="/login" className="flex gap-2 p-2 hover:bg-white hover:text-green-400 hover:text-center w-[90%]  rounded-xl ">
            <Loginn />
            <button onClick={() => onClose("login")} className="text-[20px] font-bold">Iniciar Sesión</button>
          </Link>
        </div>
        <div >
          <Link to="/login" className="flex gap-2 p-2  hover:bg-white hover:text-green-400 hover:text-center w-[90%] rounded-xl">
            <Usser />
            <button onClick={() => onClose("signup")} className="text-[20px] font-bold">Crear Cuenta</button>
          </Link>
        </div>
        <div className="flex gap-2 p-2  hover:bg-white hover:text-green-400 hover:text-center w-[90%] rounded-xl">
          <Cerrar />
          <button onClick={() => onClose("logout")} className="text-[20px] font-bold">Cerrar Sesión</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
