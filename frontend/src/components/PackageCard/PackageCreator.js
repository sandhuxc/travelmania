import { render } from '@testing-library/react';
import React, { useEffect, useRef, useState } from 'react';
import LandingPageNavbar from '../Navbar/LandingPageNavbar';
import bgImage from '../../assets/bgImagePackage.jpg';
import Cookies from 'universal-cookie';
import { addPackage, addPackageDesc } from '../../api/index';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from 'firebase/storage';
import { storage } from '../../firebase/firebase';
import { v4 } from 'uuid';

const PackageCreator = () => {
  // Cookies to send user_token
  const cookies = new Cookies();
  let token = cookies.get('token');

  const title = useRef();
  const description = useRef();
  const price = useRef();
  const capacity = useRef();
  const hotel = useRef();
  const days = useRef();
  const dayNo = useRef([]);
  const time = useRef([]);
  const event = useRef([]);

  // autocomplete functionality
  const autoCompleteRef = useRef();
  //location
  const inputRef = useRef();
  const options = {
    componentRestrictions: { country: 'pak' },
    fields: ['address_components', 'geometry', 'icon', 'name'],
    types: ['(cities)'],
  };

  const [disableState, setDisableState] = useState('hidden');
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState(null);

  const imagesListRef = ref(storage, 'images/');
  //   upload file is the function use to upload image on firebase and gives back a link that is (url)
  const uploadFile = () => {
    if (imageUpload == null) return;
    console.log(imageUpload);
    if (
      imageUpload.type == 'image/jpeg' ||
      imageUpload.type == 'image/jpg' ||
      imageUpload.type == 'image/png'
    ) {
      console.log('hello');
      const imageRef = ref(storage, `images/${v4()}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          console.log(url);
          setImageUrls(url);
          setDisableState('');
        });
      });
    } else {
      alert('Wrong Format for Image');
    }
  };

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
  }, []);

  const [numBoxes, setNumBoxes] = useState(0);

  const handleNumBoxesChange = (event) => {
    setNumBoxes(parseInt(event.target.value) || 0);
  };

  const handleInputChange = (index, event) => {
    // Update the value of the input at the given index
    dayNo.current[index].value = event.target.value;
  };

  const renderBoxes = () => {
    time.current.length = 0;
    dayNo.current.length = 0;
    event.current.length = 0;
    const boxes = [];
    for (let i = 0; i < numBoxes; i++) {
      boxes.push(
        <>
          <div>
            <label class='text-black' for='day'>
              Day {i + 1} :
            </label>
            <input
              id='day'
              type='text'
              key={i}
              value={i + 1}
              ref={(el) => dayNo.current.push(el)}
              placeholder='Title'
              readOnly
              class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
            />
          </div>
          <div>
            <label class='text-black' for='event'>
              Time :
            </label>
            <input
              id='time1'
              type='text'
              defaultValue='Morning'
              placeholder='Title'
              ref={(el) => time.current.push(el)}
              class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
            />
          </div>
          <div>
            <label class='text-black' for='event'>
              Event :
            </label>
            <input
              id='event1'
              type='text'
              placeholder='Title'
              ref={(el) => event.current.push(el)}
              class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
            />
          </div>
          <div>
            <label class='text-black' for='event'>
              Time :
            </label>
            <input
              id='time2'
              type='text'
              value='Evening'
              placeholder='Title'
              ref={(el) => time.current.push(el)}
              class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
            />
          </div>
          <div>
            <label class='text-black' for='event'>
              Event :
            </label>
            <input
              id='event2'
              type='text'
              placeholder='Title'
              ref={(el) => event.current.push(el)}
              class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
            />
          </div>
          <div>
            <label class='text-black' for='event'>
              Time :
            </label>
            <input
              id='time3'
              type='text'
              value='Night'
              ref={(el) => time.current.push(el)}
              placeholder='Title'
              class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
            />
          </div>
          <div>
            <label class='text-black' for='event'>
              Event :
            </label>
            <input
              id='event3'
              type='text'
              ref={(el) => event.current.push(el)}
              placeholder='Title'
              class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
            />
          </div>
        </>
      );
    }
    return boxes;
  };
  const buttonclick = async () => {
    let response = await addPackage(
      token,
      title.current.value,
      description.current.value,
      inputRef.current.value,
      hotel.current.value,
      price.current.value,
      imageUrls,
      capacity.current.value
    );
    if (response == 404) {
      alert('not ok 1');
      return;
    }
    let packageguid = response.package_guid;
    packageguid = packageguid.replaceAll('"', '').replaceAll("'", '');
    let j = -1;
    time.current = time.current.filter((elem) => {
      return elem !== null && elem !== undefined;
    });
    dayNo.current = dayNo.current.filter((elem) => {
      return elem !== null && elem !== undefined;
    });
    event.current = event.current.filter((elem) => {
      return elem !== null && elem !== undefined;
    });
    for (let i = 0; i < time.current.length; i++) {
      if (i % 3 == 0) {
        j++;
      }
      let response = await addPackageDesc(
        token,
        packageguid,
        time.current[i],
        dayNo.current[j],
        event.current[i]
      );
      if (response == 404) {
        alert('not ok 1');
      }
    }
    time.current.length = 0;
    dayNo.current.length = 0;
    event.current.length = 0;
  };
  return (
    <>
      <LandingPageNavbar transparent />
      <div
        className='bg-center bg-no-repeat w-full h-full'
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div>
          <div>
            <h3 className='md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white items-center content-center m-auto text-center pt-32 pb-32'>
              Create a Package
            </h3>
          </div>
        </div>
      </div>
      <section class='max-w-screen-2xl p-6 mx-auto bg-gray-300 rounded-md shadow-md mt-8 mb-20'>
        <h1 class='text-xl font-bold text-black capitalize'>Package Details</h1>
        <form>
          <div class='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label class='text-black' for='title'>
                Package Title :
              </label>
              <input
                id='title'
                type='text'
                placeholder='Title'
                ref={title}
                class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label class='text-black' for='description'>
                Description :
              </label>
              <textarea
                id='description'
                type='description'
                placeholder='Description'
                ref={description}
                class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label class='text-black' for='price'>
                Price :
              </label>
              <input
                id='price'
                type='price'
                placeholder='Price'
                ref={price}
                class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label class='text-black' for='capacity'>
                Capacity :
              </label>
              <input
                id='capacity'
                type='capacity'
                placeholder='Capacity'
                ref={capacity}
                class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label class='text-black' for='location'>
                Location :
              </label>
              <input
                id='location'
                type='location'
                placeholder='Location'
                ref={inputRef}
                class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label class='text-black' for='hotel'>
                Hotel :
              </label>
              <input
                id='hotel'
                type='hotel'
                placeholder='Hotel (visit explore tab to book hotel)'
                ref={hotel}
                class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>
            <div>
              <label class='text-black' for='hotel'>
                Number of Days :
              </label>
              <input
                id='hotel'
                type='text'
                value={numBoxes}
                placeholder='Days'
                onChange={handleNumBoxesChange}
                ref={days}
                class='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
              />
            </div>
            {renderBoxes()}
            <div>
              <div className='App'>
                <label class='text-black' for='hotel'>
                  Image :
                </label>
                <input
                  type='file'
                  className='block w-1/2 px-4 py-2 mt-2 mb-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring'
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
                <button
                  type='button'
                  onClick={uploadFile}
                  className='px-3 py-3 text-white no-underline bg-gray-800 rounded hover:bg-orange-600 font-bold hover:text-white'
                >
                  {/* {' '} */}
                  Upload Image
                </button>
              </div>
            </div>
          </div>

          <div class='flex justify-end mt-6'>
            <button
              type='button'
              onClick={buttonclick}
              class={`px-3 py-3 text-white no-underline bg-gray-800 rounded hover:bg-orange-600 font-bold hover:text-white ${disableState}`}
            >
              Create
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default PackageCreator;
