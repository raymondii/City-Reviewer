import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useStore } from '../store';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

import { CREATE_REVIEW } from '../graphql/mutations';
import { GET_ALL_REVIEWS, GET_USER_BY_ID } from '../graphql/queries';
// import {  } from '../graphql/queries'

function WriteAReview() {
  const { state, setState } = useStore();
  const [reviewBody, setReviewBody] = useState('');
  const [reviewCityName, setReviewCityName] = useState('');
  const navigate = useNavigate();

  const [createReview] = useMutation(CREATE_REVIEW, {
    variables: {
      cityName: reviewCityName,
      body: reviewBody,
      cityRating: 5,

      dayActivitiesRating: 5,
      outdoorActivitiesRating: 5,
      nightLifeRating: 5,
      costRating: 5,
      foodRating: 5,
      peopleRating: 5,
      safetyRating: 5,
      weatherRating: 5,
    },
    refetchQueries: [GET_ALL_REVIEWS, GET_USER_BY_ID],
  });

  const writeAReview = async (e) => {
    e.preventDefault();

    try {
      await createReview();
      // Navigate them to YOUR REVIEW WHEN PAGE IS MADE
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  };

  const handleCityInputChange = (e) => {
    setReviewCityName(e.target.value);
  };

  const handleBodyInputChange = (e) => {
    setReviewBody(e.target.value);
  };

  // Star rating states
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <>
      <section className='flex items-center mt-20 px-4'>
        <div className='bg-white p-8 rounded-xl shadow-md max-w-screen-lg w-full mx-auto border-2 border-slate-950'>
          <h2 className='text-3xl font-semibold mb-4'>Review City!</h2>

          <form onSubmit={writeAReview}>
            <div className='grid grid-cols-2 gap-4'></div>

            <div className='mt-4'>
              <h2 className='block text-slate-950 font-lg font-bold rounded-lg text-base'>
                City Name
              </h2>
              <input
                onChange={handleCityInputChange}
                type='text'
                value={reviewCityName}
                className='mt-1 p-2 w-full border rounded-md'
              />
            </div>

            <div className='mt-4'>
              <h2 className='block text-slate-950 font-lg font-bold rounded-lg text-base'>
                Share Your Thoughts
              </h2>
              <textarea
                onChange={handleBodyInputChange}
                type='text'
                value={reviewBody}
                className='mt-1 p-2 min-h-16 w-full border rounded-md'
              />
            </div>

            {/* Section for tags feature if possible */}

            <div className='mt-4'>
              <h1
                htmlFor='password'
                className='block text-slate-950 font-lg font-bold rounded-lg text-base'
              >
                Rate City
              </h1>
              <div className='city-rating rating'>
                {[...Array(5)].map((star, index) => {
                  const currentRating = index + 1;
                  return (
                    <label key={index}>
                      <input
                        type='radio'
                        name='rating'
                        value={currentRating}
                        onClick={() => setRating(currentRating)}
                      />
                      <FaStar
                        className='star  mt-2 mr-2'
                        size={30}
                        color={
                          currentRating <= (hover || rating)
                            ? '#2DC773'
                            : ' #7B8982'
                        }
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
              </div>
              <p>Stars: {rating}</p>
            </div>

            <div className='mt-8'>
              <button
                type='submit'
                className='w-full p-3 bg-blue-700 font-bold text-white rounded-md hover:bg-blue-800'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default WriteAReview;

//******************* Old V *********************/

// import { useState } from 'react';
// import { FaStar } from 'react-icons/fa';

// function WriteAReview() {
//   const [rating, setRating] = useState(null);
//   const [hover, setHover] = useState(null);

//   return (
//     <>
//       <section className='flex items-center mt-20 px-4'>
//         <div className='bg-white p-8 rounded-xl shadow-md max-w-screen-lg w-full mx-auto border-2 border-slate-950'>
//           <h2 className='text-3xl font-semibold mb-4'>Review City!</h2>

//           <form action='#' method='POST'>
//             <div className='grid grid-cols-2 gap-4'></div>

//             <div className='mt-4'>
//               <h2 className='block text-slate-950 font-lg font-bold rounded-lg text-base'>
//                 City Name
//               </h2>
//               <input
//                 type='text'
//                 name='cityName'
//                 className='mt-1 p-2 w-full border rounded-md'
//               />
//             </div>

//             <div className='mt-4'>
//               <h2 className='block text-slate-950 font-lg font-bold rounded-lg text-base'>
//                 Share Your Thoughts
//               </h2>
//               <textarea
//                 type='text'
//                 name='body'
//                 className='mt-1 p-2 min-h-16 w-full border rounded-md'
//               />
//             </div>

//             {/* Section for tags feature if possible */}

//             <div className='mt-4'>
//               <h1
//                 htmlFor='password'
//                 className='block text-slate-950 font-lg font-bold rounded-lg text-base'
//               >
//                 Rate City
//               </h1>
//               <div className='city-rating rating'>
//                 {[...Array(5)].map((star, index) => {
//                   const currentRating = index + 1;
//                   return (
//                     <label>
//                       <input
//                         type='radio'
//                         name='rating'
//                         value={currentRating}
//                         onClick={() => setRating(currentRating)}
//                       />
//                       <FaStar
//                         className='star  mt-2 mr-2'
//                         size={30}
//                         color={
//                           currentRating <= (hover || rating)
//                             ? '#2DC773'
//                             : ' #7B8982'
//                         }
//                         onMouseEnter={() => setHover(currentRating)}
//                         onMouseLeave={() => setHover(null)}
//                       />
//                     </label>
//                   );
//                 })}
//               </div>
//               <p>Star: {rating}</p>
//             </div>

//             <div className='mt-8'>
//               <button
//                 type='submit'
//                 className='w-full p-3 bg-blue-700 font-bold text-white rounded-md hover:bg-blue-800'
//               >
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// }

// export default WriteAReview;
