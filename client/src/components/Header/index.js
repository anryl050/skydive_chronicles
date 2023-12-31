import React from 'react';
import Image from '../../images/white-slogan2.jpg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faHome,
  faUser,
  faList,
  faSun,
  faPlus,
  faRightToBracket,
  faUserPlus,
  faRightFromBracket,
  faAddressCard,
  faIdBadge,
} from '@fortawesome/free-solid-svg-icons'

import Auth from '../../utils/auth';

export default function Navbar({ fixed }) {

  const logoStyle = {
    height: '130px',
    width: '300x',
  };

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (

    <>
 <nav className="fixed top-0 z-30 w-full flex items-center justify-between bg-cyan-500 py-2 shadow-xl">
      <div className="containers flex flex-wrap items-center justify-between"> 
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a href="/" className="flex items-center"> 
            <img src={Image} className="" style={logoStyle} alt="Shifa Logo" />
          </a>
          <button
            className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FontAwesomeIcon
              icon={faBars}
              color="white"
            />
          </button>
        </div>

        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <section className="flex flex-col lg:flex-row list-none lg:ml-auto">
                {Auth.loggedIn() ? (
                  <>
                    <span  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white">Welcome {Auth.getProfile().data.firstName}!</span>
{/* Home Button*/}
                    <div
                      className="cursor-pointer px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      <FontAwesomeIcon
                        icon={faPlus}
                        color="white"
                        className=" text-lg leading-lg text-white opacity-75"
                      />

                      {/* use Link and use routes to match more closely to App.js */}
                      <Link to="/">
                      <span className="ml-2 text-white">Add Jump</span>
                      </Link>
                    </div>
{/* Profile Button */}
                    <div
                      className="cursor-pointer px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      <FontAwesomeIcon
                        icon={faUser}
                        color="white"
                        className=" text-lg leading-lg text-white opacity-75"
                      />

                      {/* use Link and use routes to match more closely to App.js */}
                      <Link to="/">
                      <span className="ml-2 text-white">Profile</span>
                      </Link>
                    </div>
{/* ID Badge */}
                    <div
                      className="cursor-pointer px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      <FontAwesomeIcon
                        icon={faList}
                        color="white"
                        className=" text-lg leading-lg text-white opacity-75"
                      />
                      {/* around span, add Link */}
                      <Link to="/">
                        <span className="ml-2 text-white" >{Auth.getProfile().data.firstName}'s Historic Jumps</span>
                      </Link>
                    </div>

                    <div
                      className="cursor-pointer px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      <FontAwesomeIcon
                        icon={faSun}
                        color="white"
                        className=" text-lg leading-lg text-white opacity-75"
                      />
                      <Link to="https://www.windy.com/?47.686,-122.299,5" target='_blank'>
                      <span className="ml-2 text-white" >Weather</span>
                      </Link>
                    </div>

                    <div
                      className="cursor-pointer px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        color="white"
                        className=" text-lg leading-lg text-white opacity-75"
                      />
                      <span className="ml-2" onClick={logout}>Logout</span>
                    </div>


                  </>
                ) : (
                  <>
                  {/* home link */}
                    <Link
                      className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/"
                    >
                      <FontAwesomeIcon
                        icon={faHome}
                        color="white"
                        className=" text-lg leading-lg text-white opacity-75"
                      />
                      <span className="ml-2">Home</span>
                    </Link>

                  {/* about link */}
                    <Link
                      className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/about"
                    >
                      <FontAwesomeIcon
                        icon={faAddressCard}
                        color="white"
                        className=" text-lg leading-lg text-white opacity-75"
                      />
                      <span className="ml-2">About FreeFall</span>
                    </Link>

                    {/* login link */}
                    <Link
                      className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/Login"
                    >
                      <FontAwesomeIcon
                        icon={faRightToBracket}
                        color="white"
                        className="text-lg leading-lg text-white opacity-75"
                      />
                      <span className="ml-2">Login</span>
                    </Link>

                    {/* signup link */}
                    <Link
                      className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/Signup"
                    >
                      <FontAwesomeIcon
                        icon={faUserPlus}
                        color="white"
                        className="text-lg leading-lg text-white opacity-75"
                      />
                      <span className="ml-2">Register</span>
                    </Link>

                  </>
                )}
              </section>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

