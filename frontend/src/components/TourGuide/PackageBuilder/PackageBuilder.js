import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PackageCard from '../../PackageCard/PackageCard';
import PackageModal from '../../PackageCard/PackageModal';
import { viewPackages } from '../../../api/index';
import Cookies from 'universal-cookie';
import LandingPageNavbar from '../../Navbar/LandingPageNavbar';
import { Icon } from '@iconify/react';
import bgImage from '../../../assets/bgImagePackage.jpg';

export default function PackageBuilder() {
  // Cookies to send user_token
  const cookies = new Cookies();
  let token = cookies.get('token');
  let navigate = useNavigate();

  // / UseEffect
  useEffect(() => {
    getPackage(token);
  }, []);

  const getPackage = async (token) => {
    let response = await viewPackages(token);
    if (response == 404) {
      navigate('/');
    }
    console.log(response.data);
    setProjects(response.data);
  };

  const [projects, setProjects] = useState([]);
  const [addModal, setAddModal] = useState('hidden');

  return (
    <div>
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
              My Packages
            </h3>
          </div>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='mx-8 my-5'>
          <button
            onClick={() => navigate('/package/create')}
            className='px-3 py-3 text-white no-underline bg-gray-800 rounded hover:bg-orange-600 font-bold hover:text-white'
            type='button'
            style={{ transition: 'all .15s ease' }}
          >
            Add a new Package
          </button>
        </div>
      </div>

      <section class='relative lg:py-18 py-16 flex justify-center m-auto'>
        <div class='container'>
          <div class='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px]'>
            {projects?.map((obj, index) => (
              <PackageCard
                key={index}
                user_guid={obj.user_guid}
                guid={obj.package_guid}
                title={obj?.title}
                description={obj?.description}
                price={obj?.price}
                capacity={obj?.capacity}
                place={obj?.place}
                hotel={obj?.hotel}
                available = {obj?.is_available}
                getPackage = {getPackage}
                rating = {obj?.Rating}
                number = {obj?.Number}
              />
            ))}
          </div>
        </div>
      </section>
      <PackageModal modalDisplay={addModal} setmodalDisplay={setAddModal} />
    </div>
  );
}
