import React, { useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { useStore } from '../store';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <>
      <main>
        <section className='py-20'>
          <div className='flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12'>
            <div className='relative'>
              <h2 className='w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl'>
                Discover City Reviews
              </h2>
              <p className='w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl'>
                Discover cities through the eyes of fellow travelers! Dive into
                honest reviews and insider tips from others who have something
                to share about their city visits.
              </p>
            </div>
          </div>

          <div className='flex justify-center px-4'>
            <NavLink
              to='/dashboard'
              style={{ textDecoration: 'none' }}
              className='text-white bg-teal-700 hover:bg-teal-500 font-lg font-bold rounded-lg text-xl px-4 lg:px-12 py-2 lg:py-2.5'
            >
              Click Here to View All Reviews!
            </NavLink>
          </div>
        </section>

        <section className='mb-20'>
          <div className='mx-auto max-w-7xl px-4'>
            <h3 className='text-left mb-4 text-3xl font-bold text-slate-950 '>
              Best Cities for Summer 2024 ☀️
            </h3>
            <div className=' grid  grid-cols-2 gap-8'>
              <div className='col-span-2 md:col-span-1 flex flex-col justify-end relative'>
                <div className='col-span-2 h-96 rounded-xl md:col-span-1 flex flex-col justify-end relative overflow-hidden'>
                  <img
                    src='../../public/assets/camden-main.jpeg'
                    alt='camden, maine'
                    className='w-full h-full object-cover rounded-t-md'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black'></div>
                  {/* <!-- Black gradient overlay --> */}
                  <div className='absolute bottom-0 left-0 right-0 px-6 py-4 text-white'>
                    <a href='#'>
                      <h2 className='font-bold text-xl'>Camden, ME</h2>
                      <p className='mb-3 description'>
                        Coastal charm meets scenic beauty. Sail the Penobscot
                        Bay, hike Camden Hills, savor fresh seafood, and explore
                        quaint shops. Perfect summer getaway for a classical
                        summer experience.
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-span-2 md:col-span-1 flex flex-col justify-end relative'>
                <div className='col-span-2 h-96 rounded-xl md:col-span-1 flex flex-col justify-end relative overflow-hidden'>
                  <img
                    src='../../public/assets/chicago-il.jpg'
                    alt='chicago, illinois'
                    className='w-full h-full object-cover rounded-t-md'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black'></div>
                  {/* <!-- Black gradient overlay --> */}
                  <div className='absolute bottom-0 left-0 right-0 px-6 py-4 text-white'>
                    <a href='#'>
                      <h2 className='font-bold text-xl'>Chicago, IL</h2>
                      <p className='mb-3 description'>
                        Dynamic city on Lake Michigan. Explore iconic
                        architecture, vibrant neighborhoods, world-class
                        museums, and diverse cuisine. Summer boasts festivals,
                        beaches, and outdoor concerts. Unforgettable urban
                        experience.
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-span-2 md:col-span-1 flex flex-col justify-end relative'>
                <div className='col-span-2 h-96 rounded-xl md:col-span-1 flex flex-col justify-end relative overflow-hidden'>
                  <img
                    src='../../public/assets/san-diego-ca.jpg'
                    alt='san diego, california'
                    className='w-full h-full object-cover rounded-t-md'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black'></div>
                  {/* <!-- Black gradient overlay --> */}
                  <div className='absolute bottom-0 left-0 right-0 px-6 py-4 text-white'>
                    <a href='#'>
                      <h2 className='font-bold text-xl'>San Deigo, CA</h2>
                      <p className='mb-3 description'>
                        Sunny paradise with stunning beaches, perfect waves for
                        surfing, and vibrant waterfront. Enjoy outdoor
                        activities, renowned zoo, and diverse culinary scene.
                        Ideal summer destination.
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-span-2 md:col-span-1 flex flex-col justify-end relative'>
                <div className='col-span-2 h-96 rounded-xl md:col-span-1 flex flex-col justify-end relative overflow-hidden'>
                  <img
                    src='../../public/assets/orlando-fl.jpg'
                    alt='orlando, florida'
                    className='w-full h-full object-cover rounded-t-md'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black'></div>
                  {/* <!-- Black gradient overlay --> */}
                  <div className='absolute bottom-0 left-0 right-0 px-6 py-4 text-white'>
                    <a href='#'>
                      <h2 className='font-bold text-xl'>Orlando, FL</h2>
                      <p className='mb-3 description'>
                        Home to world-famous theme parks like Disney World and
                        Universal Studios. Sunny weather, endless entertainment
                        options, and family-friendly attractions make it a
                        summer hotspot.
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
