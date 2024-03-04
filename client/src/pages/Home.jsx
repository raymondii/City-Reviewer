import React, { useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { useStore } from '../store';

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
            <div className='w-[60rem] rounded-xl p-1 bg-white border-2 border-slate-950 flex'>
              <input
                type='search'
                className='w-full border-none bg-transparent rounded-xlg m-1 px-4 py-1 text-gray-900'
                placeholder='Search for city'
              />
              <button className='m-1 rounded-lg px-6 py-2 font-semibold text-gray-100 bg-blue-700 hover:bg-blue-800'>
                Search
              </button>
            </div>
          </div>
        </section>

        <section className='mb-20'>
          <div className='mx-auto max-w-7xl px-4'>
            <h3 className='text-left mb-4 text-3xl font-bold text-slate-950'>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam sagittis nunc vel ipsum ultricies, eget fermentum
                        felis finibus.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam sagittis nunc vel ipsum ultricies, eget fermentum
                        felis finibus.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam sagittis nunc vel ipsum ultricies, eget fermentum
                        felis finibus.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam sagittis nunc vel ipsum ultricies, eget fermentum
                        felis finibus.
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
