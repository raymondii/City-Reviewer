import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../store';
import { useQuery, useMutation } from '@apollo/client';
import { FaStar } from 'react-icons/fa';

import { GET_ALL_REVIEWS } from '../graphql/queries';

import Loading from '../components/Loading';

import dayjs from 'dayjs';

function Dashboard() {
  const { state, setState } = useStore();
  const { data: reviewData, loading } = useQuery(GET_ALL_REVIEWS);
  const [searchInput, setSearchInput] = useState('');

  if (loading) return <Loading />;

  const filteredCities = reviewData?.getAllReviews.filter((review) =>
    review.cityName.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchInput('');
  };

  {
    console.log(reviewData);
  }

  return (
    <>
      <main>
        <section className='py-6'>
          <div className='flex justify-center mx-4'>
            <div className='w-[60rem] rounded-xl  bg-white border-2 border-slate-950 flex'>
              <input
                type='search'
                className='w-full border-none bg-transparent rounded-xlg m-1 px-4 py-2 text-gray-900'
                placeholder='Search for city ex. Los Angeles, CA'
                value={searchInput}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </section>

        <section className='mb-20'>
          <div className='mx-auto max-w-7xl px-4'>
            <h3 className='text-left mb-4 text-3xl font-bold text-slate-950'>
              Cities Reviewed
            </h3>
            {/* IF NO REVIEWS */}
            {!filteredCities.length && (
              <>
                <div className='flex flex-col items-center justify-center '>
                  <h2 className='mt-16 text-3xl font-base text-center'>
                    No results for this city! 😅
                  </h2>
                  <p className='mt-4 max-w-3xl text-gray-600 text-xl font-base text-center'>
                    Sorry, we couldn't find any reviews for this city. Check
                    back later or contribute your own review to help others
                    discover this destination!
                  </p>
                  <button
                    onClick={handleClearSearch}
                    className='mt-8 text-white  bg-sky-950 hover:bg-sky-500 text-lg font-semibold rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5'
                  >
                    Clear Search
                  </button>
                </div>
              </>
            )}
            <div className=' grid  grid-cols-2 gap-8'>
              {/* CONTAINERS */}
              {filteredCities
                .slice()
                .reverse()
                .map((review, index) => (
                  <div
                    key={review._id}
                    className='col-span-2 md:col-span-1 flex flex-col justify-end relative'
                  >
                    <div className='col-span-2 md:col-span-1 flex flex-col justify-start relative'>
                      <div className='col-span-2 h-96 rounded-xl md:col-span-1 flex flex-col bg-teal-700 justify-start relative overflow-hidden'>
                        <div className='absolute top-0 left-0 right-0 px-6 py-4 text-white'>
                          <h2 className='font-bold text-3xl'>
                            {review.cityName}
                          </h2>
                          <hr className='h-0.5 my-3 bg-sky-950 border-0 rounded-full' />
                          <Link
                            to={`/user/${review.user._id}`}
                            className='font-semibold text-xl'
                          >
                            {review.user.username}
                          </Link>
                          <p className='mb-2 opacity-50'>
                            Created on:{' '}
                            {dayjs(review.createdAt).format('MM/DD/YY')}{' '}
                          </p>
                          <div className='text-3xl mb-3 flex'>
                            {[...Array(review.cityRating)].map((r, index) => (
                              <FaStar
                                key={index}
                                className='star mt-2 mr-2'
                                size={30}
                                color='#F2BE3F'
                              ></FaStar>
                            ))}
                          </div>
                          <p className='description line-clamp-5'>
                            {review.body}
                          </p>
                        </div>
                        {/* Button positioned at the bottom right */}
                        <div className='flex justify-end absolute bottom-0 right-0 m-6'>
                          <Link
                            to={`/review/${review._id}`}
                            className='rounded-lg px-6 py-2 font-semibold text-white bg-sky-950 hover:bg-sky-500'
                          >
                            See More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Dashboard;
