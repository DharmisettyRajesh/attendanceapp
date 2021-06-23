import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import  AuthContext  from '../Context/context';
import './NavLinks.css';

const NavLinks = props => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          MIRACLE
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/firstyear" exact >FIRSTYEAR</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/secondyear">SECONDYEAR</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/thirdyear">THIRDYEAR</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/fourthyear">FOURTHYEAR</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
