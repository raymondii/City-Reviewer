function Review() {
  return (
    <>
      <section className='flex items-center mt-6 mb-20 px-4'>
        <div className='bg-blue-700 p-8 rounded-xl shadow-md max-w-screen-lg w-full mx-auto'>
          <h2 className='text-3xl text-white font-semibold mb-2'>
            City Name, US
          </h2>
          <h3 className='font-semibold text-xl text-slate-200'>Username</h3>

          <div className='grid grid-cols-2 gap-4'></div>

          <div className='mt-4'>
            <h2 className='block font-lg rounded-lg text-white text-base'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sagittis nunc vel ipsum ultricies, eget fermentum felis finibus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sagittis nunc vel ipsum ultricies, eget fermentum felis finibus.
            </h2>
          </div>

          <div className='my-6'>
            <h2 className='block text-2xl font-bold rounded-lg text-white text-base'>
              City Rating
            </h2>
            <p className='text-3xl my-1'>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
          </div>

          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div className='mt-4'>
              <h2 className='block text-emerald-200 text-xl font-bold rounded-lg text-base'>
                Day Activities Rating
              </h2>
              <p className='text-3xl my-1'>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
            </div>
            <div className='mt-4'>
              <h2 className='block text-emerald-200 text-xl font-bold rounded-lg text-base'>
                Night Life Rating
              </h2>
              <p className='text-3xl my-1'>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
            </div>
            <div className='mt-4'>
              <h2 className='block text-emerald-200 text-xl font-bold rounded-lg text-base'>
                Outdoor Activities Rating
              </h2>
              <p className='text-3xl my-1'>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
            </div>
            <div className='mt-4'>
              <h2 className='block text-emerald-200 text-xl font-bold rounded-lg text-base'>
                Food Rating
              </h2>
              <p className='text-3xl my-1'>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
            </div>
            <div className='mt-4'>
              <h2 className='block text-emerald-200 text-xl font-bold rounded-lg text-base'>
                Culture Rating
              </h2>
              <p className='text-3xl my-1'>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
            </div>
            <div className='mt-4'>
              <h2 className='block text-emerald-200 text-xl font-bold rounded-lg text-base'>
                Cost Rating
              </h2>
              <p className='text-3xl my-1'>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
            </div>
            <div className='mt-4'>
              <h2 className='block text-emerald-200 text-xl font-bold rounded-lg text-base'>
                Safety Rating
              </h2>
              <p className='text-3xl my-1'>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
            </div>
            <div className='mt-4'>
              <h2 className='block text-emerald-200 text-xl font-bold rounded-lg text-base'>
                Weather Rating
              </h2>
              <p className='text-3xl my-1'>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
