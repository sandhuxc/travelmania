import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { viewSpecificTourOrganizationPortfolio } from '../../api';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
import bgImage from '../../assets/bgImagePackage.jpg';
import OrganizationPortfolioDisplayCard from './PortfolioDisplayCard';
import LandingPageFooter from '../Footer/LandingPageFooter';

function OrganizationPortfolioDisplay() {
  const params = useParams();
  document.body.style.zoom = '90%';
  const cookies = new Cookies();
  let token = cookies.get('token');
  let navigate = useNavigate();
  const id = params.id;

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    let response = await viewSpecificTourOrganizationPortfolio(id);
    if (response == 404) {
      navigate('/');
    }
    console.log(response.data);
    setProfile(response.data);
  };

  const [profile, setProfile] = useState([]);
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
              Tour Organization Portfolio
            </h3>
          </div>
        </div>
      </div>
      {profile?.map((obj, index) => (
        <OrganizationPortfolioDisplayCard obj={obj} />
      ))}
      <LandingPageFooter />
    </>
  );
}

export default OrganizationPortfolioDisplay;
