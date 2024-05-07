import axios from 'axios';
import { reject } from 'p-cancelable';

var BASEURL = 'http://localhost:5000/';

// Calling api to fetch data regarding location-based-filtering

const getPlacesData = async (type, sw, ne) => {
  const apiURL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
  try {
    // request
    const {
      data: { data },
    } = await axios.get(apiURL, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};

const addUser = (email, password, usertype) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/user/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: email,
        Password: password,
        UserType: usertype,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

// verify otp

const verifyOtp = (email, otp) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/user/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: email,
        OtpCode: otp,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const addHelp = (name, email, title, desc) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/helpportal/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name: name,
        Email: email,
        Title: title,
        Desc: desc,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const addReqUser = (email, password, name, cnic, mobile, dob, address) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/requser/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: email,
        Password: password,
        name: name,
        cnic: cnic,
        mobile: mobile,
        dob: dob,
        address: address,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const addReqUserOrg = (
  email,
  password,
  name,
  cnic,
  mobile,
  dob,
  o_name,
  o_reg_no,
  o_phone,
  o_web,
  o_address
) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/requserorg/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: email,
        Password: password,
        name: name,
        cnic: cnic,
        mobile: mobile,
        dob: dob,
        o_name: o_name,
        o_reg_no: o_reg_no,
        o_phone: o_phone,
        o_web: o_web,
        o_address: o_address,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

//   Login a user

const authenticateUser = (email, password) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'authenticate/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Email: email,
        Password: password,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

// add portfolio for tour guide

const addTourGuidePorfolio = (
  token,
  name,
  age,
  gender,
  cnic,
  phone,
  city,
  country,
  about
) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/tourguide/portfolio/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
      body: JSON.stringify({
        Name: name,
        Age: age,
        Gender: gender,
        Cnic: cnic,
        Phone: phone,
        City: city,
        Country: country,
        About: about,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

// Tour Organization

const addTourOrgPorfolio = (token, name, country, contact, phone, about) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/tourorg/portfolio/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
      body: JSON.stringify({
        Name: name,
        Country: country,
        Contact: contact,
        Phone: phone,
        About: about,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

// Traveler

const addTravelerPorfolio = (
  token,
  name,
  phone,
  cnic,
  language,
  dob,
  gender,
  city,
  country,
  about
) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/traveler/portfolio/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
      body: JSON.stringify({
        Name: name,
        Phone: phone,
        Cnic: cnic,
        Language: language,
        Dob: dob,
        Gender: gender,
        City: city,
        Country: country,
        About: about,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const addPackage = (
  token,
  title,
  desc,
  place,
  hotel,
  price,
  imageURL,
  capacity
) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/package/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
      body: JSON.stringify({
        Title: title,
        Desc: desc,
        Place: place,
        Hotel: hotel,
        Price: price,
        ImageURL: imageURL,
        Capacity: capacity,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const addFeedback = (token, userGuid, entityguid, entitytype, desc, rating) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/feedback/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
      body: JSON.stringify({
        userGuid: userGuid,
        EntityGuid: entityguid,
        EntityType: entitytype,
        Desc: desc,
        Rating: rating,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};


const bookPackage = (token, packageGuid, bookingDate) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
      body: JSON.stringify({
        PackageGuid: packageGuid,
        BookingDate: bookingDate
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};


export const cancelBooking = (token, bookingGuid) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/booking/cancel', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
      body: JSON.stringify({
        BookingGuid: bookingGuid,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const changeAvailability = (token, packageGuid, availability) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/package/available', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
      body: JSON.stringify({
        PackageGuid: packageGuid,
        Availability: availability
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const addPackageDesc = (token, guid, time, day, event) => {
  console.log(event);
  console.log(day.value);
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/package/desc/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Guid: guid,
        Day: day?.value,
        Time: time?.value,
        Event: event?.value,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};


export const changePassword = (token, oldPass, newPass) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/password/change', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
      body: JSON.stringify({
        OldPass: oldPass,
        NewPass: newPass
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};


export const getFeedbacks = (packageGuid) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'get/feedback/view/' + packageGuid, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const viewTourGuidePorfolio = (token) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'get/tourguide/portfolio/view', {
      method: 'GET',
      headers: {
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

// Tour Org

const viewTourOrgPorfolio = (token) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'get/tourorg/portfolio/view', {
      method: 'GET',
      headers: {
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

// Traveler

const viewTravelerPorfolio = (token) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'get/traveler/portfolio/view', {
      method: 'GET',
      headers: {
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

// View Package
const viewPackages = (token) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'get/package/view', {
      method: 'GET',
      headers: {
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

// View Package
const viewAllPackages = () => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'get/package/view/all', {
      method: 'GET',
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const viewAllTourGuides = () => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'get//tourguide/view/all', {
      method: 'GET',
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const viewAllTourOrganizations = () => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'get//tourorg/view/all', {
      method: 'GET',
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const viewSpecificTourGuidePortfolio = (id) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'get//tourguide/portfolio/view/' + id, {
      method: 'GET',
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const viewSpecificTourOrganizationPortfolio = (id) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'get//tourorg/portfolio/view/' + id, {
      method: 'GET',
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const viewSpecificTPackage = (id) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'get//package/specific/view/' + id, {
      method: 'GET',
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const viewSpecificTPackageDesc = (id) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'get//package/desc/' + id, {
      method: 'GET',
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const getChats = (token, receiverGuid) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'get/chat/view/' + receiverGuid, {
      method: 'GET',
      headers: {
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const allChats = (token) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'get/chats', {
      method: 'GET',
      headers: {
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

// get profile for traveler
export const travelerProfile = (token) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'get/traveler/profile/view', {
      method: 'GET',
      headers: {
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};


export const organizerProfile = (token) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'get/organizer/profile/view', {
      method: 'GET',
      headers: {
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const sendChat = (token, receiverGuid, message) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/chat/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
      body: JSON.stringify({
        ReceiverGuid: receiverGuid,
        Message: message,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const makePayment = (
  token,
  packageGuid,
  price,
  email,
  card,
  cvc,
  month,
  year
) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'post/user/payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
      body: JSON.stringify({
        PackageGuid: packageGuid,
        Price: price,
        Email: email,
        ExpiryMonth: month,
        ExpiryYear: year,
        CVC: cvc,
        Card: card,
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const viewReqTourGuides = (token) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'admin/get/req/tourguide', {
      method: 'GET',
      headers: {
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const viewReqTourOrg = (token) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'admin/get/req/tourorg', {
      method: 'GET',
      headers: {
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const viewSpecificReqTourGuides = (token, req_guid) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'admin/get/req/tourguide/' + req_guid, {
      method: 'GET',
      headers: {
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const viewSpecificReqTourOrg = (token, req_guid) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'admin/get/req/tourorg/' + req_guid, {
      method: 'GET',
      headers: {
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const addReqTourGuide = (token, req_guid, email, password) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'admin/post/success', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
      body: JSON.stringify({
        req_guid: req_guid,
        email: email,
        password: password,
        table: 'req_tour_guide',
        user_type: 'Tour Guide',
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const addReqTourOrg = (token, req_guid, email, password) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'admin/post/success', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
      body: JSON.stringify({
        req_guid: req_guid,
        email: email,
        password: password,
        table: 'req_tour_org',
        user_type: 'Organization',
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const rejReqTourGuide = (token, req_guid, email) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'admin/post/failure', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
      body: JSON.stringify({
        req_guid: req_guid,
        email: email,
        table: 'req_tour_guide',
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const rejReqTourOrg = (token, req_guid, email) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'admin/post/failure', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
      body: JSON.stringify({
        req_guid: req_guid,
        email: email,
        table: 'req_tour_org',
      }),
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

const viewHelpQueries = (token) => {
  let promiseOne = new Promise((resolve, reject) => {
    let myData = fetch(BASEURL + 'admin/get/help/queries', {
      method: 'GET',
      headers: {
        Authorization: 'Barrier ' + token,
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Methods': 'PUT, POST, DELETE, GET',
      },
    }).then((data) => {
      if (data.status == 200) {
        return data.json();
      } else {
        return 404;
      }
    });
    resolve(myData);
  });
  return promiseOne.then((data) => {
    return data;
  });
};

export {
  viewHelpQueries,
  rejReqTourOrg,
  rejReqTourGuide,
  addReqTourOrg,
  addReqTourGuide,
  viewSpecificReqTourOrg,
  viewSpecificReqTourGuides,
  viewReqTourOrg,
  viewReqTourGuides,
  addFeedback,
  addUser,
  addReqUser,
  addReqUserOrg,
  addHelp,
  verifyOtp,
  authenticateUser,
  addTourGuidePorfolio,
  addTourOrgPorfolio,
  addTravelerPorfolio,
  viewTourGuidePorfolio,
  viewTourOrgPorfolio,
  viewTravelerPorfolio,
  viewSpecificTPackageDesc,
  viewPackages,
  addPackage,
  addPackageDesc,
  getPlacesData,
  viewAllPackages,
  viewAllTourGuides,
  viewSpecificTourGuidePortfolio,
  viewSpecificTPackage,
  viewAllTourOrganizations,
  viewSpecificTourOrganizationPortfolio,
  getChats,
  sendChat,
  makePayment,
  allChats,
  bookPackage,
  changeAvailability
};
