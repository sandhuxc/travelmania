import { render } from '@testing-library/react';
import React, { useEffect, useRef, useState } from 'react';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
import bgImage from '../../assets/bgImagePackage.jpg';
import Cookies from 'universal-cookie';
import { changePassword } from '../../api/index';
import Alert from '../Layout/Alert';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';

const Settings = ({ setAlert }) => {
  // Cookies to send user_token
  const cookies = new Cookies();
  let token = cookies.get('token');

  let navigate = useNavigate()
  let location = useLocation()

  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const handleSubmit = async () => {
    if (newPass.length >= 4 && newPass === confirmPass)
    {
        let response = await changePassword(token, oldPass, newPass)

        if (response == 404) {
            navigate('/login');
        }

        console.log(response)
        if (response.message === "Success")
        {
            setAlert('Password Changed', 'green')
        }
        else
        {
            setAlert('Password Change Failed', 'red')
        }
        setOldPass('')
        setNewPass('')
        setConfirmPass('')
    }
    else
    {
        setAlert('Check New Password', 'red')
    }
  }

  
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
            <h3 className='md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white items-center content-center m-auto text-center pt-32 pb-32'>
              Settings
            </h3>
          </div>
        </div>
      </div>
      <section class='max-w-screen-2xl p-6 mx-auto bg-gray-300 rounded-md shadow-md mt-8 mb-20'>
        <h1 class='text-xl font-bold text-black capitalize'>Change your Password</h1>
        <form>
          <Alert />
            <div class='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                <div>
                <label class='text-black' for='title'>
                    Old Password:
                </label>
                <input
                    id='title'
                    type='password'
                    placeholder='Enter Old Password'
                    value={oldPass}
                    onChange={(e) => {setOldPass(e.target.value)}}
                    class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
                />
                </div>

                <div>
                <label class='text-black' for='price'>
                    New Password:
                </label>
                <input
                    id='price'
                    type='password'
                    placeholder='Enter New Password'
                    onChange={(e) => {setNewPass(e.target.value)}}
                    value={newPass}
                    class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
                />
                </div>

                <div>
                <label class='text-black' for='capacity'>
                    Confirm Password:
                </label>
                <input
                    id='capacity'
                    type='password'
                    placeholder='Confirm Password'
                    onChange={(e) => setConfirmPass(e.target.value)}
                    value={confirmPass}
                    class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
                />
                </div>
            </div>

          <div class='flex justify-end mt-6'>
            <button
              type='button'
              onClick={handleSubmit}
              class={`px-3 py-3 text-white no-underline bg-gray-800 rounded hover:bg-orange-600 font-bold hover:text-white`} 
            >
              Confirm
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

Settings.propTypes = {
    setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Settings);
