import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PortfolioModal from './PortfolioModal/PortfolioModal';
import { viewTourGuidePorfolio } from '../../api/index';
import Cookies from 'universal-cookie';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
import bgImage from '../../assets/bgImagePackage.jpg';
import bg from '../../assets/arhumpic.jpg';
import LandingPageFooter from '../Footer/LandingPageFooter';
import { Icon } from '@iconify/react';
import bg1 from '../../assets/packagebg.jpg';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  // Cookies to send user_token
  const cookies = new Cookies();
  let token = cookies.get('token');
  let navigate = useNavigate();

  // / UseEffect
  useEffect(() => {
    getProfile(token);
  }, []);

  const getProfile = async (token) => {
    let response = await viewTourGuidePorfolio(token);
    if (response == 404) {
      navigate('/');
    }
    console.log(response);
    setName(response?.data[0]?.name);
    setAge(response?.data[0]?.age);
    setCnic(response?.data[0]?.cnic);
    setPhone(response?.data[0]?.phone_no);
    setGender(response?.data[0]?.gender);
    setCity(response?.data[0]?.city);
    setCountry(response?.data[0]?.country);
    setAbout(response?.data[0]?.about);
  };

  const [addModal, setAddModal] = useState('hidden');

  // States for View
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [cnic, setCnic] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [about, setAbout] = useState('');

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
            <h3 className='md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white items-center content-center m-auto text-center py-32'>
              My Portfolio
            </h3>
          </div>
        </div>
      </div>
      <section class='relative md:py-24 py-16'>
        <div class='container'>
          <div class='grid md:grid-cols-12 grid-cols-1 gap-[30px] pl-24 pr-20'>
            <div class='lg:col-span-4 md:col-span-5'>
              <div class='lg:-mt-[150px] -mt-[130px]'>
                <div class='rounded-md bg-white shadow'>
                  <div class='text-center py-8 p-6 border-b border-gray-100'>
                    <img
                      src={bg}
                      class='h-24 w-24 p-1 shadow-md dark:shadow-gray-800 mx-auto rounded-full block'
                      alt=''
                    />
                    <h5 class='mt-5 text-xl font-semibold mb-0'>{name}</h5>
                    <p class='text-slate-400 mb-0'>Tour Guide</p>
                  </div>

                  <div class='p-6'>
                    <h5 class='font-semibold'>Verified Details :</h5>
                    <ul class='list-none mt-4'>
                      <li class='flex mt-2 items-center font-medium'>
                        <i
                          data-feather='mail'
                          class='h-4 w-4 text-amber-500 mr-3'
                        >
                          <Icon
                            icon='material-symbols:mail-outline-rounded'
                            color='orange'
                          />
                        </i>
                        <span class='text-slate-400 mr-3'>Email :</span>{' '}
                        abc@mail.com
                      </li>
                      <li class='flex mt-2 items-center font-medium'>
                        <i
                          data-feather='gift'
                          class='h-4 w-4 text-amber-500 mr-3'
                        >
                          <Icon icon='mdi:gift-outline' color='orange' />
                        </i>
                        <span class='text-slate-400 mr-3'>Age :</span> {age}{' '}
                        years
                      </li>
                      <li class='flex mt-2 items-center font-medium'>
                        <i
                          data-feather='map-pin'
                          class='h-4 w-4 text-amber-500 mr-3'
                        >
                          <Icon
                            icon='material-symbols:location-on-outline-rounded'
                            color='orange'
                          />
                        </i>
                        <span class='text-slate-400 mr-3'>City :</span> {city}
                      </li>
                      <li class='flex mt-2 items-center font-medium'>
                        <i
                          data-feather='globe'
                          class='h-4 w-4 text-amber-500 mr-3'
                        >
                          <Icon icon='ph:globe' color='orange' />
                        </i>
                        <span class='text-slate-400 mr-3'>Country :</span>{' '}
                        {country}
                      </li>
                      <li class='flex mt-2 items-center font-medium'>
                        <i
                          data-feather='phone'
                          class='h-4 w-4 text-amber-500 mr-3'
                        >
                          <Icon icon='mdi:gender-male-female' color='orange' />
                        </i>
                        <span class='text-slate-400 mr-3'>Gender :</span>{' '}
                        {gender}
                      </li>
                      <li class='flex mt-2 items-center font-medium'>
                        <i
                          data-feather='phone'
                          class='h-4 w-4 text-amber-500 mr-3'
                        >
                          <Icon icon='mdi:mobile-phone' color='orange' />
                        </i>
                        <span class='text-slate-400 mr-3'>Mobile No :</span>{' '}
                        {phone}
                      </li>
                    </ul>
                    <button
                      className='btn bg-gray-800 hover:bg-orange-600 border-indigo-600
                    hover:border-gray-900 text-white searchbtn submit-btn w-1/2
                    !h-12 rounded mt-6'
                      type='button'
                      onClick={() => setAddModal('block')}
                      style={{ transition: 'all .5s ease' }}
                    >
                      Update Portfolio
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class='lg:col-span-8 md:col-span-7'>
              <h4 class='text-xl font-semibold'>About :</h4>
              <p class='text-black mt-4'>{about}</p>
              <h4 class='mt-8 text-xl font-semibold'>Skills :</h4>
              <div class='mt-4'>
                <div class='flex justify-between mb-2'>
                  <span class='text-slate-400'>Resource Management</span>
                  <span class='text-slate-400'>84%</span>
                </div>
                <div class='w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]'>
                  <div
                    class='bg-orange-600 h-[6px] rounded-full'
                    style={{ width: '84%' }}
                  ></div>
                </div>
              </div>
              <div class='mt-4'>
                <div class='flex justify-between mb-2'>
                  <span class='text-slate-400'>Hiking</span>
                  <span class='text-slate-400'>65%</span>
                </div>
                <div class='w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]'>
                  <div
                    class='bg-orange-600 h-[6px] rounded-full'
                    style={{ width: '65%' }}
                  ></div>
                </div>
              </div>
              <div class='mt-4'>
                <div class='flex justify-between mb-2'>
                  <span class='text-slate-400'>Leadership</span>
                  <span class='text-slate-400'>90%</span>
                </div>
                <div class='w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]'>
                  <div
                    class='bg-orange-600 h-[6px] rounded-full'
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
              <h4 class='mt-8 text-xl font-semibold'>Expierence :</h4>

              <div class='grid lg:grid-cols-2 grid-cols-1 gap-6 mt-8'>
                <div class='group relative block overflow-hidden rounded-md transition-all duration-500'>
                  <img
                    src={bg1}
                    class='group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500 group-hover:brightness-50'
                    alt=''
                  />
                  <div class='absolute inset-0 group-hover:bg-dark opacity-50 transition duration-500 z-0'></div>

                  <div class='content'>
                    <div class='title absolute z-10 hidden group-hover:block bottom-4 left-4 text-white font-bold'>
                      5-day Tour
                      <p class='text-slate-100 tag mb-0 font-bold'>Kashmir</p>
                    </div>
                  </div>
                </div>

                <div class='group relative block overflow-hidden rounded-md transition-all duration-500'>
                  <img
                    src={bg1}
                    class='group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500 group-hover:brightness-50'
                    alt=''
                  />
                  <div class='absolute inset-0 group-hover:bg-dark opacity-50 transition duration-500 z-0'></div>

                  <div class='content'>
                    <div class='absolute z-10 hidden group-hover:block bottom-4 left-4 transition-all duration-500 text-white font-bold'>
                      3-day Tour
                      <p class='text-slate-100 tag mb-0 font-bold'>Murree</p>
                    </div>
                  </div>
                </div>

                <div class='group relative block overflow-hidden rounded-md transition-all duration-500'>
                  <img
                    src={bg1}
                    class='group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500 group-hover:brightness-50'
                    alt=''
                  />
                  <div class='absolute inset-0 group-hover:bg-dark opacity-50 transition duration-500 z-0'></div>

                  <div class='content'>
                    <div class='absolute z-10 hidden group-hover:block bottom-4 left-4 transition-all duration-500 text-white font-bold'>
                      1-day Trip
                      <p class='text-slate-100 tag mb-0 font-bold'>Islamabad</p>
                    </div>
                  </div>
                </div>

                <div class='group relative block overflow-hidden rounded-md transition-all duration-500'>
                  <img
                    src={bg1}
                    class='group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 transition duration-500 group-hover:brightness-50'
                    alt=''
                  />
                  <div class='absolute inset-0 group-hover:bg-dark opacity-50 transition duration-500 z-0'></div>

                  <div class='content'>
                    <div class='absolute z-10 hidden group-hover:block bottom-4 left-4 transition-all duration-500 font-bold text-white'>
                      7-day Trip
                      <p class='text-slate-100 tag mb-0 font-bold'>Gilgit</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LandingPageFooter />
      <PortfolioModal
        modalDisplay={addModal}
        setmodalDisplay={setAddModal}
        getMainProfile={getProfile(token)}
        pname={name}
        page={age}
        pgender={gender}
        pcnic={cnic}
        pphone={phone}
        pcity={city}
        pcountry={country}
        pabout={about}
      />
    </>
  );
}
{
  /* <PortfolioModal modalDisplay={addModal} setmodalDisplay={setAddModal} getMainProfile={getProfile(token)} pname ={name} page={age} pgender={gender} pcnic={cnic} pphone={phone} pcity={city} pcountry={country} pabout={about}/> */
}
