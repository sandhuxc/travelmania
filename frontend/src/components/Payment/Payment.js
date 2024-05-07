import { render } from '@testing-library/react';
import React, { useEffect, useRef, useState } from 'react';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
import bgImage from '../../assets/bgImagePackage.jpg';
import Cookies from 'universal-cookie';
import { makePayment, bookPackage } from '../../api/index';
import Alert from '../Layout/Alert';
import { setAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useNavigate, useLocation } from 'react-router';

const Payment = ({ setAlert }) => {
  // Cookies to send user_token
  const cookies = new Cookies();
  let token = cookies.get('token');

  let navigate = useNavigate()
  let location = useLocation()

  const [card, setCard] = useState('');
  const [cvc, setCvc] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [email, setEmail] = useState('');
  const [price, setPrice] = useState('');
  const [bookingDate, setBookingDate] = useState('');

  const packageBooking = async () => {
    let bookingDateUpdate = bookingDate + ' 12:00:00'
    console.log(bookingDateUpdate, bookingDate)
    let response = await bookPackage(token, location.state.package_guid, bookingDateUpdate)
    if (response == 404) {
      navigate('/');
    }
    console.log(response);
    if (response.message === 'Success')
    {
      handleSubmit()
    }
  }

  const handleSubmit = async () => {
    let response = await makePayment(token, location.state.package_guid, location.state.price, email, card, cvc, expiryMonth, expiryYear)

    if (response == 404) {
        navigate('/login');
    }

    console.log(response)
    if (response.message === "Payment Successful!")
    {
        setAlert('Payment Successfull', 'green')
        setTimeout(() => {
            navigate('/');
          }, 3000);
    }
    else
    {
        setAlert('Payment Failed', 'red')
    }
  }

  const handleCreditCard = (event) => {
    const inputValue = event.target.value.slice(0, 16); // limit input to 16 characters
    const onlyDigits = inputValue.replace(/[^0-9]/g, ''); // remove any non-digit characters

    setCard(onlyDigits);
  };

  const handleCvc = (event) => {
    const inputValue = event.target.value.slice(0, 3); // limit input to 16 characters
    const onlyDigits = inputValue.replace(/[^0-9]/g, ''); // remove any non-digit characters

    setCvc(onlyDigits);
  };

  const handleExpiryMonth = (event) => {
    const inputValue = event.target.value.slice(0, 2); // limit input to 16 characters
    const onlyDigits = inputValue.replace(/[^0-9]/g, ''); // remove any non-digit characters

    setExpiryMonth(onlyDigits);
  };

  const handleExpiryYear = (event) => {
    const inputValue = event.target.value.slice(0, 4); // limit input to 16 characters
    const onlyDigits = inputValue.replace(/[^0-9]/g, ''); // remove any non-digit characters

    setExpiryYear(onlyDigits);
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
              Make your Payment
            </h3>
          </div>
        </div>
      </div>
      <section class='max-w-screen-2xl p-6 mx-auto bg-gray-300 rounded-md shadow-md mt-8 mb-20'>
        <h1 class='text-xl font-bold text-black capitalize'>Payment Details</h1>
        <form>
          <Alert />
          <div class='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label class='text-black' for='title'>
                Card Number :
              </label>
              <input
                id='title'
                type='text'
                placeholder='XXXXXXXXXXXXXXXX'
                maxLength={16}
                value={card}
                onChange={handleCreditCard}
                class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label class='text-black' for='price'>
                CVC:
              </label>
              <input
                id='price'
                type='text'
                placeholder='***'
                maxLength={3}
                onChange={handleCvc}
                value={cvc}
                class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label class='text-black' for='capacity'>
                Expiry Month :
              </label>
              <input
                id='capacity'
                type='text'
                placeholder='08'
                maxLength={2}
                onChange={handleExpiryMonth}
                value={expiryMonth}
                class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label class='text-black' for='location'>
                Expiry Year :
              </label>
              <input
                id='location'
                type='text'
                placeholder='2027'
                value={expiryYear}
                onChange={handleExpiryYear}
                maxLength={4}
                class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label class='text-black' for='hotel'>
                Email :
              </label>
              <input
                id='hotel'
                type='email'
                placeholder='travelmania@gmail.com'
                value={email}
                onChange={(e) => {setEmail(e.target.value)}}
                class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label class='text-black' for='hotel'>
                Booking Date :
              </label>
              <input
                id='hotel'
                type='date'
                value={bookingDate}
                onChange={(e) => {setBookingDate(e.target.value)}}
                class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>
          </div>

          <div class='flex justify-end mt-6'>
            <button
              type='button'
              onClick={packageBooking}
              class={`px-3 py-3 text-white no-underline bg-gray-800 rounded hover:bg-orange-600 font-bold hover:text-white`} 
            >
              Pay
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

Payment.propTypes = {
    setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Payment);
