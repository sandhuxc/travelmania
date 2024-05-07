import React from 'react';
import { useRef } from 'react';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';

export default function Dashboard() {
  const videoRef = useRef();
  return (
    <>
      <LandingPageNavbar transparent />
      <div>hello traveler</div>
    </>
  );
}
