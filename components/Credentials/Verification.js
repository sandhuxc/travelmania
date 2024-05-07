import React, { useState, useRef } from 'react';
import {  verifyOtp } from '../../api';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from '../../assets/Logo2.png';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import Alert from '../Layout/Alert';
import LandingPageFooter from '../Footer/LandingPageFooter';

const Verification = ({ setAlert }) => {
  let navigate = useNavigate();
  let location = useLocation();

  const otp = useRef();
  const [message, setMessage] = useState('hidden');

  const verify = async () => {
    let email = location.state.email
    document.body.style.zoom = '90%';
        let response = await verifyOtp(email, otp.current.value);
        if (response == 404) {
          setAlert('Wrong Otp', 'red');
        } else {
          setAlert('Register successfully', 'green');
          setTimeout(() => {
            navigate('/login');
          }, 3000);
        }
  };

  return (
    <>
      <LandingPageNavbar />
      <main>
        <section className='relative w-full h-full pt-16'>
          <div
            className='absolute top-0 w-full bg-gray-900'
            style={{
              backgroundImage:
                "url('https://images.wallpaperscraft.com/image/single/mountain_peaks_sky_beautiful_scenery_93221_1920x1080.jpg')",
              backgroundRepeat: 'no-repeat',
              height: '110%',
            }}
          ></div>
          <div className='container mx-auto px-4 h-full'>
            <div className='flex content-center items-center justify-center h-full'>
              <div className='w-full lg:w-4/12 px-4'>
                <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0'>
                  <div className='rounded-t mb-0 px-6 py-6'>
                    <div className='text-center'>
                      <img src={Logo} alt='' className='mx-auto mb-10 pl-3' />
                    </div>
                  </div>
                  <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
                    <form>
                      <Alert />
                      <div className='relative w-full mb-3'>
                        <label
                          className='block uppercase text-gray-700 text-xs font-bold mb-2'
                          htmlFor='grid-password'
                        >
                          OTP Code
                        </label>
                        <input
                          type='number'
                          placeholder='OTP Code'
                          autoComplete='given-name'
                          className='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                          style={{ transition: 'all .15s ease' }}
                          ref={otp}
                        />
                      </div>

                      <div className='text-center mt-6'>
                      <button
                          onClick={verify}
                          type='button'
                          style={{ transition: 'all .15s ease' }}
                          className='bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full'
                        >
                          Verify
                        </button>

                        <h6 className='justify-center items-center text-sm font-semibold text-gray-700 pt-3'>
                          Verify your Account using OTP Code
                        </h6>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <LandingPageFooter />
      </main>
    </>
  );
};

Verification.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Verification);
