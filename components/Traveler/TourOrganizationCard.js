import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import bg from '../../assets/arhumpic.jpg';
import { Icon } from '@iconify/react';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';

const TourOrganizationCard = (props) => {
  const cookies = new Cookies();
  let token = cookies.get('token');
  let navigate = useNavigate();

  const goToInbox = (id) => {
    navigate('/inbox', {
        state: {
          userId: id
        }
      });
  }

  const { obj } = props;
  console.log(obj);
  return (
    <div class='group relative py-6 rounded-md shadow  hover:shadow-md bg-white transition duration-500 text-center'>
      <div class=''>
        <img
          src={bg}
          class='rounded shadow-md h-64 w-96 mx-auto block'
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
                {obj.org_name}
              </Link>
            </>
          ) : (
            <Link
              to={`/tour-org-portfolio/${obj.user_guid}`}
              class='text-lg font-medium hover:text-orange-600 transition duration-500 block'
            >
              {obj.org_name}
            </Link>
          )}
          <span class='block text-sm text-slate-400'>Tour Organization</span>
        </div>
      </div>

      <div class='flex items-center justify-around my-4'>
        <span class='text-slate-400 flex'>
          <i class='uil uil-map-marker mr-1 pt-1'>
            <Icon icon='material-symbols:location-on' color='#006' />
          </i>
          {obj.country}
        </span>
      </div>
      <div className='mt-6'>
        {token == undefined || token == '' ? (
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
              onClick={() => {goToInbox(obj.user_guid)}}
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

TourOrganizationCard.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(TourOrganizationCard);
