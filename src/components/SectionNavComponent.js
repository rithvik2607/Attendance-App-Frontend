import React from 'react';

function SectionNav() {
  return(
    <nav className="sectionNav">
      <ul class="flex justify-between m-16">
        <li class="mr-3">
          <a class="inline-block font-bold py-2 px-4 textColor" href="#">SCAN</a>
        </li>
        <li class="mr-3">
          <a class="inline-block font-bold py-2 px-4 textColor" href="#">LOGS</a>
        </li>
      </ul>
    </nav>
  );
}

export default SectionNav;