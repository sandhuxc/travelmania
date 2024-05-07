import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MailIcon } from '@heroicons/react/solid';
import Cookies from 'universal-cookie';
import { sendChat,getChats } from '../../api';

const Inbox = () => {

    const cookies = new Cookies();
    let token = cookies.get('token');

    let navigate = useNavigate()
    let location = useLocation()

    const [userguid, setUserguid] = useState('')
    const [username, setUserName] = useState('')

    useEffect(() => {
        getIntialData()
      }, []);


    const getIntialData = () => {
        let tokenAray = token.split(' ')
        setUserguid(tokenAray[1])
        myMessages()
    }

    const myMessages = async () => {
        let receiverGuid = location.state.userId
        let response = await getChats(token, receiverGuid);
        if (response == 404) {
            navigate('/');
        }
        setUserName(response?.moreData[0]?.email)
        setMessages(response?.data)
        console.log(messages)
    }
    
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSendMessage = async () => {
        if (message !== '') {
            let receiverGuid = location.state.userId
            let response = await sendChat(token, receiverGuid, message);
            if (response == 404) {
                navigate('/');
            }
            setMessage('')
            myMessages()
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="overflow-hidden bg-white shadow-xl sm:rounded-lg h-[90vh] flex flex-col">
                    <div className="bg-white border-b border-gray-200">
                        <div className="px-4 py-5 sm:px-6">
                            <h2 className="text-lg font-medium leading-6 text-gray-900">{username}</h2>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Inbox</h3>
                            <p className="mt-1 text-sm text-gray-500">Check your messages.</p>
                        </div>
                        <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                                <div className="relative w-3/4 max-w-xs">
                                    <label htmlFor="search" className="sr-only">Search</label>
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input id="search" name="search" className="block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:placeholder-gray-400 sm:text-sm" placeholder="Search in your inbox" type="search" />
                                </div>
                                <button type="button" className="inline-flex items-center px-3 py-2 ml-4 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={() => {
                                    navigate("/")
                                }}>
                                    Back
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-[90vh] overflow-y-auto">
                    {messages.map((msg, index) => (
                        <div
                        key={index}
                        className={`flex ${
                            msg.sender_guid == userguid ? "justify-end" : "justify-start"
                        } mb-2 mx-2`}
                        >
                        <div
                            className={`relative rounded-lg py-2 px-3 max-w-xs ${
                            msg.sender_guid == userguid ? "bg-blue-400 text-white ml-auto" : "bg-gray-200"
                            }`}
                        >
                            {msg.message}
                            {/* <span className="text-xs [#000000] absolute bottom-0 right-0">
                                {msg.time}
                            </span> */}
                        </div>

                        </div>
                    ))}
                    </div>
                    <div className="px-4 py-4 sm:px-6 mt-auto">
                        <div className="flex items-center justify-between">
                            <input type="text" placeholder="Type a message..." value={message} onChange={handleMessageChange} className="block w-full py-2 pr-10 leading-5 placeholder-gray-500 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:placeholder-gray-400 sm:text-sm" />
                            <button onClick={handleSendMessage} className="inline-flex items-center px-3 py-2 ml-4 text-sm font-medium text-white bg-blue-600 border border-transparent rounded -md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inbox;


