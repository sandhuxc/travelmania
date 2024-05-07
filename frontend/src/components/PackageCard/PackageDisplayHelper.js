import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import {
  viewSpecificTourGuidePortfolio,
  viewSpecificTPackage,
  viewSpecificTourOrganizationPortfolio,
} from '../../api';
import PackageDisplayCard from './PackageDisplayCard';

function PackageDisplayHelper({ obj }) {
  const params = useParams();
  document.body.style.zoom = '90%';
  const cookies = new Cookies();
  let token = cookies.get('token');
  let navigate = useNavigate();
  const id = params.id;

  useEffect(() => {
    getPerson();
  }, []);

  const getPerson = async () => {
    let response = await viewSpecificTourGuidePortfolio(obj.user_guid);
    if (response == 404) {
      navigate('/');
    }
    if (response.data.length == 0) {
      let response1 = await viewSpecificTourOrganizationPortfolio(
        obj.user_guid
      );
      if (response1 == 404) {
        navigate('/');
      }
      console.log(response1.data);
      setPerson(response1.data);
    } else {
      console.log(response.data);
      setPerson(response.data);
    }
  };

  const [person, setPerson] = useState();
  return (
    <>
      {person?.map((obj1, index) => (
        <PackageDisplayCard obj={obj} person={obj1} />
      ))}
    </>
  );
}

export default PackageDisplayHelper;
