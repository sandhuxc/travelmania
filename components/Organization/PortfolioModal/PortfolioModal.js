import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
// import { addCredentials } from "../../api";
import Cookies from "universal-cookie";
import {addTourOrgPorfolio, viewTourOrgPorfolio} from '../../../api/index'

export default function PortfolioModal({modalDisplay, setmodalDisplay, getMainProfile}) {

    // Cookies to send user_token
  const cookies = new Cookies();
  let token = cookies.get("token");

// / UseEffect
useEffect(() => {
    getProfile(token);
  }, []);

  const getProfile = async (token) => {
    let response = await viewTourOrgPorfolio(token);
    if (response == 404) {
      navigate("/");
    }
    console.log(response)
    setName(response?.data[0]?.org_name)
    setContact(response?.data[0]?.primary_contact)
    setPhone(response?.data[0]?.phone_no)
    setCountry(response?.data[0]?.country)
    setAbout(response?.data[0]?.about)
  };


//   useEffect(() => {
//     setName(pname)
//     setAge(page)
//     setGender(pgender)
//     setCnic(pcnic)
//     setPhone(pphone)
//     setCity(pcity)
//     setCountry(pcountry)
//     setAbout(pabout)
//   }, []);



  let navigate = useNavigate();

  // States for View
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [contact, setContact] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");


  const addData = async () => {
    
    let response = await addTourOrgPorfolio(token, name, country, contact, phone, about)
      if (response == 404) {
        navigate("/");
      }
      setmodalDisplay("hidden")
      alert("Your Portfolio have been saved");
      getMainProfile()
  }

    return (
        <div className={`relative z-50 ${modalDisplay}`} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg font-semibold leading-6 text-gray-900 text-center" id="modal-title">Add Your Details here</h3>
                                <div className="mt-2 w-10/12 mx-auto">
                                    <div class="mt-3">
                                        <label
                                            for="FirstName"
                                            class="block text-sm font-medium text-gray-700"
                                        >
                                            Name
                                        </label>

                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            name="first_name"
                                            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        />
                                    </div>

                                    <div class="mt-3">
                                        <label
                                            for="FirstName"
                                            class="block text-sm font-medium text-gray-700"
                                        >
                                            Primary Contact
                                        </label>

                                        <input
                                            type="text"
                                            value={contact}
                                            onChange={(e) => setContact(e.target.value)}
                                            name="first_name"
                                            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        />
                                    </div>


                                    <div class="mt-3">
                                        <label
                                            for="FirstName"
                                            class="block text-sm font-medium text-gray-700"
                                        >
                                            Phone
                                        </label>

                                        <input
                                            type="text"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            name="first_name"
                                            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        />
                                    </div>

                                    <div class="mt-3">
                                        <label
                                            for="FirstName"
                                            class="block text-sm font-medium text-gray-700"
                                        >
                                            Country
                                        </label>

                                        <select
                                            name=""
                                            className="mt-3 focus:ring-slate-500 focus:border-slate-500 w-full shadow-sm sm:text-sm border-gray-300 rounded-xl h-12 mx-auto placeholder:font-semibold"
                                            onChange={(e) => setCountry(e.target.value)}
                                            value={country}
                                            >
                                            <option value="Pakistan">{"Pakistan"}</option>
                                            <option value="India">{"India"}</option>
                                        </select>
                                    </div>

                                    <div class="mt-3">
                                        <label
                                            for="FirstName"
                                            class="block text-sm font-medium text-gray-700"
                                        >
                                            About
                                        </label>

                                        <textarea
                                            rows={6}
                                            value={about}
                                            onChange={(e) => setAbout(e.target.value)}
                                            name="first_name"
                                            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="button" onClick={addData} className="inline-flex w-full justify-center rounded-md border border-transparent bg-black px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Update</button>
                            <button type="button" onClick={()=>setmodalDisplay('hidden')} className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
