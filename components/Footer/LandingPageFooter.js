import React from 'react';

function LandingPageFooter() {
  return (
    <footer className='relative bg-gray-900 pt-8 pb-6'>
      <div className='container mx-auto px-4'>
        <hr className='my-6 border-gray-400' />
        <div className='flex flex-wrap items-center md:justify-between justify-center'>
          <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
            <div className='text-sm text-gray-600 font-semibold py-1'>
              Copyright © {new Date().getFullYear()} Three's Company
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default LandingPageFooter;
