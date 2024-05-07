import React from 'react';
import Logo from '../../assets/realLogo.png';
import Cookies from 'universal-cookie';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from '@material-tailwind/react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

function LandingPageNavbar(props) {
  const generallinks = (
    <>
      <li className='flex items-center'>
        <button
          className={
            (props.transparent
              ? 'bg-white text-gray-800 hover:bg-orange-500'
              : 'bg-gray-800 text-white active:bg-orange-600 hover:bg-orange-600') +
            ' text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
          }
          type='button'
          style={{ transition: 'all .5s ease' }}
        >
          {' '}
          <Link to='/login'>Login</Link>
        </button>
      </li>
    </>
  );

  const travellerlinks = (
    <li className='flex items-center'>
      <Menu>
        <MenuHandler>
          <Button
            variant='gradient'
            className={
              (props.transparent
                ? 'bg-white text-gray-800 hover:bg-orange-500'
                : 'bg-gray-800 text-white active:bg-orange-600 hover:bg-orange-600') +
              'dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap'
            }
          >
            Profile
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='caret-down'
              class='w-2 ml-2'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 320 512'
            >
              <path
                fill='currentColor'
                d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'
              ></path>
            </svg>
          </Button>
        </MenuHandler>
        <MenuList>
          <MenuItem>
            <Link
              to='/traveler-portfolio'
              className='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-orange-600 hover:text-white'
            >
              Portfolio
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/chats'
              className='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-orange-600 hover:text-white'
            >
              Inbox
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/profile'
              className='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-orange-600 hover:text-white'
            >
              Profile
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/settings'
              className='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-orange-600 hover:text-white'
            >
              Setting
            </Link>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => {
                props.logout();
                navigate('/login');
              }}
              type='button'
              class='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-orange-600 hover:text-white'
            >
              Log Out
            </button>
          </MenuItem>
        </MenuList>
      </Menu>
    </li>
  );

  const tourguidelinks = (
    <li className='flex items-center'>
      <Menu>
        <MenuHandler>
          <Button
            variant='gradient'
            className={
              (props.transparent
                ? 'bg-white text-gray-800 hover:bg-orange-500'
                : 'bg-gray-800 text-white active:bg-orange-600 hover:bg-orange-600') +
              'dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap'
            }
          >
            Profile
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='caret-down'
              class='w-2 ml-2'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 320 512'
            >
              <path
                fill='currentColor'
                d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'
              ></path>
            </svg>
          </Button>
        </MenuHandler>
        <MenuList>
          <MenuItem>
            <Link
              to='/tour-guide-portfolio'
              className='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-orange-600 hover:text-white'
            >
              My Portfolio
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/tour-guide-package'
              className='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-orange-600 hover:text-white'
            >
              My Packages
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/chats'
              className='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-orange-600 hover:text-white'
            >
              Inbox
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/profile'
              className='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-orange-600 hover:text-white'
            >
              Profile
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/settings'
              className='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-orange-600 hover:text-white'
            >
              Setting
            </Link>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => {
                props.logout();
                navigate('/login');
              }}
              type='button'
              class='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-orange-600 hover:text-white'
            >
              Log Out
            </button>
          </MenuItem>
        </MenuList>
      </Menu>
    </li>
  );

  const tourorglinks = (
    <li className='flex items-center'>
      <Menu>
        <MenuHandler>
          <Button
            variant='gradient'
            className={
              (props.transparent
                ? 'bg-white text-gray-800 hover:bg-orange-500'
                : 'bg-gray-800 text-white active:bg-orange-600 hover:bg-orange-600') +
              'dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap'
            }
          >
            Profile
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='caret-down'
              class='w-2 ml-2'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 320 512'
            >
              <path
                fill='currentColor'
                d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'
              ></path>
            </svg>
          </Button>
        </MenuHandler>
        <MenuList>
          <MenuItem>
            <Link
              to='/tour-guide-portfolio'
              className='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-orange-600 hover:text-white'
            >
              My Portfolio
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/tour-guide-package'
              className='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-orange-600 hover:text-white'
            >
              My Packages
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/chats'
              className='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-orange-600 hover:text-white'
            >
              Inbox
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/profile'
              className='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-orange-600 hover:text-white'
            >
              Profile
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to='/settings'
              className='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-orange-600 hover:text-white'
            >
              Setting
            </Link>
          </MenuItem>
          <MenuItem>
            <button
              onClick={() => {
                props.logout();
                navigate('/login');
              }}
              type='button'
              class='dropdown-toggle inline-block px-4 py-2 font-bold text-xs leading-tight uppercase rounded shadow-mdtransition duration-150 ease-in-out flex items-center whitespace-nowrap hover:bg-orange-600 hover:text-white'
            >
              Log Out
            </button>
          </MenuItem>
        </MenuList>
      </Menu>
    </li>
  );

  const links = (
    <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
      <li className='flex items-center'>
        <Link
          className={
            (props.transparent
              ? 'lg:text-white lg:hover:text-orange-500 text-gray-800'
              : 'text-gray-800 hover:text-orange-600') +
            ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
          }
          to='/'
        >
          Home
        </Link>
      </li>

      <li className='flex items-center'>
        <Link
          className={
            (props.transparent
              ? 'lg:text-white lg:hover:text-orange-500 text-gray-800'
              : 'text-gray-800 hover:text-orange-600') +
            ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
          }
          to='/location-based'
        >
          Explore
        </Link>
      </li>
      <li className='flex items-center'>
        <Link
          className={
            (props.transparent
              ? 'lg:text-white lg:hover:text-orange-500 text-gray-800'
              : 'text-gray-800 hover:text-orange-600') +
            ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
          }
          to='/package-view-all'
        >
          Packages
        </Link>
      </li>

      <li className='flex items-center'>
        <Link
          className={
            (props.transparent
              ? 'lg:text-white lg:hover:text-orange-500 text-gray-800'
              : 'text-gray-800 hover:text-orange-600') +
            ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
          }
          to='/tour-guide-view-all'
        >
          Tour Guides
        </Link>
      </li>

      <li className='flex items-center'>
        <Link
          className={
            (props.transparent
              ? 'lg:text-white lg:hover:text-orange-500 text-gray-800'
              : 'text-gray-800 hover:text-orange-600') +
            ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
          }
          to='/tour-org-view-all'
        >
          Organizations
        </Link>
      </li>

      <li className='flex items-center'>
        <Link
          className={
            (props.transparent
              ? 'lg:text-white lg:hover:text-orange-500 text-gray-800'
              : 'text-gray-800 hover:text-orange-600') +
            ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
          }
          to='/contact-us'
        >
          Contact Us
        </Link>
      </li>

      {props.userType == -1
        ? generallinks
        : props.userType == 0
        ? travellerlinks
        : props.userType == 1
        ? tourguidelinks
        : props.userType == 2
        ? tourorglinks
        : generallinks}
    </ul>
  );

  const adminLinks = (
    <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
      <li className='flex items-center'>
        <Link
          className={
            (props.transparent
              ? 'lg:text-white lg:hover:text-orange-500 text-gray-800'
              : 'text-gray-800 hover:text-orange-600') +
            ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
          }
          to='/'
        >
          Home
        </Link>
      </li>

      <li className='flex items-center'>
        <Link
          className={
            (props.transparent
              ? 'lg:text-white lg:hover:text-orange-500 text-gray-800'
              : 'text-gray-800 hover:text-orange-600') +
            ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
          }
          to='/admin/requests'
        >
          Requests
        </Link>
      </li>
      <li className='flex items-center'>
        <Link
          className={
            (props.transparent
              ? 'lg:text-white lg:hover:text-orange-500 text-gray-800'
              : 'text-gray-800 hover:text-orange-600') +
            ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
          }
          to='/package-view-all'
        >
          Packages
        </Link>
      </li>

      <li className='flex items-center'>
        <Link
          className={
            (props.transparent
              ? 'lg:text-white lg:hover:text-orange-500 text-gray-800'
              : 'text-gray-800 hover:text-orange-600') +
            ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
          }
          to='/tour-guide-view-all'
        >
          Tour Guides
        </Link>
      </li>

      <li className='flex items-center'>
        <Link
          className={
            (props.transparent
              ? 'lg:text-white lg:hover:text-orange-500 text-gray-800'
              : 'text-gray-800 hover:text-orange-600') +
            ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
          }
          to='/tour-org-view-all'
        >
          Organizations
        </Link>
      </li>

      <li className='flex items-center'>
        <Link
          className={
            (props.transparent
              ? 'lg:text-white lg:hover:text-orange-500 text-gray-800'
              : 'text-gray-800 hover:text-orange-600') +
            ' px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
          }
          to='/admin/help/queries'
        >
          Help Queries
        </Link>
      </li>
      <>
        <li className='flex items-center'>
          <button
            onClick={() => {
              props.logout();
              navigate('/login');
            }}
            type='button'
            class={
              (props.transparent
                ? 'bg-white text-gray-800 hover:bg-orange-500'
                : 'bg-gray-800 text-white active:bg-orange-600 hover:bg-orange-600') +
              ' text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3'
            }
          >
            Log Out
          </button>
        </li>
      </>
    </ul>
  );

  const cookies = new Cookies();
  let token = cookies.get('token');
  let navigate = useNavigate();
  const { pathname } = useLocation();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav
      className={
        (props.transparent
          ? 'top-0 absolute z-50 w-full'
          : 'relative shadow-lg bg-gray-300 shadow-lg') +
        ' flex flex-wrap items-center justify-between px-2 py-3 '
      }
    >
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <Link
            className={
              (props.transparent ? 'text-white' : 'text-gray-800') +
              ' text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
            }
            to='/'
          >
            <img src={Logo} alt='' className='w-7 inline mr-2' />
            TravelMania
          </Link>
          <button
            className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? 'text-white' : 'text-gray-800') +
                ' fas fa-bars'
              }
            ></i>
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
            (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
          }
          id='example-navbar-warning'
        >
          {props.userType === 3 ? adminLinks : links}
        </div>
      </div>
    </nav>
  );
}

LandingPageNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  userType: PropTypes.number,
};

const mapStatetoProps = (state) => ({
  userType: state.auth.userType,
});

export default connect(mapStatetoProps, { logout })(LandingPageNavbar);
