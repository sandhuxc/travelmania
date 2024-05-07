import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { useParams, useNavigate } from 'react-router-dom';
import { addFeedback } from '../../api';
import Cookies from 'universal-cookie';

const FeedbackForm = ({ userID, token }) => {
  const params = useParams();
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  console.log(params.id);
  console.log(userID);
  console.log(token);

  const handleSubmit = async () => {
    let response = await addFeedback(
      token,
      userID,
      params.id,
      'package',
      feedback,
      rating
    );
    if (response == 404) {
      alert('not ok 1');
      return;
    } else {
      alert('ok');
    }
  };

  const onStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  return (
    <form className='bg-gray-200 p-8 rounded-lg shadow-md max-w-8xl mx-auto'>
      <h2 className='text-2xl font-semibold mb-4'>Leave Feedback</h2>
      <div className='mb-4'>
        <label htmlFor='rating' className='block font-semibold mb-2'>
          Rating:
        </label>
        <StarRatingComponent
          name='rating'
          starCount={5}
          value={rating}
          onStarClick={onStarClick}
          className='text-4xl'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='feedback' className='block font-semibold mb-2'>
          Feedback:
        </label>
        <textarea
          id='feedback'
          value={feedback}
          onChange={handleFeedbackChange}
          className='w-full p-2 rounded-lg shadow-inner focus:outline-none focus:ring focus:border-blue-300'
          rows='5'
        />
      </div>
      <button
        type='button'
        onClick={handleSubmit}
        className='px-3 py-3 text-white no-underline bg-gray-800 rounded hover:bg-orange-600 font-bold hover:text-white'
      >
        Submit
      </button>
    </form>
  );
};

export default FeedbackForm;
