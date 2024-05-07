import { render } from '@testing-library/react';
import React, { useEffect, useRef, useState } from 'react';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
import bgImage from '../../assets/bgImagePackage.jpg';
import Cookies from 'universal-cookie';
import { getFeedbacks } from '../../api/index';
import Alert from '../Layout/Alert';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';

const OwnerFeedback = ({ setAlert }) => {
  // Cookies to send user_token
  const cookies = new Cookies();
  let token = cookies.get('token');

  let navigate = useNavigate()
  let location = useLocation()

  const [feedbacks, setFeedbacks] = useState([])

  useEffect(() => {
    viewFeedbacks()
  }, [])


  const viewFeedbacks = async () => {
    let response = await getFeedbacks(location.state.package_guid);
    if (response == 404) {
      navigate('/');
    }
    setFeedbacks(response.data);
    console.log(response)
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
            <h3 className='md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white items-center content-center m-auto text-center pt-32 pb-32'>
              Package Feedbacks
            </h3>
          </div>
        </div>
      </div>
            {
              feedbacks?.map((obj) => (
                <div className="bg-white rounded-lg shadow-lg p-6 mt-2 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{obj.email}</h3>
                  <p className="text-gray-600 mb-4">{obj.description}</p>
                  <div className='flex items-center justify-between mb-2'>
                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 text-yellow-500 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 14.422l4.472 2.74-1.202-5.502L18 7.877l-5.527-.464L10 2 7.527 7.413 2 7.877l4.73 4.783L5.528 17.16 10 14.422z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-yellow-500 font-semibold">{obj.rating}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{obj.date_created.split('T')[0]}</p>
                  </div>
                </div>
              ))
            }
    </>
  );
};

OwnerFeedback.propTypes = {
    setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(OwnerFeedback);
