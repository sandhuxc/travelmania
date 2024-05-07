import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { allChats } from '../../api';
import LandingPageNavbar from "../Navbar/LandingPageNavbar";
import bgImage from "../../assets/bgImagePackage.jpg"


const ChatDetails = () => {

    const cookies = new Cookies();
    let token = cookies.get('token');

    let navigate = useNavigate()
    
    const [chats, setChats] = useState([])

    useEffect(() => {
        getAllChats()
      }, []);

      const getAllChats = async () => {
        let response = await allChats(token);
        if (response == 404) {
            navigate('/');
        }
        setChats(response.data)
      }

      const goToInbox = (id) => {
        navigate('/inbox', {
            state: {
              userId: id
            }
          });
      }

    return (
      <>
      <LandingPageNavbar transparent />
      {/* Image */}
      <div className='bg-center bg-no-repeat w-full h-full' style={{backgroundImage: `url(${bgImage})`}}>
          <div className="flex flex-col items-center justify-center h-full">
            <div>
              <div>
                <h3 className='md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white items-center content-center m-auto text-center pt-32 pb-4'>
                  Chats
                </h3>
              </div>
            </div>
            {/* Details */}
            <div className="w-full max-w-lg bg-[#000000] mt-5 mb-5">
              <div className="text-center border border-4 bg-[#FFB52E]">
                <h1 className="text-3xl font-bold mb-5">Users</h1>
                <p className="text-xl mb-5">These users are available for chat</p>
              </div>
              <ul className="divide-y divide-gray-300 px-3">
                {chats.map((user,index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center py-3 cursor-pointer hover:bg-[#FFB52E]"
                    onClick={() => goToInbox(user.user_guid)}
                  >
                    <div>
                      <h2 className="text-xl text-white font-bold">{user.email}</h2>
                      <p className="text-gray-300">{user.user_type}</p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </>
      );
    };
    

export default ChatDetails;
