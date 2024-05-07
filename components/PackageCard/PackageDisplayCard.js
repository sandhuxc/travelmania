import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../../assets/bgImagePackage.jpg';
import { Icon } from '@iconify/react';
import { useParams, useNavigate } from 'react-router-dom';
import bg from '../../assets/packagebg.jpg';
import { viewSpecificTPackageDesc, getFeedbacks } from '../../api';
import PackageDetailsCard from './PackageDetailsCard';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FeedbackForm from '../Traveler/FeedbackForm';

function PackageDisplayCard({ obj, person, token }) {
  const cToken = token;
  const splitToken = cToken.split(' ');
  const userID = splitToken[1];
  let navigate = useNavigate();
  const params = useParams();
  const [details, setDetails] = useState();
  const [feedbacks, setFeedbacks] = useState([]);
  console.log(token);

  useEffect(() => {
    getDetails();
    viewFeedbacks()
  }, []);

  const getDetails = async () => {
    let response = await viewSpecificTPackageDesc(params.id);
    if (response == 404) {
      navigate('/');
    }
    setDetails(response.data);
    console.log(response.data);
  };

  const viewFeedbacks = async () => {
    let response = await getFeedbacks(params.id);
    if (response == 404) {
      navigate('/');
    }
    setFeedbacks(response.data);
    console.log(response)
  };

  function showDetail() {
    const showarr = [];
    const loopi = details?.length / 3;
    if (loopi !== NaN) {
      for (let i = 0; i < loopi; i++) {
        let mor;
        let eve;
        let nigh;
        for (let j = 0; j < details?.length; j++) {
          if (details[j].day == i + 1 && details[j].time == 'Morning') {
            mor = details[j];
          }
          if (details[j].day == i + 1 && details[j].time == 'Evening') {
            eve = details[j];
          }
          if (details[j].day == i + 1 && details[j].time == 'Night') {
            nigh = details[j];
          }
        }
        showarr.push(<PackageDetailsCard mor={mor} eve={eve} nigh={nigh} />);
      }
    }
    return showarr;
  }

  let linkurl;
  if (person.name) {
    linkurl = `/tour-guide-portfolio/${person.user_guid}`;
  } else {
    linkurl = `/tour-org-portfolio/${person.user_guid}`;
  }
  return (
    <>
      <div
        className='bg-center bg-no-repeat w-full h-full'
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div>
          <div>
            <h3 className='md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white items-center content-center m-auto text-center pt-32'>
              {obj.title}
            </h3>
            <h4 className=' md:leading-normal leading-normal font-small text-white items-center content-center text-center pb-32'>
              by&nbsp;
              <Link
                to={linkurl}
                class='hover:text-orange-600 transition duration-500'
              >
                {person.name ? person.name : person.org_name}
              </Link>
            </h4>
            <div class='relative text-center z-10 bottom-5 right-0 left-0 mx-3'>
              <ul class='breadcrumb tracking-[1px] breadcrumb-light mb-0 inline-block'>
                <li class='inline-block items-center mt-2 mx-3'>
                  <Icon
                    icon='material-symbols:location-on'
                    color='orange'
                    className='inline-block mb-1'
                  />
                  <span class='text-white font-semibold inline-block ml-1'>
                    {obj.place}
                  </span>
                </li>

                <li class='inline-block font-semibold items-center mt-2 mx-3'>
                  <Icon
                    icon='material-symbols:hotel'
                    color='orange'
                    className='inline-block mb-1'
                  />
                  <span class='text-white ml-1 inline-block'>{obj.hotel}</span>
                </li>

                <li class='inline-block font-semibold items-center mt-2 mx-3'>
                  <Icon
                    icon='mdi:people-group'
                    color='orange'
                    className='inline-block mb-1'
                  />
                  <span class='text-white ml-1 inline-block'>
                    {obj.capacity} Person
                  </span>
                </li>

                {/* <li class='inline-block font-semibold items-center mt-2 mx-3'>
                  <Icon
                    icon='material-symbols:star-rate-half'
                    color='orange'
                    className='inline-block mb-1'
                  />
                  <span class='text-white ml-1 inline-block'>4.6(8)</span>
                </li> */}

                <li class='inline-block font-semibold items-center mt-2 mx-3'>
                  <Icon
                    icon='ion:pricetag-sharp'
                    color='orange'
                    className='inline-block mb-1'
                  />
                  <span class='text-white ml-1 inline-block'>
                    Rs.{obj.price}
                  </span>
                </li>

                {/* <li class='inline-block items-center mt-2 mx-3'>
                  <i class='uil uil-shopping-cart text-white align-middle'></i>
                  <Link
                    to='#'
                    class='px-3 pt-3 pb-3 mb-1 text-white no-underline  rounded hover:bg-orange-600 font-bold hover:text-white'
                    style={{ transition: 'all .15s ease' }}
                  >
                    Book
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section class='relative md:py-6 md:px-6 py-8 overflow-hidde0n flex justify-center'>
        <div class='container'>
          <div class='grid grid-cols-1'>
            <h5 class='text-2xl font-semibold mb-5'>Description</h5>

            <p class='text-slate-400 mb-3'>{obj.description}</p>
          </div>

          <div class='grid grid-cols-1 mt-8'>
            <h5 class='text-2xl font-semibold mb-5'>Timeline</h5>
          </div>

          <div class='grid md:grid-cols-2 grid-cols-1 pt-6 gap-[30px]'>
            {showDetail()}
          </div>
          <h5 class='text-2xl font-semibold mt-16 mb-5'>Feedbacks</h5>
            {
              feedbacks?.map((obj) => (
                <div className="bg-white rounded-lg shadow-lg p-6 mb-2 flex flex-col">
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
          <div class='grid md:grid-cols-2 grid-cols-1 mt-2 pb-16'>
            <img
              src={obj.image_url}
              class='rounded-md shadow flex justify-center'
              alt=''
            />
          </div>
          <div class=' mt-2 pb-16 w-100'>
            <FeedbackForm userID={userID} token={token}></FeedbackForm>
          </div>
        </div>
      </section>
    </>
  );
}

PackageDisplayCard.propTypes = {
  token: PropTypes.string,
};

const mapStatetoProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStatetoProps, null)(PackageDisplayCard);
