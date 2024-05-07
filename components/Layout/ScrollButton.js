import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Link
      className='fixed container -right-3/4 top-12 h-5 text-5xl z-10 cursor-pointer'
      to='#'
    >
      <Icon
        className=' bg-orange-600 rounded-full'
        icon='material-symbols:arrow-upward-rounded'
        color='white'
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      />
    </Link>
  );
};

export default ScrollButton;
