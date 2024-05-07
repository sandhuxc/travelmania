import React, { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import bg from '../../assets/packagebg.jpg';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { bookPackage } from '../../api';
import { Height } from '@material-ui/icons';

export const ShowPackage = (props) => {
  const cookies = new Cookies();
  let token = cookies.get('token');
  let navigate = useNavigate();
  const { user_guid, guid, title, description, price, capacity, place, hotel, available, rating, number } =
    props;
  let image = props.image;
  if (image?.length === 0) {
    image = bg;
  }
  console.log(image);

  const gotoPayment = () => {
    navigate('/payment', {
      state: {
        package_guid: guid,
        price: price      
      }
    });
  }

  const confirmation = () => {
    confirmAlert(options)
  }


  const options = {
    title: 'Confirmation',
    message: 'Are you sure? you wont be able to revert',
    buttons: [
      {
        label: 'Proceed',
        onClick: () => gotoPayment()
      },
      {
        label: 'Cancel',
      }
    ],
    closeOnEscape: true,
    closeOnClickOutside: true,
    keyCodeForClose: [8, 32],
    willUnmount: () => {},
    afterClose: () => {},
    onClickOutside: () => {},
    onKeypress: () => {},
    onKeypressEscape: () => {},
    overlayClassName: "overlay-custom-class-name"
  };


  return (
    <div class='group rounded-md bg-white shadow hover:shadow-xl overflow-hidden ease-in-out duration-500'>
      <div class='relative'>
        <img src={image} alt='' className='w-400 h-80' />
      </div>

      <div class='p-6'>
        <div class='pb-3'>
          <Link
            to={`/package/${guid}`}
            className='text-lg hover:text-orange-600 font-medium ease-in-out duration-500'
          >
            {title}
          </Link>
        </div>

        <ul class='py-6 border-y border-gray-100 flex items-center list-none'>
          <li class='flex items-center mr-4'>
            <i class='text-2xl mr-2 text-indigo-600'>
              <Icon icon='material-symbols:location-on' color='#006' />
            </i>

            <span>{place}</span>
          </li>

          <li class='flex items-center mr-4'>
            <i class='text-2xl mr-2 text-indigo-600'>
              <Icon icon='material-symbols:hotel' color='#006' />
            </i>
            <span>{hotel}</span>
          </li>

          <li class='flex items-center'>
            <i class='text-2xl mr-2 text-indigo-600'>
              <Icon icon='mdi:people-group' color='#006' />
            </i>
            <span>{capacity} Person</span>
          </li>
        </ul>

        <ul class='pt-6 flex justify-between items-center list-none'>
          <li>
            <span class='text-slate-400'>Price</span>
            <p class='text-lg font-medium'>Rs. {price}</p>
          </li>

          <li>
            <span class='text-slate-400'>Rating</span>
            <ul class='text-lg font-medium text-amber-400 list-none'>
              <li class='inline text-black'>{rating != null? rating : "NR"}({number})</li>
            </ul>
          </li>
          <li>
            {
              available === 1?
                <button
                  onClick={confirmation}
                  class='px-3 py-3 text-white no-underline bg-gray-800 rounded hover:bg-orange-600 font-bold hover:text-white'
                  style={{ transition: 'all .15s ease' }}
                >
                  Book
                </button>
                :
                <button
                  class='px-3 py-3 text-white no-underline bg-gray-800 rounded hover:bg-orange-600 font-bold hover:text-white'
                  style={{ transition: 'all .15s ease' }}
                >
                  Closed
                </button>
            }
          </li>
        </ul>
      </div>
    </div>
  );
};
