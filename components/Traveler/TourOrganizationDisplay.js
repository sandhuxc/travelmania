import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TourGuideCard from './TourGuideCard';
import TourOrganizationCard from './TourOrganizationCard';
import { viewAllTourOrganizations } from '../../api';
import Cookies from 'universal-cookie';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
import { Icon } from '@iconify/react';
import bgImage from '../../assets/bgImagePackage.jpg';
import LandingPageFooter from '../Footer/LandingPageFooter';

export default function TourOrganizationDisplay() {
  document.body.style.zoom = '90%';
  const cookies = new Cookies();
  let token = cookies.get('token');
  let navigate = useNavigate();
  // load all the packages
  useEffect(() => {
    getOrganzations();
  }, []);

  const [filter, setFilter] = useState('')

  const searchFilter = () => {
    let data = []
    if (filter.length > 0)
    {
      realData.map((obj) => {
        if (obj?.org_name.toLowerCase().includes(filter.toLowerCase()))
        {
          data.push(obj)
        }
      })

      setOrganizations(data)
    }
    else
    {
      setOrganizations(realData)
    }
  }

  const getOrganzations = async () => {
    let response = await viewAllTourOrganizations();
    if (response == 404) {
      navigate('/');
    }
    console.log(response.data);
    setOrganizations(response.data);
    setRealData(response.data);
  };

  const [organizations, setOrganizations] = useState([]);
  const [realData, setRealData] = useState([]);
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
              Tour Organizations
            </h3>
            <div class='container flex justify-center m-auto mt-16 pb-16 opacity-100 z-50'>
              <div class='grid grid-cols-1'>
                <div class='p-6 bg-white rounded-md shadow-md'>
                  <div>
                    <div class='registration-form text-dark text-start'>
                      <div class='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-2 gap-6'>
                        <div class='filter-search-form relative filter-border'>
                          <i class='uil uil-search icons'></i>
                          <input
                            name='name'
                            type='text'
                            id='job-keyword'
                            class='form-input filter-input-box bg-gray-100 hover:bg-gray-200 border-gray-300 hover:border-gray-400 text-black w-full !h-12 rounded'
                            placeholder='Search your keywords'
                            value={filter}
                            onChange={(e) => {setFilter(e.target.value)}}
                          />
                        </div>

                        {/* <div class='filter-search-form relative filter-border'>
                          <select
                            class='btn bg-gray-100 hover:bg-gray-200 border-gray-300 hover:border-gray-400 text-black w-full !h-12 rounded'
                            data-trigger
                            name='choices-catagory'
                            id='choices-catagory'
                            aria-label='Default select example'
                          >
                            <option>Location</option>
                            <option>Murree</option>
                            <option>Kashmir</option>
                            <option>Gilgit</option>
                            <option>Swat</option>
                          </select>
                        </div> */}

                        <div>
                          <button
                            // type='submit'
                            onClick={searchFilter}
                            class='btn bg-gray-800 hover:bg-orange-600 border-indigo-600 hover:border-gray-900 text-white searchbtn w-full !h-12 rounded'
                          >
                          Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class='relative lg:py-18 py-16 flex justify-center m-auto'>
        <div class='container'>
          <div class='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]'>
            {organizations?.map((obj, index) => (
              <TourOrganizationCard key={index} obj={obj} />
            ))}
          </div>

          <div class='grid md:grid-cols-12 grid-cols-1 mt-8'>
            <div class='md:col-span-12 text-center'>
              <nav>
                <ul class='inline-flex items-center -space-x-px'>
                  <li>
                    <a
                      href='#'
                      class='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white rounded-l-lg hover:text-white border border-gray-100 hover:border-gray-800 hover:bg-gray-800'
                    >
                      <i class='uil uil-angle-left text-[20px]'>
                        <Icon icon='material-symbols:arrow-left' color='#006' />
                      </i>
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      class='z-10 w-[40px] h-[40px] inline-flex justify-center items-center text-white bg-gray-800 border border-gray-800'
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      class='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white border border-gray-100 hover:border-gray-800 hover:bg-gray-800'
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      aria-current='page'
                      class='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white border border-gray-100 hover:border-gray-800 hover:bg-gray-800'
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      class='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white border border-gray-100 hover:border-gray-800 hover:bg-gray-800'
                    >
                      4
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      class='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 hover:text-white bg-white border border-gray-100 hover:border-gray-800 hover:bg-gray-800'
                    >
                      5
                    </a>
                  </li>
                  <li>
                    <a
                      href='#'
                      class='w-[40px] h-[40px] inline-flex justify-center items-center text-slate-400 bg-white rounded-r-lg hover:text-white border border-gray-100 hover:border-gray-800  hover:bg-gray-800 '
                    >
                      <i class='uil uil-angle-right text-[20px]'>
                        <Icon
                          icon='material-symbols:arrow-right'
                          color='#006'
                        />
                      </i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <LandingPageFooter />
    </>
  );
}
