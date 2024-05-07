import { render } from '@testing-library/react';
import React, { useEffect, useRef, useState } from 'react';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
import bgImage from '../../assets/bgImagePackage.jpg';
import Cookies from 'universal-cookie';
import { travelerProfile, organizerProfile, cancelBooking } from '../../api/index';
import Alert from '../Layout/Alert';
import { setAlert } from '../../actions/alert';
import bg from '../../assets/bgImagePackage.jpg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';
import LineChartGraph from './LineChartGraph';

const Profile = ({ setAlert }) => {
  // Cookies to send user_token
  const cookies = new Cookies();
  let token = cookies.get('token');

  let navigate = useNavigate()
  let location = useLocation()

  const [users, setUsers] = useState([])
  const [organizers, setOrganizers] = useState([])

  const [revenue, setRevenue] = useState(0)

  const [show, setShow] = useState('hidden')

  useEffect(() => {
    profileForTraveler()
    profileForOrganizer()
  }, [])

  const seeGraph = () => {
    setShow(show == 'hidden' ? 'block' : 'hidden')
  }

  const cancelMyBooking = async (b_guid) => {
    let response = await cancelBooking(token, b_guid)
    if (response.message == "Success")
    {
      alert('Succcess')
      profileForOrganizer()
    }
  }

  const profileForTraveler = async () => {
    let response = await travelerProfile(token)
    console.log(response)
    setUsers(response.data)
  }

  const profileForOrganizer = async () => {
    let response = await organizerProfile(token)
    console.log(response)
    setOrganizers(response.data)
    let cash = 0
    response.data.map((obj) => {
      cash += parseInt(obj.price)
    })

    setRevenue(cash)

  }

  
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
              Profile
            </h3>
          </div>
        </div>
      </div>
      {/* Section 1 */}
        {
            users.length > 0?
            <h1 class='text-xl font-bold text-black capitalize text-center mb-5 mt-2'>My Scheduled Tours (to visit)</h1>
            :
            ""
        }
        <div className='flex justify-center flex-wrap'>
            {
                users?.map((obj) => (        
                    <div class="max-w-sm basis-1/5 bg-white shadow-md rounded-lg overflow-hidden mx-5 mb-5">
                        <img class="w-full h-48 object-cover" src={obj?.image_url.length > 0 ? obj?.image_url : bg} alt="Package Image" />
                        <div class="p-4">
                        <h2 class="text-xl font-semibold text-gray-800">{obj?.title}</h2>
                        <div class="flex items-center justify-between mt-2">
                            <div>
                            <p class="text-gray-600">Capacity:</p>
                            <p class="text-teal-600 font-semibold">{obj?.capacity} people</p>
                            </div>
                            <div>
                            <p class="text-gray-600">Price:</p>
                            <p class="font-semibold">${obj?.price}</p>
                            </div>
                        </div>
                        <div class="mt-4">
                            <p class="text-gray-600">Booking Date:</p>
                            <p class="font-semibold">{obj?.booking_date?.split('T')[0]}</p>
                        </div>
                        </div>
                    </div>
                ))
            }
        </div>

        {/* Section 2 */}
        {
            organizers.length > 0?
            <h1 class='text-xl font-bold text-black capitalize text-center mb-5 mt-2'>My Scheduled Tours (to take)</h1>
            :
            ""
        }
        {
            organizers.length > 0?
            <div className='flex justify-center hover:cursor-pointer' onClick={seeGraph}>
                <h1 class='text-xl font-bold text-black capitalize text-center mb-5 mt-2 mr-3'>My Revenue: {revenue} RS</h1>
                <h1 class='text-xl text-black text-center mb-5 mt-2 underline'>See Details</h1>
            </div>

            :
            ""
        }
        <div className='flex justify-center flex-wrap'>
            {
                organizers?.map((obj) => (        
                    <div class="max-w-sm basis-1/5 bg-white shadow-md rounded-lg overflow-hidden mx-5 mb-5">
                        <img class="w-full h-48 object-cover" src={obj?.image_url.length > 0 ? obj?.image_url : bg} alt="Package Image" />
                        <div class="p-4">
                        <h2 class="text-xl font-semibold text-gray-800">{obj?.title}</h2>
                        <div class="flex items-center justify-between mt-2">
                            <div>
                            <p class="text-gray-600">Capacity:</p>
                            <p class="text-teal-600 font-semibold">{obj?.capacity} people</p>
                            </div>
                            <div>
                            <p class="text-gray-600">Price:</p>
                            <p class="font-semibold">${obj?.price}</p>
                            </div>
                        </div>
                        <div class="mt-4">
                            <div>
                                <p class="text-gray-600">Booking Date:</p>
                                <p class="font-semibold">{obj?.booking_date?.split('T')[0]}</p>
                            </div>
                            <div>
                                <p class="text-gray-600">Email:</p>
                                <p class="font-semibold">{obj?.email}</p>
                            </div>
                            <div className='mt-2 flex justify-end'>
                              <button
                                onClick={() => {cancelMyBooking(obj?.booking_guid)}}
                                class='px-3 py-3 text-white no-underline bg-gray-800 rounded hover:bg-orange-600 font-bold hover:text-white'
                                style={{ transition: 'all .15s ease' }}
                              >
                                Cancel 
                              </button>
                            </div>
                        </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <LineChartGraph graphData={organizers? organizers : []} show={show} setShow = {setShow}/>
    </>
  );
};

Profile.propTypes = {
    setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Profile);
