import React from 'react';

function Navbar() {
  return(
    <nav className="flex items-center justify-between flex-wrap p-6 navbar">
      <img src="./assets/images/vector.png" alt="arrow" />
      <div className="ml-auto">
        <a href="#" className="text-xl">Help</a>
        <img src="./assets/images/information-1.png" alt="info" />
      </div>
    </nav>
  );
}

export default Navbar;