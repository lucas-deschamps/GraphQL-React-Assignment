import React from 'react';

import logo from '../static/popsure-logo.png';

const Header = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center">
      <img alt="logo" src={logo} className="h-20 w-20 mt-8"/>
      <h1 className="m-8 font-medium font-mono">Get Popsure — Policy Info</h1>
    </div>
  )
};

export default Header;
