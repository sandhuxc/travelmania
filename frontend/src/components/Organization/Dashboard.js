import React from 'react';
import { useRef } from 'react';
import heroVideo from '../../assets/video.mp4';

export default function Dashboard() {
  const videoRef = useRef();
  return (
    <div className='fixed items-end justify-center w-full h-screen text-center top-14 left-60'>
      <video
        ref={videoRef}
        src={heroVideo}
        autoPlay
        loop
        muted
        className='object-cover absolute -z-10'
      ></video>

      <div
        className={`p-8 flex flex-col items-center justify-center duration-500 w-full pr-56`}
      >
        <h1 className='text-5xl lg:text-7xl text-white'>Welcome to</h1>
        <h1 className='text-5xl lg:text-7xl capitalize mb-12 text-green-900'>
          <span className='text-thBlue font-bold'>Pakistan</span>
        </h1>
      </div>
    </div>
  );
}
