import React, { useState, useEffect } from 'react';

function Menu( params ) 
{
  const visible = params.show;
  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }

  console.log(visible);

  function Show() {
    return (
      <div className="menu ff-agdasima">
          <ul className="vlist-links fs-20">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Toddlers</li>
            <li>Infants</li>
          </ul>
      </div>
    );
  }

  const count = 0;
  return (
    <div>
      {visible && <Show />}
    </div>
  );
}

export default Menu;