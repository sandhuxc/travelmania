import React from 'react';
import { Link } from 'react-router-dom';

import abdullahpic from '../../assets/abdullahpic.jpg';
import arhumpic from '../../assets/arhumpic.jpg';
import azeempic from '../../assets/azeempic.jpg';
import LandingPageFooter from '../Footer/LandingPageFooter';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
import Logo from '../../assets/realLogo.png';
import ScrollButton from '../Layout/ScrollButton';

export default function Login() {
  document.body.style.zoom = '90%';
  return (
    <div>
      <LandingPageNavbar transparent />
      <main>
        <div
          className='relative pt-16 pb-32 flex content-center items-center justify-center'
          style={{
            minHeight: '75vh',
          }}
        >
          <div
            className='absolute top-0 w-full h-full bg-center bg-cover'
            style={{
              backgroundImage:
                "url('https://wallpaperaccess.com/full/2767405.jpg')",
            }}
          >
            <span
              id='blackOverlay'
              className='w-full h-full absolute opacity-75 bg-black'
            ></span>
          </div>
          <div className='container relative mx-auto'>
            <div className='items-center flex flex-wrap'>
              <div className='w-full lg:w-6/12 px-4 ml-auto mr-auto text-center'>
                <div className='pr-12'>
                  <h1 className='text-white font-semibold text-5xl'>
                    <img
                      src={Logo}
                      alt=''
                      className='mx-auto mb-6 pl-10 w-52'
                    />
                    &nbsp;&nbsp;&nbsp;TravelMania
                  </h1>
                  <p className='mt-4 text-lg text-gray-300'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your Journey Starts with
                    Us
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
            style={{ height: '70px' }}
          >
            <svg
              className='absolute bottom-0 overflow-hidden'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              version='1.1'
              viewBox='0 0 2560 100'
              x='0'
              y='0'
            ></svg>
          </div>
        </div>

        <section className='pb-20 bg-gray-100 -mt-24'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap'>
              <div className='pt-6 w-full md:w-4/12 px-4 text-center'>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400'>
                      <i className='fas fa-globe'></i>
                    </div>
                    <h6 className='text-xl font-semibold'>
                      For Every Traveller
                    </h6>
                    <p className='mt-2 mb-4 text-gray-600'>
                      TravelMania is buit for every traveller that wants to
                      visit Pakistan.
                    </p>
                  </div>
                </div>
              </div>

              <div className='w-full md:w-4/12 px-4 text-center'>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400'>
                      <i className='fas fa-lock'></i>
                    </div>
                    <h6 className='text-xl font-semibold'>Safe & Secure</h6>
                    <p className='mt-2 mb-4 text-gray-600'>
                      TravelMania provides complete security to its users and
                      verify all the tour guides and tour organizations before
                      registeration.
                    </p>
                  </div>
                </div>
              </div>

              <div className='pt-6 w-full md:w-4/12 px-4 text-center'>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg'>
                  <div className='px-4 py-5 flex-auto'>
                    <div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400'>
                      <i className='fas fa-fingerprint'></i>
                    </div>
                    <h6 className='text-xl font-semibold'>Verified Company</h6>
                    <p className='mt-2 mb-4 text-gray-600'>
                      TravelMania is first verified platform for the travellers
                      and tour guides.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-wrap items-center mt-32'>
              <div className='w-full md:w-5/12 px-4 mr-auto ml-auto'>
                <h3 className='text-3xl mb-2 font-semibold leading-normal'>
                  Pakistan - A Land of Pure
                </h3>
                <p className='mt-1 text-sm text-gray-500 font-semibold'>
                  Pakistan is a country located in South Asia. It has a
                  coastline along the Arabia Sea and the Gulf of Oman and is
                  bordered by Afghanistan, China, India, and Iran. The geography
                  of Pakistan is diverse with the Thar Desert in the east and
                  the Hindu Kush and Pamir mountain ranges in the north.
                </p>
              </div>

              <div className='w-full md:w-4/12 px-4 mr-auto ml-auto'>
                <div className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-400'>
                  <img
                    alt='...'
                    src='https://images.unsplash.com/photo-1627896157734-4d7d4388f28b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8azIlMjBtb3VudGFpbnxlbnwwfHwwfHw%3D&w=1000&q=80'
                    className='w-full align-middle rounded-t-lg'
                  />
                  <blockquote className='relative p-8 mb-4'>
                    <svg
                      preserveAspectRatio='none'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 583 95'
                      className='absolute left-0 w-full block'
                      style={{
                        height: '95px',
                        top: '-94px',
                      }}
                    ></svg>
                    <h4 className='text-xl font-bold text-black'>K 2</h4>
                    <p className='text-md font-light mt-2 text-black'>
                      Karakoram Range
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='pt-20 pb-48 bg-gray-100'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-wrap justify-center text-center mb-24'>
              <div className='w-full lg:w-6/12 px-4'>
                <h2 className='text-4xl font-semibold'>Here is our team</h2>
              </div>
            </div>
            <div className='flex flex-wrap justify-center'>
              <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
                <div className='px-6'>
                  <img
                    alt='...'
                    src={abdullahpic}
                    className='shadow-lg rounded-full max-w-full mx-auto'
                    style={{ maxWidth: '120px' }}
                  />
                  <div className='pt-6 text-center'>
                    <h5 className='text-xl font-bold'>Abdullah Tariq</h5>
                    <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
                      Web Developer
                    </p>
                    <div className='mt-6'>
                      <a href='https://www.facebook.com/abdullah.tariq.71868'>
                        <button
                          className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                          type='button'
                        >
                          <i className='fab fa-facebook-f'></i>
                        </button>
                      </a>
                      <a href='https://github.com/atariq12382'>
                        <button
                          className='bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                          type='button'
                        >
                          <i className='fab fa-github'></i>
                        </button>
                      </a>
                      <a href='https://www.linkedin.com/in/abdullah-tariq-00790221a/'>
                        <button
                          className='bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                          type='button'
                        >
                          <i className='fab fa-linkedin'></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
                <div className='px-6'>
                  <img
                    alt='...'
                    src={arhumpic}
                    className='shadow-lg rounded-full max-w-full mx-auto'
                    style={{ maxWidth: '120px' }}
                  />
                  <div className='pt-6 text-center'>
                    <h5 className='text-xl font-bold'>Arhum Sharif</h5>
                    <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
                      Web Developer
                    </p>
                    <div className='mt-6'>
                      <a href='https://www.facebook.com/muhammad.arhum.7'>
                        <button
                          className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                          type='button'
                        >
                          <i className='fab fa-facebook-f'></i>
                        </button>
                      </a>
                      <a href='https://github.com/arhumsharif'>
                        <button
                          className='bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                          type='button'
                        >
                          <i className='fab fa-github'></i>
                        </button>
                      </a>
                      <a href='https://www.linkedin.com/in/arhum-sharif-283687228/'>
                        <button
                          className='bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                          type='button'
                        >
                          <i className='fab fa-linkedin'></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4'>
                <div className='px-6'>
                  <img
                    alt='...'
                    src={azeempic}
                    className='shadow-lg rounded-full max-w-full mx-auto'
                    style={{ maxWidth: '120px' }}
                  />
                  <div className='pt-6 text-center'>
                    <h5 className='text-xl font-bold'>Muhammad Azeem</h5>
                    <p className='mt-1 text-sm text-gray-500 uppercase font-semibold'>
                      Web Developer
                    </p>
                    <div className='mt-6'>
                      <a href='https://www.facebook.com/ch.azeem.5201254'>
                        <button
                          className='bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                          type='button'
                        >
                          <i className='fab fa-facebook-f'></i>
                        </button>
                      </a>
                      <button
                        className='bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                        type='button'
                      >
                        <i className='fab fa-github'></i>
                      </button>
                      <a href='https://www.linkedin.com/in/m-azeem-166006239/'>
                        <button
                          className='bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1'
                          type='button'
                        >
                          <i className='fab fa-linkedin'></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LandingPageFooter />
      <ScrollButton />
    </div>
  );
}
