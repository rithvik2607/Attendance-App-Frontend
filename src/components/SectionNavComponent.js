import React from 'react';
import { NavLink } from 'react-router-dom';

function SectionNav() {
  return(
    <nav>
      <ul className="flex justify-between m-16">
        <li className="mr-3">
          <NavLink to="/scan" className="font-bold py-2 px-8 textColor" activeClassName="selected">SCAN</NavLink>
        </li>
        <li className="mr-3">
          <NavLink to="/logs" className="font-bold py-2 px-8 textColor" activeClassName="selected">LOGS</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default SectionNav;