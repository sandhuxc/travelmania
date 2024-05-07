import React, { useEffect, useState } from 'react';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
import bgImage from '../../assets/bgImagePackage.jpg';
import { viewHelpQueries } from '../../api';
import { connect } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HelpQueries = ({ token }) => {
  const [help, setHelp] = useState();

  let navigate = useNavigate();

  const getHelp = async () => {
    let response = await viewHelpQueries(token);
    if (response === 404) {
      navigate('/');
    }
    console.log(response.data);
    setHelp(response.data);
  };

  useEffect(() => {
    getHelp();
  }, []);

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
              Help Queries
            </h3>
            <div class='container flex justify-center m-auto mt-16 pb-16 opacity-100 z-50'>
              <div class='grid grid-cols-1'>
                <div class='p-6 bg-transparent rounded-md shadow-md'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='list-group mt-5 mx-10'>
        {help?.map((obj, index) => (
          <div
            class='shadow-lg list-group-item list-group-item-action bg-gray-300 border-gray-300 text-black  rounded pl-4 pr-4'
            aria-current='true'
          >
            <div class='flex items-center justify-between'>
              <h5 class='mb-3 mt-3 bold font-semibold'>{obj.name}</h5>
            </div>
            <p class='mb-2 -mt-3 pb-3'>Email: {obj.email}</p>
            <p class='mb-2 -mt-3 pb-3'>Title: {obj.title}</p>
            <p class='mb-2 -mt-3 pb-3'>Description: {obj.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

HelpQueries.prototype = {
  token: PropTypes.string.isRequired,
};

const mapStatetoProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStatetoProps, {})(HelpQueries);
