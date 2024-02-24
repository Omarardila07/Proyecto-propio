// NavBar.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../Img/Core.png";
import Loginico from "../icons/login";
import LoginPopup from "./LoginPopup";

const links = [
  {
    link: "/",
    text: "home",
    id: "1",
  },
  {
    link: "/about",
    text: "About Us",
    id: "2",
  },
  {
    link: "/contact",
    text: "Contact",
    id: "3",
  },
  {
    link: "/page",
    text: "Pages",
    id: "4",
  },
];

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [windowsDimension, setWindowsDimension] = useState({
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  });

  const detectSize = () => {
    setWindowsDimension({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handlePopupAction = (action) => {
    console.log("Acción seleccionada:", action);
    setShowPopup(false);
  };

  return (
    <div
      className={
        !isMenuOpen
          ? "flex items-center w-full px-4 justify-around bg-green-600"
          : "flex fixed flex-col h-full items-center w-full px-4 justify-around bg-green-600"
      }
    >
      <Link
        to={"/"}
        className="text-white flex gap-2 font-semibold text-xl p-2"
      >
        <img src={logo} alt="" className="w-[30px] h-[px]" />
        <h2 className="font-semibold">C-Core</h2>
      </Link>
      {windowsDimension.innerWidth > 768
        ? links.map((l) => (
            <Link
              className="text-xl text-white font-semibold p-1 rounded  hover:bg-white  hover:text-green-600 "
              to={l.link}
              key={l.id}
              onClick={closeMenu}
            >
              {l.text}
            </Link>
          ))
        : isMenuOpen &&
          links.map((l) => (
            <Link
              className="text-xl text-white font-semibold"
              to={l.link}
              key={l.id}
              onClick={closeMenu}
            >
              {l.text}
            </Link>
          ))}
      {!isMenuOpen && windowsDimension.innerWidth < 768 ? (
        <AiOutlineMenu
          cursor={"pointer"}
          size={24}
          color="#f2f2f2"
          onClick={() => setMenuOpen(true)}
        />
      ) : (
        windowsDimension.innerWidth < 768 && (
          <AiOutlineClose
            cursor={"pointer"}
            size={24}
            color="#f2f2f2"
            onClick={() => setMenuOpen(false)}
          />
        )
      )}
      <div className="login-button  " onClick={togglePopup}>
        <Loginico />
      </div>
      {showPopup && <LoginPopup onClose={handlePopupAction} />}
    </div>
  );
};

export default NavBar;
