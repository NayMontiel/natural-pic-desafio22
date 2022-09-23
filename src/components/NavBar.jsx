import React from "react";
import {Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className="navBar p-3 mt-2 d-flex justify-content-center">
      <div>
        <Link 
          to="/" 
          className="link mx-3"
        >
         Home
        </Link>
        |

        <Link 
          to="/favoritos" 
          className="link mx-3 "
        >
        Favoritos
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
