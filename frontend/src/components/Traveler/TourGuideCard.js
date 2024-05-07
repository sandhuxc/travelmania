import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PackageCard from '../PackageCard/PackageCard';
import { viewAllPackages } from '../../api/index';
import Cookies from 'universal-cookie';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
import bg from '../../assets/arhumpic.jpg';
import { Icon } from '@iconify/react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const TourGuideCard = (props) => {
  const cookies = new Cookies();
  let token = cookies.get('token');
  console.log(token);
  let navigate = useNavigate();

  const goToInbox = (id) => {
    navigate('/inbox', {
        state: {
          userId: id
        }
      });
  }

  const { guid, name, age, city } = props;
  return (
    <div class='group relative p-6 rounded-md shadow  hover:shadow-md bg-white transition duration-500 text-center'>
      <div class='mt-8'>
        <img
          src={bg}
          class='rounded-full shadow-md h-20 w-20 mx-auto block'
          alt=''
        />

        <div class='mt-3'>
          {token == undefined || token == '' ? (
            <>
              <Link
                to='/login'
                class='text-lg font-medium hover:text-orange-600 transition duration-500 block'
                style={{ transition: 'all .15s ease' }}
                onClick={() => props.setAlert('You need to Login First', 'red')}
              >
                {name}
              </Link>
            </>
          ) : (
            <Link
              to={`/tour-guide-portfolio/${guid}`}
              class='text-lg font-medium hover:text-orange-600 transition duration-500 block'
            >
              {name}
            </Link>
          )}
          <span class='block text-sm text-slate-400'>Tour Guide</span>
        </div>
      </div>

      <div class='flex items-center justify-around my-4'>
        <span class='text-slate-400 flex'>
          <i class='uil uil-map-marker mr-1 pt-1'>
            <Icon icon='material-symbols:location-on' color='#006' />
          </i>
          {city}
        </span>
      </div>

      <a
        href=''
        class='bg-gray-100 text-slate-400 text-xs font-medium px-3 py-1 rounded-lg h-[24px] inline-block m-1'
      >
        Hiking
      </a>
      <a
        href=''
        class='bg-gray-100 text-slate-400 text-xs font-medium px-3 py-1 rounded-lg h-[24px] inline-block m-1'
      >
        Exploration
      </a>
      <a
        href=''
        class='bg-gray-100 text-slate-400 text-xs font-medium px-3 py-1 rounded-lg h-[24px] inline-block m-1'
      >
        Management
      </a>
      <a
        href=''
        class='bg-gray-100 text-slate-400 text-xs font-medium px-3 py-1 rounded-lg h-[24px] inline-block m-1'
      >
        Leader
      </a>
      <div className='mt-6'>
        {token == undefined ? (
          <>
            <Link
              to='/login'
              class='px-3 py-3 mx-3 text-white no-underline bg-gray-800 rounded hover:bg-orange-600 font-bold hover:text-white'
              style={{ transition: 'all .15s ease' }}
              onClick={() => props.setAlert('You need to Login First', 'red')}
            >
              Send Message
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={() => {goToInbox(guid)}}
              class='px-3 py-3 text-white no-underline bg-gray-800 rounded hover:bg-orange-600 font-bold hover:text-white'
              style={{ transition: 'all .15s ease' }}
            >
              Send Message
            </button>
          </>
        )}
      </div>
    </div>
  );
};

TourGuideCard.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(TourGuideCard);
