import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { viewReqTourGuides } from '../../api/index';

const ReqTourGuides = ({ token }) => {
  console.log(token);
  let navigate = useNavigate();
  const [req, setReq] = useState();
  const getReq = async () => {
    let response = await viewReqTourGuides(token);
    if (response === 404) {
      navigate('/');
    }
    console.log(response.data);
    setReq(response.data);
  };
  useEffect(() => {
    getReq();
  }, []);
  return (
    <div class='list-group'>
      {req?.map((obj, index) => (
        <div
          class='shadow-lg list-group-item list-group-item-action bg-gray-300 border-gray-300 text-black  rounded pl-4 pr-4'
          aria-current='true'
        >
          <div class='flex items-center justify-between'>
            <h5 class='-mt-3 bold'>{obj.name}</h5>
            <small>
              {' '}
              <div>
                <Link
                  type='submit'
                  id='search'
                  to={'/admin/requests/tourguide/' + obj.req_guid}
                  name='search'
                  className='btn bg-gray-800 hover:bg-orange-600 border-indigo-600 hover:border-gray-900 text-white searchbtn submit-btn w-24 h-10 rounded mt-5 mr-3 flex items-center justify-center'
                  value='Search'
                >
                  {' '}
                  Detail{' '}
                </Link>
              </div>
            </small>
          </div>
          <p class='mb-2 -mt-3 pb-3'>
            Email: {obj.email} &nbsp; &nbsp; &nbsp;Contact: {obj.mobile}
          </p>
        </div>
      ))}
    </div>
  );
};

ReqTourGuides.prototype = {
  token: PropTypes.string.isRequired,
};

const mapStatetoProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStatetoProps, {})(ReqTourGuides);
