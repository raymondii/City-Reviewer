import { useQuery, useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { GET_USER_BY_ID, GET_ALL_REVIEWS } from '../graphql/queries';
import { DELETE_REVIEW, UPDATE_REVIEW } from '../graphql/mutations';
import { useStore } from '../store';
import { FaStar } from 'react-icons/fa';
import Loading from '../components/Loading';

import dayjs from 'dayjs';

function MyReviews() {
  const { state, setState } = useStore(); // Access the authentication state
  const userId = state.user?._id; // Assuming the user ID is stored in the user object
  const navigate = useNavigate();

  // Check if userId exists before querying
  const { data: { getUserbyId: user } = {}, loading } = useQuery(
    GET_USER_BY_ID,
    {
      variables: { user_id: userId }, // Use the retrieved user ID
      skip: !userId, // Skip the query if userId is null or undefined
    }
  );

  // Delete
  const [deleteReview] = useMutation(DELETE_REVIEW, {
    refetchQueries: [GET_USER_BY_ID, GET_ALL_REVIEWS],
  });

  const handleDeleteReview = async (review_id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete? ');

    if (confirmDelete) {
      await deleteReview({
        variables: {
          review_id: review_id,
        },
      });
    }
  };

  // Edit
  const handleUpdateReview = (review) => {
    setState({
      ...state,
      updateReview: review,
    });
    console.log(review);

    navigate('/writeareview');
  };

  if (loading) return <Loading />;

  return (
    <>
      <main>
        <section className='mt-6 mb-20'>
          <div className='mx-auto max-w-7xl px-4'>
            <h3 className='text-left mb-4 text-3xl font-bold text-slate-950'>
              Your Reviewed Cities 🏙️
            </h3>
            {/* IF NO REVIEWS */}
            {!user?.reviews?.length && (
              <>
                <div className='flex flex-col items-center justify-center '>
                  <h2 className='mt-16 text-3xl font-base text-center'>
                    No reviews yet! ✍️
                  </h2>
                  <p className='mt-4 max-w-3xl text-gray-600 text-xl font-base text-center'>
                    Take a moment to help others explore new destinations by
                    sharing your expereiences of places you've been to!
                  </p>
                </div>
              </>
            )}
            <div className='grid grid-cols-2 gap-8'>
              {/* CONTAINERS */}
              {user?.reviews
                ?.slice()
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
                          <h3 className='font-semibold text-xl'>
                            {user?.username}
                          </h3>
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
                          {/* <button
                            onClick={() => handleUpdateReview(review._id)}
                            className='rounded-lg w-28 px-6 py-2 mr-4 font-semibold text-white bg-black hover:bg-red-800 hover:border-black'
                          >
                            Edit
                          </button> */}
                          <button
                            onClick={() =>
                              handleDeleteReview(review._id, index)
                            }
                            className='rounded-lg w-28 px-6 py-2 mr-4 font-semibold text-white bg-black hover:bg-red-800 hover:border-black'
                          >
                            Delete
                          </button>

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

export default MyReviews;
