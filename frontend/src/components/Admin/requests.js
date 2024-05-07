import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
import { Icon } from '@iconify/react';
import bgImage from '../../assets/bgImagePackage.jpg';
import LandingPageFooter from '../Footer/LandingPageFooter';
import ReqTourGuides from './reqTourGuides';
import ReqTourOrg from './reqTourOrg';

const Requests = () => {
  document.body.style.zoom = '90%';
  const cookies = new Cookies();
  let token = cookies.get('token');
  let navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Tab 1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    if (activeTab === 'Tab 1') {
      return <ReqTourGuides />;
    } else if (activeTab === 'Tab 2') {
      return <ReqTourOrg />;
    }
    // Add more tab options here if needed
  };

  return (
    <>
      <LandingPageNavbar transparent />
      <div
        className='bg-center bg-no-repeat w-full h-full'
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div>
          <div>
            <h3 className='md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white items-center content-center m-auto text-center pt-32'>
              Requests
            </h3>
            <div class='container flex justify-center m-auto mt-16 pb-16 opacity-100 z-50'>
              <div class='grid grid-cols-1'>
                <div class='p-6 bg-white rounded-md shadow-md'>
                  <div>
                    <div class='registration-form text-dark text-start'>
                      <div className='grid grid-cols-12 gap-6'>
                        <div className='col-span-6'>
                          <div className='filter-search-form relative filter-border'>
                            <button
                              className={`p-2 rounded-t-lg w-full ${
                                activeTab === 'Tab 1'
                                  ? 'btn bg-orange-600 hover:bg-gray-600 border-gray-300 hover:border-gray-400 text-black rounded hover:text-black'
                                  : 'btn bg-gray-800 hover:bg-gray-600 border-gray-300 hover:border-gray-400 text-white rounded hover:text-black'
                              }`}
                              onClick={() => handleTabClick('Tab 1')}
                            >
                              Tour Guides
                            </button>
                          </div>
                        </div>
                        <div className='col-span-6'>
                          <div className='filter-search-form relative filter-border'>
                            <button
                              className={`p-2 rounded-t-lg w-full ${
                                activeTab === 'Tab 2'
                                  ? 'btn bg-orange-600 hover:bg-gray-600 border-gray-300 hover:border-gray-400 text-black rounded hover:text-black'
                                  : 'btn bg-gray-800 hover:bg-gray-600 border-gray-300 hover:border-gray-400 text-white rounded hover:text-black'
                              }`}
                              onClick={() => handleTabClick('Tab 2')}
                            >
                              Tour Organizations
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto'>
        <div className='mt-4'>{renderTabContent()}</div>
      </div>
    </>
  );
};

export default Requests;
