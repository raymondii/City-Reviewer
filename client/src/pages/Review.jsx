import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import Loading from '../components/Loading';

import { GET_REVIEW_BY_ID } from '../graphql/queries';

function Review() {
  const { id } = useParams();

  const { data: { getReviewById: review } = {}, loading } = useQuery(
    GET_REVIEW_BY_ID,
    {
      variables: { review_id: id },
    }
  );

  if (loading) return <Loading />;

  // const { review } = reviewData;
  console.log(review);
  return (
    <>
      <section className='flex items-center mt-6 mb-20 mx-4'>
        <div className='bg-teal-700 p-8 rounded-xl shadow-md max-w-screen-lg w-full mx-auto'>
          <h2 className='text-3xl text-white font-semibold mb-2'>
            {review.cityName}
          </h2>
          <h3 className='font-semibold text-xl text-white flex items-center'>
            Posted by:
            <p className='font-normal ml-1'>{review.user.username}</p>
          </h3>

          <div className='grid grid-cols-2 gap-4'></div>

          <div className='mt-4'>
            <h2 className='block font-lg rounded-lg text-white text-base'>
              {review.body}
            </h2>
          </div>
          <hr className='mt-6' />
          <div className='my-6'>
            <h2 className='block text-3xl font-bold rounded-lg text-white'>
              City Rating 🌟
            </h2>
            <div className='text-3xl mb-8 flex'>
              {[...Array(review.cityRating)].map((r, index) => (
                <FaStar
                  key={index}
                  className='star mt-2 mr-2'
                  size={30}
                  color='#F2BE3F'
                ></FaStar>
              ))}
            </div>
          </div>

          <div className='flex flex-wrap mb-4'>
            <div className='w-full md:w-1/2'>
              <div className='mt-4'>
                <h2 className='block text-white text-xl font-bold rounded-lg text-base'>
                  Day Activities Rating ☀️
                </h2>
                <div className='text-3xl mb-8 flex'>
                  {[...Array(review.dayActivitiesRating)].map((r, index) => (
                    <FaStar
                      key={index}
                      className='star mt-2 mr-2'
                      size={30}
                      color='#F2BE3F'
                    ></FaStar>
                  ))}
                </div>
              </div>
              <div className='mt-4'>
                <h2 className='block text-white text-xl font-bold rounded-lg text-base'>
                  Outdoor Activities Rating 🌳
                </h2>
                <div className='text-3xl mb-8 flex'>
                  {[...Array(review.outdoorActivitiesRating)].map(
                    (r, index) => (
                      <FaStar
                        key={index}
                        className='star mt-2 mr-2'
                        size={30}
                        color='#F2BE3F'
                      ></FaStar>
                    )
                  )}
                </div>
              </div>
              <div className='mt-4'>
                <h2 className='block text-white text-xl font-bold rounded-lg text-base'>
                  Night Life Rating 🌃
                </h2>
                <div className='text-3xl mb-8 flex'>
                  {[...Array(review.nightLifeRating)].map((r, index) => (
                    <FaStar
                      key={index}
                      className='star mt-2 mr-2'
                      size={30}
                      color='#F2BE3F'
                    ></FaStar>
                  ))}
                </div>
              </div>
              <div className='mt-4'>
                <h2 className='block text-white text-xl font-bold rounded-lg text-base'>
                  Food Rating 🌮
                </h2>
                <div className='text-3xl mb-8 flex'>
                  {[...Array(review.foodRating)].map((r, index) => (
                    <FaStar
                      key={index}
                      className='star mt-2 mr-2'
                      size={30}
                      color='#F2BE3F'
                    ></FaStar>
                  ))}
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/2'>
              <div className='mt-4'>
                <h2 className='block text-white text-xl font-bold rounded-lg text-base'>
                  Culture Rating 🫶
                </h2>
                <div className='text-3xl mb-8 flex'>
                  {[...Array(review.peopleRating)].map((r, index) => (
                    <FaStar
                      key={index}
                      className='star mt-2 mr-2'
                      size={30}
                      color='#F2BE3F'
                    ></FaStar>
                  ))}
                </div>
              </div>
              <div className='mt-4'>
                <h2 className='block text-white text-xl font-bold rounded-lg text-base'>
                  Cost Rating 💸
                </h2>
                <div className='text-3xl mb-8 flex'>
                  {[...Array(review.costRating)].map((r, index) => (
                    <FaStar
                      key={index}
                      className='star mt-2 mr-2'
                      size={30}
                      color='#F2BE3F'
                    ></FaStar>
                  ))}
                </div>
              </div>
              <div className='mt-4'>
                <h2 className='block text-white text-xl font-bold rounded-lg text-base'>
                  Safety Rating 👍
                </h2>
                <div className='text-3xl mb-8 flex'>
                  {[...Array(review.safetyRating)].map((r, index) => (
                    <FaStar
                      key={index}
                      className='star mt-2 mr-2'
                      size={30}
                      color='#F2BE3F'
                    ></FaStar>
                  ))}
                </div>
              </div>
              <div className='mt-4'>
                <h2 className='block text-white text-xl font-bold rounded-lg text-base'>
                  Weather Rating ⛅️
                </h2>
                <div className='text-3xl mb-8 flex'>
                  {[...Array(review.weatherRating)].map((r, index) => (
                    <FaStar
                      key={index}
                      className='star mt-2 mr-2'
                      size={30}
                      color='#F2BE3F'
                    ></FaStar>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
