import React from 'react';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import bgImage from '../../assets/bgImagePackage.jpg';
import { addReqTourOrg, rejReqTourOrg } from '../../api';

const DisplayReqTourOrg = ({ obj, token }) => {
  console.log(obj);
  let navigate = useNavigate();
  const suucessOnclick = async () => {
    addReqTourOrg(token, obj.req_guid, obj.email, obj.password);
    navigate('/admin/requests');
  };
  const rejectOnClick = async () => {
    rejReqTourOrg(token, obj.req_guid);
    navigate('/admin/requests');
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
            <h3 className='md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white items-center content-center m-auto text-center pt-32'>
              Requested Tour Organization
            </h3>
            <div class='container flex justify-center m-auto mt-16 pb-16 opacity-100 z-50'>
              <div class='grid grid-cols-1'>
                <div class='p-6 bg-transparent rounded-md shadow-md'></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-16 mx-16 bg-gray-200 py-8 px-8 rounded'>
        <div class='relative z-0 w-full mb-6 group'>
          <input
            type='email'
            name='floating_email'
            id='floating_email'
            class='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer text-black'
            placeholder=' '
            value={obj.email}
            required
            readOnly
          />
          <label
            for='floating_email'
            class='peer-focus:font-medium absolute text-lg text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Email address
          </label>
        </div>
        <div class='relative z-0 w-full mb-6 group'>
          <input
            type='o_name'
            name='floating_o_name'
            id='floating_o_name'
            class='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer text-black'
            placeholder=' '
            value={obj.o_name}
            required
            readOnly
          />
          <label
            for='floating_o_name'
            class='peer-focus:font-medium absolute text-lg text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Organization Name
          </label>
        </div>
        <div class='grid md:grid-cols-2 md:gap-6'>
          <div class='relative z-0 w-full mb-6 group'>
            <input
              type='o_phone'
              name='floating_o_phone'
              id='floating_o_phone'
              class='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer text-black'
              placeholder=' '
              value={obj.o_phone}
              required
              readOnly
            />
            <label
              for='floating_o_phone'
              class='peer-focus:font-medium absolute text-lg text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Organization Phone
            </label>
          </div>
          <div class='relative z-0 w-full mb-6 group'>
            <input
              type='o_reg_no'
              name='floating_o_reg_no'
              id='floating_o_reg_no'
              class='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer text-black'
              placeholder=' '
              value={obj.o_reg_no}
              required
              readOnly
            />
            <label
              for='floating_o_reg_no'
              class='peer-focus:font-medium absolute text-lg text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Organization Registeration Number
            </label>
          </div>
        </div>
        <div class='grid md:grid-cols-2 md:gap-6'>
          <div class='relative z-0 w-full mb-6 group'>
            <input
              type='o_web'
              name='floating_o_web'
              id='floating_o_web'
              class='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer text-black'
              placeholder=' '
              value={obj.o_web}
              required
              readOnly
            />
            <label
              for='floating_o_web'
              class='peer-focus:font-medium absolute text-lg text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Organization Website Link
            </label>
          </div>
          <div class='relative z-0 w-full mb-6 group'>
            <input
              type='o_address'
              name='floating_o_address'
              id='floating_o_address'
              class='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer text-black'
              placeholder=' '
              value={obj.o_address}
              required
              readOnly
            />
            <label
              for='floating_o_address'
              class='peer-focus:font-medium absolute text-lg text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Organization Address
            </label>
          </div>
        </div>
        <div class='grid md:grid-cols-2 md:gap-6'>
          <div class='relative z-0 w-full mb-6 group'>
            <input
              type='name'
              name='floating_name'
              id='floating_name'
              class='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer text-black'
              placeholder=' '
              value={obj.name}
              required
              readOnly
            />
            <label
              for='floating_name'
              class='peer-focus:font-medium absolute text-lg text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Owner Name
            </label>
          </div>
          <div class='relative z-0 w-full mb-6 group'>
            <input
              type='cnic'
              name='floating_cnic'
              id='floating_cnic'
              class='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer text-black'
              placeholder=' '
              value={obj.cnic}
              required
              readOnly
            />
            <label
              for='floating_cnic'
              class='peer-focus:font-medium absolute text-lg text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Owner CNIC
            </label>
          </div>
        </div>
        <div class='grid md:grid-cols-2 md:gap-6'>
          <div class='relative z-0 w-full mb-6 group'>
            <input
              type='date'
              name='floating_dob'
              id='floating_dob'
              class='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer text-black'
              placeholder=' '
              value={obj.dob.substring(0, 10)}
              required
              readOnly
            />
            <label
              for='floating_dob'
              class='peer-focus:font-medium absolute text-lg text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Owner Date of Birth
            </label>
          </div>
          <div class='relative z-0 w-full mb-6 group'>
            <input
              type='mobile'
              name='floating_mobile'
              id='floating_mobile'
              class='block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-orange-600 peer text-black'
              placeholder=' '
              value={obj.mobile}
              required
              readOnly
            />
            <label
              for='floating_mobile'
              class='peer-focus:font-medium absolute text-lg text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
            >
              Owner Mobile
            </label>
          </div>
        </div>
        <button
          type='submit'
          onClick={suucessOnclick}
          class='text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mr-6'
        >
          Approve
        </button>
        <button
          type='button'
          onClick={rejectOnClick}
          class='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
        >
          Reject
        </button>
      </div>
    </>
  );
};

export default DisplayReqTourOrg;
