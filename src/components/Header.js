import React from 'react';

function Header() {
  return (
    <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
  );
}

export default Header;
