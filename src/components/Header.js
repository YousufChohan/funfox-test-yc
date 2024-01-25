import React, { useState, useEffect } from "react";
import { LuMenu } from "react-icons/lu";
import { VscClose } from "react-icons/vsc";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/AuthSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidemenu, setSideMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  const handleCloseAfterRoute = () => {
    setSideMenu(!sidemenu);
  };

  return (
    <div
      className={`justify-between z-50 flex px-3 sm:px-16 text-center items-center fixed w-full transition ${
        scrolled
          ? "bg-black py-2 pb-3 bg-opacity-70 rounded-b-3xl rounded-bl-3xl transition-all duration-500 ease-in"
          : "bg-transparent py-6 transition-all duration-500 ease-out"
      }`}
    >
      <p
        className={`font-bold  sm:text-5xl text-2xl text-center ${
          scrolled
            ? " text-white duration-500 ease-in"
            : " text-black duration-500 ease-out"
        }`}
      >
        LOGO
      </p>
      <ul className="justify-normal gap-4 text-lg font-bold text-white sm:flex hidden">
        <li>
          <Link
            className={`hover:bg-primary px-3 py-1 rounded-xl transition duration-300 ${
              scrolled
                ? " text-white duration-500 ease-in"
                : " text-black duration-500 ease-out"
            }`}
            to={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`hover:bg-primary px-3 py-1 rounded-xl transition duration-300 ${
              scrolled
                ? " text-white duration-500 ease-in"
                : " text-black duration-500 ease-out"
            }`}
            to={"/events"}
          >
            Events
          </Link>
        </li>
      </ul>

      {sidemenu ? (
        <VscClose
          className={`font-semibold sm:hidden block sm:text-4xl text-2xl transition ${
            scrolled
              ? "text-white duration-500 ease-in"
              : "text-black duration-500 ease-out"
          }`}
          onClick={handleCloseAfterRoute}
        />
      ) : (
        <LuMenu
          className={`font-semibold sm:hidden block sm:text-4xl text-2xl transition ${
            scrolled
              ? "text-white duration-500 ease-in"
              : "text-black duration-500 ease-out"
          }`}
          onClick={() => setSideMenu(!sidemenu)}
        />
      )}

      {sidemenu && (
        <ul className="absolute border-black border-l border-b rounded-bl-xl rounded-tr-xl w-40 sm:top-16 top-14 right-0 px-4 py-2 bg-white justify-normal gap-4 text-lg font-bold text-white sm:hidden block">
          <li className="hover:bg-primary px-3 py-1  text-black border-b border-black transition duration-300">
            <Link to={"/"} onClick={handleCloseAfterRoute}>
              Home
            </Link>
          </li>
          <li className="hover:bg-primary px-3 py-1 text-black border-b border-black transition duration-300">
            <Link to={"/events"} onClick={handleCloseAfterRoute}>
              Events
            </Link>
          </li>
          {!userData ? (
            <li className="hover:bg-primary px-3 py-1 text-black  transition duration-300">
              <Link to={"/signup"} onClick={handleCloseAfterRoute}>
                JOIN BETI
              </Link>
            </li>
          ) : (
            <li className="hover:bg-primary px-3 py-1 text-black transition duration-300">
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      )}
      <div className="sm:block hidden">
        {!userData ? (
          <Button link={"/signup"}>JOIN BETI</Button>
        ) : (
          <button onClick={handleLogout}>
            <Button>LOGOUT</Button>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
