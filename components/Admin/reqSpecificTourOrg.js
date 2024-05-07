import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { viewSpecificReqTourOrg } from '../../api';
import DisplayReqTourOrg from './DisplayReqTourOrg';

const ReqSpecificTourOrg = ({ token }) => {
  let navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState();
  const getData = async () => {
    let response = await viewSpecificReqTourOrg(token, params.id);
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
        <DisplayReqTourOrg obj={obj} token={token} />
      ))}
    </>
  );
};

ReqSpecificTourOrg.prototype = {
  token: PropTypes.string.isRequired,
};

const mapStatetoProps = (state) => ({
  token: state.auth.token,
});

export default connect(mapStatetoProps, {})(ReqSpecificTourOrg);
