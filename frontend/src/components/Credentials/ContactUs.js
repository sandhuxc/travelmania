import React, { useRef } from 'react';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
import bgImage from '../../assets/bgImagePackage.jpg';
import contactimg from '../../assets/contact.png';
import { Icon } from '@iconify/react';
import LandingPageFooter from '../Footer/LandingPageFooter';
import { addHelp } from '../../api';
import { setAlert } from '../../actions/alert';
import Alert from '../Layout/Alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function ContactUs({ setAlert }) {
  document.body.style.zoom = '90%';
  let navigate = useNavigate();

  const name = useRef();
  const email = useRef();
  const title = useRef();
  const description = useRef();

  const sendData = async () => {
    let response = await addHelp(
      name.current.value,
      email.current.value,
      title.current.value,
      description.current.value
    );
    if (response === 404) {
      setAlert('Request Blocked', 'red');
    } else {
      setAlert('Your issue has been noted successfully.', 'green');
      setTimeout(() => {
        navigate('/contact-us');
      }, 3000);
    }
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
            <h3 className='md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white items-center content-center m-auto text-center py-32 '>
              Contact Us
            </h3>
          </div>
        </div>
      </div>
      <section class='relative md:pt-16 pt-16 flex justify-center'>
        <div class='container'>
          <div class='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-[30px]'>
            <div class='text-center px-6 mt-6'>
              <div class='w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto'>
                <Icon icon='ic:baseline-phone' color='#006' />
              </div>

              <div class='content mt-7'>
                <h5 class='title h5 text-xl font-medium'>Phone</h5>
                <p class='text-slate-400 mt-3 font-semibold'>
                  Ask your queries to our representative via phone.
                </p>

                <div class='mt-5'>
                  <a
                    href='tel:+923001234567'
                    class='btn btn-link text-gray-800 hover:text-orange-600 after:bg-indigo-600 duration-500 ease-in-out'
                  >
                    +92 300 1234567
                  </a>
                </div>
              </div>
            </div>

            <div class='text-center px-6 mt-6'>
              <div class='w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto'>
                <Icon icon='ic:round-mail' color='#006' />
              </div>

              <div class='content mt-7'>
                <h5 class='title h5 text-xl font-medium'>Email</h5>
                <p class='text-slate-400 mt-3 font-semibold'>
                  Ask your queries to our representative via email.
                </p>

                <div class='mt-5'>
                  <a
                    href='mailto:contact@example.com'
                    class='btn btn-link text-gray-800 hover:text-orange-600 after:bg-indigo-600 duration-500 ease-in-out'
                  >
                    contact@travelmania.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class='relative md:mt-8 mt-8 flex justify-center'>
        <div class='grid md:grid-cols-12 grid-cols-1 items-center gap-[5px]'>
          <div class='lg:col-span-7 md:col-span-6'>
            <img src={contactimg} alt='' />
          </div>

          <div class='lg:col-span-5 md:col-span-6 mt-8 md:mt-0'>
            <div class='lg:ml-5'>
              <div class='bg-gray-900 rounded-md shadow p-6'>
                <h3 class='mb-6 text-2xl leading-normal font-medium text-white'>
                  Get in touch !
                </h3>

                <form>
                  <p class='mb-0' id='error-msg'></p>
                  <div id='simple-msg'></div>
                  <Alert />
                  <div class='grid lg:grid-cols-12 lg:gap-6'>
                    <div class='lg:col-span-6 mb-5'>
                      <div class='text-left text-white'>
                        <label for='name' class='font-semibold'>
                          Name:
                        </label>
                        <div class='form-icon relative mt-2'>
                          <input
                            name='name'
                            id='name'
                            type='text'
                            class='form-input filter-input-box bg-gray-100 hover:bg-gray-200 border-gray-300 hover:border-gray-400 text-black w-full !h-12 rounded'
                            placeholder='Name :'
                            ref={name}
                          />
                        </div>
                      </div>
                    </div>

                    <div class='lg:col-span-6 mb-5'>
                      <div class='text-left text-white'>
                        <label for='email' class='font-semibold'>
                          Email:
                        </label>
                        <div class='form-icon relative mt-2'>
                          <input
                            name='email'
                            id='email'
                            type='email'
                            class='form-input filter-input-box bg-gray-100 hover:bg-gray-200 border-gray-300 hover:border-gray-400 text-black w-full !h-12 rounded'
                            placeholder='Email :'
                            ref={email}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class='grid grid-cols-1'>
                    <div class='mb-5'>
                      <div class='text-left text-white'>
                        <label for='title' class='font-semibold'>
                          Title:
                        </label>
                        <div class='form-icon relative mt-2'>
                          <input
                            name='title'
                            id='title'
                            class='form-input filter-input-box bg-gray-100 hover:bg-gray-200 border-gray-300 hover:border-gray-400 text-black w-full !h-12 rounded'
                            placeholder='Title :'
                            ref={title}
                          />
                        </div>
                      </div>
                    </div>

                    <div class='mb-5'>
                      <div class='text-left text-white'>
                        <label for='description' class='font-semibold'>
                          Description:
                        </label>
                        <div class='form-icon relative mt-2'>
                          <input
                            name='description'
                            id='description'
                            class='form-input filter-input-box bg-gray-100 hover:bg-gray-200 border-gray-300 hover:border-gray-400 text-black w-full !h-12 rounded'
                            placeholder='Description :'
                            ref={description}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type='button'
                    onClick={sendData}
                    class='btn bg-gray-200 hover:bg-orange-600 border-indigo-600 hover:border-gray-900 text-gray-900 searchbtn submit-btn w-full !h-12 rounded duration-500 ease-in-out'
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LandingPageFooter />
    </>
  );
}

ContactUs.protoTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(ContactUs);
