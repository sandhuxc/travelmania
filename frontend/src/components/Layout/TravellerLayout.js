import React from 'react';
import SideNav from '../Sidenav/TravellerSideNav';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
const layout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <div>
          {/* body */}
          {/* Component  */}
          <div className='w-full'>
            <Component {...props} />
            {/* Component end */}
          </div>
        </div>
      </>
    );
  };

export default layout;
