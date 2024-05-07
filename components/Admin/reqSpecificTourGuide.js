import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { viewSpecificReqTourGuides } from '../../api';
import DisplayReqTourGuide from './DisplayReqTourGuide';

const ReqSpecificTourGuide = ({ token }) => {
  let navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState();
  const getData = async () => {
    let response = await viewSpecificReqTourGuides(token, params.id);
    if (response === 404) {
      navigate('/');
    }
    console.log(response.data);
    setData(response.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {data?.map((obj, index) => (
        <DisplayReqTourGuide obj={obj} token={token} />
      ))}
    </>
  );
};

ReqSpecificTourGuide.prototype = {
  token: PropTypes.string.isRequired,
};

const mapStatetoProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStatetoProps, {})(ReqSpecificTourGuide);
