import React from 'react';
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
