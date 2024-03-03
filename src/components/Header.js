import React, { useState, useEffect } from "react";
import { LuMenu } from "react-icons/lu";
import { VscClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/AuthSlice";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-flat.jpeg";
import { GoPerson } from "react-icons/go";
import { MdLogout } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";

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
  // console.log("userData in header:", userData);
  const userRole = userData?.role || ""; // Set an initial value for userRole

  const dispatch = useDispatch();

  const handleLogout = () => {
    // Use window.confirm to show a confirmation dialog
    const confirmed = window.confirm("Are you sure you want to logout?");

    if (confirmed) {
      // User clicked OK in the confirmation dialog
      goLogout();
    } else {
      // User clicked Cancel
      console.log("Logout canceled");
    }
  };

  const goLogout = () => {
    dispatch(logout());
  };
  const handleCloseAfterRoute = () => {
    setSideMenu(!sidemenu);
  };

  return (
    // <div
    //   className={`justify-between z-50 flex px-3 sm:px-10 md:16 text-center items-center fixed w-full transition ${
    //     scrolled
    //       ? "bg-black py-2 pb-3 bg-opacity-70 rounded-b-3xl rounded-bl-3xl transition-all duration-500 ease-in"
    //       : "bg-transparent bg-opacity-30 sm:py-4 py-2 rounded-b-3xl rounded-bl-3xl transition-all duration-500 ease-out"
    //   }`}
    // >
    <div
      className={`justify-between z-50 flex px-3 sm:px-10 md:16 text-center items-center fixed w-full transition bg-white  py-2 pb-3  transition duration-300 ease-in ${
        scrolled
          ? "bg-opacity-70 border transition duration-300"
          : "bg-opacity-0 transition duration-300"
      } `}
    >
      <div className="group font-bold flex flex-col sm:text-5xl text-2xl text-center ">
        <Link
          className={`text-transparent bg-clip-text bg-gradient-to-r from-black to-primary duration-500 ease-out  `}
          to={"/"}
        >
          <img className="w-16" src={logo} alt="Eyoon Specs" />
        </Link>
        <span
          className={`w-0 h-[1px] bg-black duration-400 transition-all group-hover:w-full ${
            scrolled ? "bg-white" : "bg-black"
          }`}
        ></span>
      </div>
      <ul className="justify-normal md:gap-4 gap-2 md:text-base text-sm  font-semibold text-white md:flex hidden">
        {/* <li>
          <Link
            className={`px-4 py-2 rounded-xl transition duration-300 ${
              scrolled
                ? " text-white duration-500 ease-in hover:bg-white hover:text-black"
                : " text-black duration-500 ease-out hover:bg-primary hover:text-white"
            }`}
            to={"/"}
          >
            Home
          </Link>
        </li> */}
        <li>
          <Link
            className={`px-4 py-2 rounded-xl transition duration-300 text-black duration-500 ease-out hover:bg-primary hover:text-whit`}
            // to={"/events"}
          >
            Glasses
          </Link>
        </li>
        <li>
          <Link
            className={`px-4 py-2 rounded-xl transition duration-300 text-black duration-500 ease-out hover:bg-primary hover:text-whit`}

            // to={"/about"}
          >
            Sunglasses{" "}
          </Link>
        </li>
        <li>
          <Link
            className={`px-4 py-2 rounded-xl transition duration-300 text-black duration-500 ease-out hover:bg-primary hover:text-whit`}

            // to={"/about"}
          >
            Contact Lenses{" "}
          </Link>
        </li>
        {userRole === "Admin" && (
          <li>
            <Link
              className={`px-4 py-2 rounded-xl transition duration-300 text-black duration-500 ease-out hover:bg-primary hover:text-whit`}
              to={"/addevent"}
            >
              Add Event
            </Link>
          </li>
        )}
      </ul>

      {sidemenu ? (
        <VscClose
          className={`font-semibold md:hidden block sm:text-4xl text-2xl transition ${
            scrolled
              ? "text-white duration-500 ease-in"
              : "text-black duration-500 ease-out"
          }`}
          onClick={handleCloseAfterRoute}
        />
      ) : (
        <LuMenu
          className={`font-semibold md:hidden block sm:text-4xl text-2xl transition ${
            scrolled
              ? "text-white duration-500 ease-in"
              : "text-black duration-500 ease-out"
          }`}
          onClick={() => setSideMenu(!sidemenu)}
        />
      )}

      {sidemenu && (
        <ul className="absolute border-black border-l border-b rounded-bl-xl rounded-tr-xl w-40 sm:top-16 top-14 right-0 px-4 py-2 bg-white justify-normal gap-4 text-lg font-bold text-white md:hidden block">
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
          {/* <li className="hover:bg-primary px-3 py-1 text-black border-b border-black transition duration-300">
            <Link to={"/about"} onClick={handleCloseAfterRoute}>
              About
            </Link>
          </li> */}
          {userRole === "Admin" && (
            <li className="hover:bg-primary px-3 py-1 text-black border-b border-black transition duration-300">
              <Link to={"/addevent"} onClick={handleCloseAfterRoute}>
                Add Event
              </Link>
            </li>
          )}
          {!userData ? (
            <li className="hover:bg-primary px-3 py-1 text-black  transition duration-300">
              <Link to={"/signup"} onClick={handleCloseAfterRoute}>
                JOIN NOW
              </Link>
            </li>
          ) : (
            <li className="hover:bg-primary px-3 py-1 text-black transition duration-300">
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      )}
      <div className=" justify-center gap-x-2 md:flex hidden">
        <div className="">
          <Link to={"/signup"}>
            <IoIosSearch className="text-2xl" />
          </Link>
        </div>
        <div className="">
          {!userData ? (
            <Link to={"/signup"}>
              <GoPerson className="text-2xl" />
            </Link>
          ) : (
            <button onClick={handleLogout}>
              {/* LOGOUT {userData.name && `(${userData.name})`} */}
              <MdLogout className="text-2xl" />
            </button>
          )}
        </div>
        <div className="">
          <Link to={"/signup"}>
            <IoBagHandleOutline className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
