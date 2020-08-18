import React from 'react';

function Navbar() {
  return(
    <div>
      <nav className="flex items-center flex-wrap p-6 navbar">
        <img src="./assets/images/vector.png" alt="arrow" />
        <a href="#" className="text-xl ml-auto">Help <img src="./assets/images/information-1.png" alt="info" /></a>
      </nav>
    </div>
  );
}

export default Navbar;