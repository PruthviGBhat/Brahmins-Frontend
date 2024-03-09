import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Routing from './Routing';

const Mainpage = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div className={`container ${showNav ? 'active' : ''}`}>
        <header className="text-gray-400 body-font shadow-lg">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link className="flex title-font font-medium items-center text-white mb-4 md:mb-0" to="/">
            <svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="currentColor"
className="w-6 h-6 text-black "
>
<path
  fillRule="evenodd"
  d="M2.25 4.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875V17.25a4.5 4.5 0 11-9 0V4.125zm4.5 14.25a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
  clipRule="evenodd"
/>
<path
  d="M10.719 21.75h9.156c1.036 0 1.875-.84 1.875-1.875v-5.25c0-1.036-.84-1.875-1.875-1.875h-.14l-8.742 8.743c-.09.089-.18.175-.274.257zM12.738 17.625l6.474-6.474a1.875 1.875 0 000-2.651L15.5 4.787a1.875 1.875 0 00-2.651 0l-.1.099V17.25c0 .126-.003.251-.01.375z"
/>
</svg>
              <span className="ml-3 text-2xl lg:text-3xl hover:cursor-pointer text-slate-900 font-bold">
                Brahmin's
              </span>
            </Link>
            <div className="md:hidden ml-auto">
              <button
                className="text-white bg-black border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-lg btn -ml-24"
                onClick={toggleNav}
              >
                {showNav ? <IoClose /> : <GiHamburgerMenu />}
              </button>
            </div>
            <nav
              className={`${
                showNav ? 'md:flex flex-col items-center' : 'hidden'
              } md:ml-auto md:flex flex-wrap items-center lg:text-lg md:text-base justify-center font-semibold md:overflow-hidden lg:overflow-visible`}
            >
              <Link className="my-3 md:my-0 md:mx-5 text-slate-900 hover:text-red-400 cursor-pointer hover:shadow-xl p-2" to="/Dishes">
                Dishes
              </Link>
              <Link
                className="my-3 md:my-0 md:mx-5 text-slate-900 hover:text-red-400 cursor-pointer hover:shadow-xl p-2"
                to="/Reservations"
              >
                Reservations
              </Link>
              <Link className="my-3 md:my-0 md:mx-5 text-slate-900 hover:text-red-400 cursor-pointer hover:shadow-xl p-2" to="/Contact">
                Contact
              </Link>
              <Link className="my-3 md:my-0 md:mx-5 text-slate-900 hover:text-red-400 cursor-pointer hover:shadow-xl p-2" to="/Orders">
                MyOrders
              </Link>
            </nav>
          </div>
        </header>
        <Routing />
      </div>
    </>
  );
};

export default Mainpage;

