import React from 'react';
import styled from '@emotion/styled';

//Changes done by me are Noted in as comments :)
const Navbar = styled('nav')(() => ({
  backgroundColor: '#333',
  color: '#fff',
  width: '100%',
  position: 'sticky', // Changed from 'absolute' to 'sticky'
  top: 0,
  left: 0,
  zIndex: 1000,
  padding: '10px 20px', // Added padding for better spacing
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' // Added shadow for better visibility
}));

const ListItem = styled('li')(() => ({
  display: 'inline-block',
  marginRight: '20px',
  fontSize: '18px',
  cursor: 'pointer',
}));

const Link = styled('a')(() => ({
  color: '#fff',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
}));

const TopNavbar = () => {
  return (
    <Navbar>
      <ul style={{ padding: 0, margin: 0 }}>
        <ListItem>
          <Link href={'/'}>Home</Link>
        </ListItem>
        <ListItem>
          <Link href={'/users'}>Users</Link>
        </ListItem>
      </ul>
    </Navbar>
  );
};

export default TopNavbar;
