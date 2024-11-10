"use client";

import React from 'react';

const Navbar = () => {
  return (
    <div>
      <div
        style={{
          overflow: 'hidden',
          height: '24px',
          paddingLeft: '0px',
          position: 'fixed',
          top: '20px',
          right: '20px',
          fontFamily: 'inter',
          fontWeight: '500',
          fontSize: '20px',
          lineHeight: '24.2px',
          display: 'flex',
          gap: '25px',
          zIndex: 10,
        }}
      >
        <a href="/" style={{ height: '25px', width: '61px' }}>
          Home
        </a>
        <a href="/about" style={{ height: '24px', width: '43px' }}>
          About
        </a>
        <a href="/contact" style={{ height: '24px', width: '77px' }}>
          Contact
        </a>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          div {
            top: 15px;
            right: 10px;
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          div {
            flex-direction: column;
            align-items: flex-end;
            gap: 15px;
            font-size: 16px;
            top: 15px;
            right: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Navbar;
