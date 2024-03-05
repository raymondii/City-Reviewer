import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { GET_USER_BY_ID } from '../graphql/queries';
import { GET_ALL_REVIEWS } from '../graphql/queries';

function User() {
  const { id } = useParams();

  const { data: { getUserbyId: user } = {}, loading } = useQuery(
    GET_USER_BY_ID,
    {
      variables: { user_id: id },
    }
  );

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {console.log(user.reviews)}
      <main>
        <section className='mt-6 mb-20'>
          <div className='mx-auto max-w-7xl px-4'>
            <h3 className='text-left mb-4 text-3xl font-bold text-slate-950'>
              {user.username.charAt(0).toUpperCase() + user.username.slice(1)}'s
              Reviewed Cities 🏙️
            </h3>
            {/* IF NO REVIEWS */}
            {!user.reviews?.length && <h2>No Reviews Avilable</h2>}
            <div className=' grid  grid-cols-2 gap-8'>
              {/* CONTAINERS */}
              {user.reviews?.map((review, index) => (
                <div
                  key={review._id}
                  className='col-span-2 md:col-span-1 flex flex-col justify-end relative'
                >
                  <div className='col-span-2 md:col-span-1 flex flex-col justify-start relative'>
                    <div className='col-span-2 h-96 rounded-xl md:col-span-1 flex flex-col bg-blue-700 justify-start relative overflow-hidden'>
                      <div className='absolute top-0 left-0 right-0 px-6 py-4 text-white'>
                        <h2 className='font-bold text-3xl'>
                          {review.cityName}
                        </h2>
                        <Link
                          to={`/user/${user._id}`}
                          className='font-semibold text-xl'
                        >
                          {user.username}
                        </Link>
                        <h3 className='text-3xl my-3'>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</h3>
                        <p className='description'>{review.body}</p>
                      </div>
                      {/* Button positioned at the bottom right */}
                      <div className='flex justify-end absolute bottom-0 right-0 m-6'>
                        <Link
                          to={`/review/${review._id}`}
                          className='rounded-lg px-6 py-2 font-semibold text-white bg-emerald-500 hover:bg-emerald-600'
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

export default User;
