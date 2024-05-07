import React, { useState, useRef } from 'react';
import { addReqUser, addReqUserOrg } from '../../api';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo2.png';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import Alert from '../Layout/Alert';
import LandingPageFooter from '../Footer/LandingPageFooter';

const AuthSignUp = ({ setAlert }) => {
  document.body.style.zoom = '90%';

  const [showHide, setShowHide] = useState('');

  const handleShowHide = (event) => {
    const getRegisterType = event.target.value;
    setShowHide(getRegisterType);
  };

  let navigate = useNavigate();

  const email = useRef();
  const name = useRef();
  const cnic = useRef();
  const mobile = useRef();
  const dob = useRef();
  const address = useRef();
  const oname = useRef();
  const oregno = useRef();
  const phone = useRef();
  const oweb = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const register = async () => {
    if (
      password.current.value === confirmPassword.current.value &&
      Object.keys(password.current.value).length > 0
    ) {
      if (validateEmail(email.current.value)) {
        if (showHide === 'Tour Guide') {
          let response = await addReqUser(
            email.current.value,
            password.current.value,
            name.current.value,
            cnic.current.value,
            mobile.current.value,
            dob.current.value,
            address.current.value
          );
          if (response === 404) {
            setAlert('Request Blocked', 'red');
          } else {
            setAlert(
              'Request recieved Successfully you will be notified by email',
              'green'
            );
            setTimeout(() => {
              navigate('/login');
            }, 8000);
          }
        } else if (showHide === 'Tour Organization') {
          console.log('headbb');
          let response = await addReqUserOrg(
            email.current.value,
            password.current.value,
            name.current.value,
            cnic.current.value,
            mobile.current.value,
            dob.current.value,
            oname.current.value,
            oregno.current.value,
            phone.current.value,
            oweb.current.value,
            address.current.value
          );
          if (response === 404) {
            setAlert('Request Blocked', 'red');
          } else {
            setAlert(
              'Request recieved Successfully you will be notified by email',
              'green'
            );
            setTimeout(() => {
              navigate('/login');
            }, 3000);
          }
        }
      } else {
        setAlert('Invalid Email', 'red');
      }
    } else {
      setAlert('Passwords do not match', 'red');
    }
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
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
          <div className='container mx-auto px-4 h-full -mt-8 '>
            <div className='flex content-center items-center justify-center h-full'>
              <div className='w-full lg:w-4/6 px-4'>
                <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0 '>
                  <div className='rounded-t mb-0 px-6 pt-6'>
                    <div className='text-center'>
                      <img src={Logo} alt='' className='mx-auto mb-10 pl-3' />
                    </div>
                  </div>

                  <div class={showHide === '' ? 'mb-56' : 'mb-8'}>
                    <div
                      class='grid lg:grid-cols-12 grid-cols-1'
                      id='reserve-form'
                    >
                      <div class='lg:col-start-2 lg:col-span-10'>
                        <div class='rounded-md p-6'>
                          <form>
                            <Alert />
                            <div class='grid lg:grid-cols-12 gap-6'>
                              <div class='lg:col-span-6'>
                                <label
                                  for='typejob'
                                  class='block uppercase text-gray-700 text-xs font-bold mb-2'
                                >
                                  Registeration Type
                                </label>
                                <select
                                  id='typejob'
                                  class='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full sm:w-1/2 lg:w-full'
                                  onChange={handleShowHide}
                                >
                                  <option disabled selected>
                                    Select Registeration Type{' '}
                                  </option>
                                  <option>Tour Guide</option>
                                  <option>Tour Organization</option>
                                </select>
                              </div>

                              <div class='lg:col-span-6'>
                                <div class='text-left'>
                                  <label
                                    for='email'
                                    class='block uppercase text-gray-700 text-xs font-bold mb-2'
                                  >
                                    Email
                                  </label>
                                  <input
                                    name='email'
                                    id='email'
                                    type='email'
                                    class='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full sm:w-1/2 lg:w-full'
                                    placeholder='Email'
                                    ref={email}
                                    required
                                  />
                                </div>
                              </div>
                              {showHide === 'Tour Guide' && (
                                <>
                                  <div class='lg:col-span-6'>
                                    <div class='text-left'>
                                      <label
                                        for='name'
                                        class='block uppercase text-gray-700 text-xs font-bold mb-2'
                                      >
                                        Name
                                      </label>
                                      <input
                                        name='name'
                                        id='name'
                                        type='name'
                                        class='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full sm:w-1/2 lg:w-full'
                                        placeholder='Name'
                                        ref={name}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div class='lg:col-span-6'>
                                    <div class='text-left'>
                                      <label
                                        for='cnic'
                                        class='block uppercase text-gray-700 text-xs font-bold mb-2'
                                      >
                                        CNIC
                                      </label>
                                      <input
                                        name='cnic'
                                        id='cnic'
                                        type='cnic'
                                        class='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full sm:w-1/2 lg:w-full'
                                        placeholder='CNIC'
                                        ref={cnic}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div class='lg:col-span-6'>
                                    <div class='text-left'>
                                      <label
                                        for='mobileno'
                                        class='block uppercase text-gray-700 text-xs font-bold mb-2'
                                      >
                                        Mobile Number
                                      </label>
                                      <input
                                        name='mobileno'
                                        id='mobileno'
                                        type='mobileno'
                                        class='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full sm:w-1/2 lg:w-full'
                                        placeholder='Mobile Number'
                                        ref={mobile}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div class='lg:col-span-6'>
                                    <div class='text-left'>
                                      <label
                                        for='dob'
                                        class='block uppercase text-gray-700 text-xs font-bold mb-2'
                                      >
                                        Date of Birth
                                      </label>
                                      <input
                                        name='dob'
                                        id='dob'
                                        type='date'
                                        class='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full sm:w-1/2 lg:w-full'
                                        placeholder='Date of Birth'
                                        ref={dob}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div class='lg:col-span-12'>
                                    <div class='text-left'>
                                      <label
                                        for='address'
                                        class='block uppercase text-gray-700 text-xs font-bold mb-2'
                                      >
                                        Address
                                      </label>
                                      <input
                                        name='address'
                                        id='address'
                                        type='address'
                                        class='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full sm:w-1/2 lg:w-full'
                                        placeholder='Address'
                                        ref={address}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div class='lg:col-span-6'>
                                    <div class='text-left'>
                                      <label
                                        class='block uppercase text-gray-700 text-xs font-bold mb-2'
                                        htmlFor='grid-password'
                                      >
                                        Password
                                      </label>
                                      <input
                                        name='password'
                                        id='password'
                                        type='password'
                                        class='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full sm:w-1/2 lg:w-full'
                                        placeholder='Password'
                                        ref={password}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div class='lg:col-span-6'>
                                    <div class='text-left'>
                                      <label
                                        htmlFor='grid-password'
                                        class='block uppercase text-gray-700 text-xs font-bold mb-2'
                                      >
                                        Confirm Password
                                      </label>
                                      <input
                                        name='cpassword'
                                        id='cpassword'
                                        type='password'
                                        class='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full sm:w-1/2 lg:w-full'
                                        placeholder='Confirm Password'
                                        ref={confirmPassword}
                                        required
                                      />
                                    </div>
                                  </div>
                                </>
                              )}
                              {showHide === 'Tour Organization' && (
                                <>
                                  <div class='lg:col-span-6'>
                                    <div class='text-left'>
                                      <label
                                        for='oname'
                                        class='block uppercase text-gray-700 text-xs font-bold mb-2'
                                      >
                                        Organization Name
                                      </label>
                                      <input
                                        name='oname'
                                        id='oname'
                                        type='name'
                                        class='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full sm:w-1/2 lg:w-full'
                                        placeholder='Organization Name'
                                        ref={oname}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div class='lg:col-span-6'>
                                    <div class='text-left'>
                                      <label
                                        for='oregno'
                                        class='block uppercase text-gray-700 text-xs font-bold mb-2'
                                      >
                                        Organization Registeration Number
                                      </label>
                                      <input
                                        name='oregno'
                                        id='oregno'
                                        type='text'
                                        class='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full sm:w-1/2 lg:w-full'
                                        placeholder='Organization Registeration Number'
                                        ref={oregno}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div class='lg:col-span-6'>
                                    <div class='text-left'>
                                      <label
                                        for='ophone'
                                        class='block uppercase text-gray-700 text-xs font-bold mb-2'
                                      >
                                        Organization Phone Number
                                      </label>
                                      <input
                                        name='ophone'
                                        id='ophone'
                                        type='text'
                                        class='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full sm:w-1/2 lg:w-full'
                                        placeholder='Organization Phone Number'
                                        ref={phone}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div class='lg:col-span-6'>
                                    <div class='text-left'>
                                      <label
                                        for='oweb'
                                        class='block uppercase text-gray-700 text-xs font-bold mb-2'
                                      >
                                        Organization Website Link
                                      </label>
                                      <input
                                        name='oweb'
                                        id='oweb'
                                        type='text'
                                        class='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full sm:w-1/2 lg:w-full'
                                        placeholder='Organization Website Link'
                                        ref={oweb}
                                      />
                                    </div>
                                  </div>
                                  <div class='lg:col-span-12'>
                                    <div class='text-left'>
                                      <label
                                        for='address'
                                        class='block uppercase text-gray-700 text-xs font-bold mb-2'
                                      >
                                        Organization Address
                                      </label>
                                      <input
                                        name='address'
                                        id='address'
                                        type='address'
                                        class='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full sm:w-1/2 lg:w-full'
                                        placeholder='Organization Address'
                                        ref={address}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div class='lg:col-span-6'>
                                    <div class='text-left'>
                                      <label
                                        for='name'
                                        class='block uppercase text-gray-700 text-xs font-bold mb-2'
                                      >
                                        Owner Name
                                      </label>
                                      <input
                                        name='name'
                                        id='name'
                                        type='name'
                                        class='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full sm:w-1/2 lg:w-full'
                                        placeholder='Owner Name'
                                        ref={name}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div class='lg:col-span-6'>
                                    <div class='text-left'>
                                      <label
                                        for='cnic'
                                        class='block uppercase text-gray-700 text-xs font-bold mb-2'
                                      >
                                        Owner CNIC
                                      </label>
                                      <input
                                        name='cnic'
                                        id='cnic'
                                        type='cnic'
                                        class='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full sm:w-1/2 lg:w-full'
                                        placeholder='Owner CNIC'
                                        ref={cnic}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div class='lg:col-span-6'>
                                    <div class='text-left'>
                                      <label
                                        for='mobileno'
                                        class='block uppercase text-gray-700 text-xs font-bold mb-2'
                                      >
                                        Owner Mobile Number
                                      </label>
                                      <input
                                        name='mobileno'
                                        id='mobileno'
                                        type='mobileno'
                                        class='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full sm:w-1/2 lg:w-full'
                                        placeholder='Owner Mobile Number'
                                        ref={mobile}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div class='lg:col-span-6'>
                                    <div class='text-left'>
                                      <label
                                        for='dob'
                                        class='block uppercase text-gray-700 text-xs font-bold mb-2'
                                      >
                                        Owner Date of Birth
                                      </label>
                                      <input
                                        name='dob'
                                        id='dob'
                                        type='date'
                                        class='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full sm:w-1/2 lg:w-full'
                                        placeholder='Owner Date of Birth'
                                        ref={dob}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div class='lg:col-span-6'>
                                    <div class='text-left'>
                                      <label
                                        class='block uppercase text-gray-700 text-xs font-bold mb-2'
                                        htmlFor='grid-password'
                                      >
                                        Password
                                      </label>
                                      <input
                                        name='password'
                                        id='password'
                                        type='password'
                                        class='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full sm:w-1/2 lg:w-full'
                                        placeholder='Password'
                                        ref={password}
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div class='lg:col-span-6'>
                                    <div class='text-left'>
                                      <label
                                        htmlFor='grid-password'
                                        class='block uppercase text-gray-700 text-xs font-bold mb-2'
                                      >
                                        Confirm Password
                                      </label>
                                      <input
                                        name='cpassword'
                                        id='cpassword'
                                        type='password'
                                        class='border-0 font-bold px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full sm:w-1/2 lg:w-full'
                                        placeholder='Confirm Password'
                                        ref={confirmPassword}
                                        required
                                      />
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                            <button
                              type='button'
                              onClick={register}
                              style={{ transition: 'all .15s ease' }}
                              class='bg-gray-800 text-white active:bg-orange-600 hover:bg-orange-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mt-3 -mb-8 w-full'
                            >
                              Register
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
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

AuthSignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(AuthSignUp);
