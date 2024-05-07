import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../../assets/arhumpic.jpg';
import bg1 from '../../assets/packagebg.jpg';
import { Icon } from '@iconify/react';

function OrganizationPortfolioDisplayCard({ obj }) {

  let navigate = useNavigate()
  const goToInbox = (id) => {
    navigate('/inbox', {
        state: {
          userId: id
        }
      });
  }


  return (
    <section class='relative md:py-24 py-16'>
      <div class='container'>
        <div class='grid md:grid-cols-12 grid-cols-1 gap-[30px] pl-24 pr-20'>
          <div class='lg:col-span-4 md:col-span-5'>
            <div class='lg:-mt-[150px] -mt-[130px]'>
              <div class='rounded-md bg-white shadow'>
                <div class='text-center py-8 p-6 border-b border-gray-100'>
                  <img
                    src={bg}
                    class='rounded shadow-md h-64 w-96 mx-auto block'
                    alt=''
                  />
                  <h5 class='mt-5 text-xl font-semibold mb-0'>
                    {obj.org_name}
                  </h5>
                  <p class='text-slate-400 mb-0'>Tour Organization</p>
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
                        <Icon
                          icon='material-symbols:person-pin-outline-rounded'
                          color='orange'
                        />
                      </i>
                      <span class='text-slate-400 mr-3'>Repreasentative :</span>{' '}
                      {obj.primary_contact}
                    </li>
                    <li class='flex mt-2 items-center font-medium'>
                      <i
                        data-feather='map-pin'
                        class='h-4 w-4 text-amber-500 mr-3'
                      >
                        <Icon icon='mdi:contact-phone-outline' color='orange' />
                      </i>
                      <span class='text-slate-400 mr-3'>Contact :</span>{' '}
                      {obj.phone_no}
                    </li>
                    <li class='flex mt-2 items-center font-medium'>
                      <i
                        data-feather='globe'
                        class='h-4 w-4 text-amber-500 mr-3'
                      >
                        <Icon icon='ph:globe' color='orange' />
                      </i>
                      <span class='text-slate-400 mr-3'>Country :</span>{' '}
                      {obj.country}
                    </li>
                  </ul>
                  <button onClick={() => {goToInbox(obj.user_guid)}}
                    className='btn bg-gray-800 hover:bg-orange-600 border-indigo-600
                    hover:border-gray-900 text-white searchbtn submit-btn w-1/2
                    !h-12 rounded mt-6'
                    type='button'
                    style={{ transition: 'all .5s ease' }}
                  >
                    {' '}
                    <button>Send Message</button>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class='lg:col-span-8 md:col-span-7'>
            <h4 class='text-xl font-semibold'>About :</h4>
            <p class='text-black mt-4'>{obj.about}</p>
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
  );
}

export default OrganizationPortfolioDisplayCard;
