import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import PackageCard from '../../PackageCard/PackageCard'
import PackageModal from '../../PackageCard/PackageModal'
import {viewPackages} from '../../../api/index'
import Cookies from "universal-cookie";

export default function PackageBuilder() {

    // Cookies to send user_token
  const cookies = new Cookies();
  let token = cookies.get("token");
  let navigate = useNavigate();

  // / UseEffect
  useEffect(() => {
    getPackage(token);
  }, []);

  const getPackage = async (token) => {
    let response = await viewPackages(token);
    if (response == 404) {
      navigate("/");
    }
    console.log(response.data)
    setProjects(response.data)
  };

    const [projects, setProjects] = useState([])
    const [addModal, setAddModal] = useState('hidden')

    return(
        <div>
            <div className='flex justify-between'>
                <h3 className="text-xl font-medium mb-10">My Packages</h3>
                <div>
                    <button
                        onClick={()=> setAddModal('block')}
                        className="bg-[#28282b] uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Add a Package
                    </button>
                </div>

            </div>

            <hr className='mb-5'></hr>

          <div className="flex flex-wrap">
            {
              projects?.map((obj , index) => (
                <PackageCard key={index} title={obj?.title} description={obj?.description} price={obj?.price} capacity={obj?.capacity} place={obj?.place} hotel={obj?.hotel} />
              ))
            }
          </div>
            <PackageModal modalDisplay={addModal} setmodalDisplay={setAddModal}/>
        </div>
    )
}