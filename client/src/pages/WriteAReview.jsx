import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useStore } from '../store';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

import { CREATE_REVIEW, UPDATE_REVIEW } from '../graphql/mutations';
import { GET_ALL_REVIEWS, GET_USER_BY_ID } from '../graphql/queries';

function WriteAReview() {
  const { state, setState } = useStore();
  const [reviewBody, setReviewBody] = useState('');
  const [reviewCityName, setReviewCityName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Star rating states
  const [cityRating, setCityRating] = useState(null);
  const [dayActivitiesRating, setDayActivitiesRating] = useState(null);
  const [outdoorActivitiesRating, setOutdoorActivitiesRating] = useState(null);
  const [nightLifeRating, setNightLifeRating] = useState(null);
  const [costRating, setCostRating] = useState(null);
  const [foodRating, setFoodRating] = useState(null);
  const [peopleRating, setPeopleRating] = useState(null);
  const [safetyRating, setSafetyRating] = useState(null);
  const [weatherRating, setWeatherRating] = useState(null);

  const [hover, setHover] = useState({
    cityRate: null,
    dayActivitiesRate: null,
    outdoorActivitiesRate: null,
    nightlifeRate: null,
    costRate: null,
    foodRate: null,
    peopleRate: null,
    safetyRate: null,
    weatherRate: null,
  });

  const [createReview] = useMutation(CREATE_REVIEW, {
    variables: {
      cityName: reviewCityName,
      body: reviewBody,
      cityRating: cityRating,

      dayActivitiesRating: dayActivitiesRating,
      outdoorActivitiesRating: outdoorActivitiesRating,
      nightLifeRating: nightLifeRating,
      costRating: costRating,
      foodRating: foodRating,
      peopleRating: peopleRating,
      safetyRating: safetyRating,
      weatherRating: weatherRating,
    },
    refetchQueries: [GET_ALL_REVIEWS, GET_USER_BY_ID],
  });

  const writeAReview = async (e) => {
    e.preventDefault();
    try {
      await createReview();
      setErrorMessage('');
      navigate('/myreviews');
    } catch (error) {
      console.log(error);
      setErrorMessage(
        'Please ensure all fields are filled out and a rating is provided for each category.'
      );
    }
  };

  const handleCityInputChange = (e) => {
    setReviewCityName(e.target.value);
  };

  const handleBodyInputChange = (e) => {
    setReviewBody(e.target.value);
  };

  // UPDATE REVIEW
  // const [updateReview] = useMutation(UPDATE_REVIEW, {
  //   variables: {
  //     cityName: reviewCityName,
  //     body: reviewBody,
  //     cityRating: cityRating,

  //     dayActivitiesRating: dayActivitiesRating,
  //     outdoorActivitiesRating: outdoorActivitiesRating,
  //     nightLifeRating: nightLifeRating,
  //     costRating: costRating,
  //     foodRating: foodRating,
  //     peopleRating: peopleRating,
  //     safetyRating: safetyRating,
  //     weatherRating: weatherRating,
  //     review_id: state.updateReview?._id,
  //   },
  //   refetchQueries: [GET_ALL_REVIEWS, GET_USER_BY_ID],
  // });

  // useEffect(() => {
  //   if (state.updateReview) {
  //     setReviewCityName(state.updateReview.cityName);
  //     setReviewBody(state.updateReview.body);
  //     setCityRating(state.updateReview.cityRating);
  //     setDayActivitiesRating(state.updateReview.dayActivitiesRating);
  //     setOutdoorActivitiesRating(state.updateReview.outdoorActivitiesRating);
  //     setNightLifeRating(state.updateReview.nightLifeRating);
  //     setCostRating(state.updateReview.costRating);
  //     setFoodRating(state.updateReview.foodRating);
  //     setPeopleRating(state.updateReview.peopleRating);
  //     setSafetyRating(state.updateReview.safetyRating);
  //     setWeatherRating(state.updateReview.weatherRating);
  //   }
  // }, []);

  // const writeorEditAReview = async (e) => {
  //   e.preventDefault();
  //   if (!state.updateReview) {
  //     try {
  //       await createReview();
  //       // Navigate them to YOUR REVIEW WHEN PAGE IS MADE
  //       navigate('/myreviews');
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     await updateReview();

  //     // setState({
  //     //   ...state,
  //     //   updateReview: null,
  //     // });

  //     navigate('/myreviews');
  //   }
  // };

  return (
    <>
      <section className='flex items-center my-6 px-4'>
        <div className='bg-white p-8 rounded-xl shadow-md max-w-screen-lg w-full mx-auto border-2 border-slate-950'>
          <h2 className='text-3xl font-semibold mb-4'>Review City!</h2>

          <form onSubmit={writeAReview}>
            {errorMessage && (
              <p className='error text-red-600 text-center'>{errorMessage}</p>
            )}
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
                placeholder='ex: Los Angeles, CA'
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
            {/* RATING */}
            <div className='mt-4'>
              <h1
                htmlFor='password'
                className='block text-slate-950 font-lg font-bold rounded-lg text-base'
              >
                Rate City 🌟
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
                        onClick={() => setCityRating(currentRating)}
                      />
                      <FaStar
                        className='star  mt-2 mr-2'
                        size={30}
                        color={
                          currentRating <= (hover.cityRate || cityRating)
                            ? 'rgb(20 184 166)'
                            : ' #7B8982'
                        }
                        onMouseEnter={() =>
                          setHover({
                            ...hover,
                            cityRate: currentRating,
                          })
                        }
                        onMouseLeave={() =>
                          setHover({
                            ...hover,
                            cityRate: null,
                          })
                        }
                      />
                    </label>
                  );
                })}
              </div>
              {/* <p>Stars: {cityRating}</p> */}
            </div>

            <div className='flex flex-wrap'>
              <div className='w-full md:w-1/2'>
                {/* DAY ACT RATING */}
                <div className='mt-4'>
                  <h1
                    htmlFor='password'
                    className='block text-slate-950 font-lg font-bold rounded-lg text-base'
                  >
                    Rate Day Activities ☀️
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
                            onClick={() =>
                              setDayActivitiesRating(currentRating)
                            }
                          />
                          <FaStar
                            className='star  mt-2 mr-2'
                            size={30}
                            color={
                              currentRating <=
                              (hover.dayActivitiesRate || dayActivitiesRating)
                                ? 'rgb(20 184 166)'
                                : ' #7B8982'
                            }
                            onMouseEnter={() =>
                              setHover({
                                ...hover,
                                dayActivitiesRate: currentRating,
                              })
                            }
                            onMouseLeave={() =>
                              setHover({
                                ...hover,
                                dayActivitiesRate: null,
                              })
                            }
                          />
                        </label>
                      );
                    })}
                  </div>
                  {/* <p>Stars: {dayActivitiesRating}</p> */}
                </div>

                {/* OUTDOOR ACT RATING */}
                <div className='mt-4'>
                  <h1
                    htmlFor='password'
                    className='block text-slate-950 font-lg font-bold rounded-lg text-base'
                  >
                    Rate Outdoor Activities 🌳
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
                            onClick={() =>
                              setOutdoorActivitiesRating(currentRating)
                            }
                          />
                          <FaStar
                            className='star  mt-2 mr-2'
                            size={30}
                            color={
                              currentRating <=
                              (hover.outdoorActivitiesRate ||
                                outdoorActivitiesRating)
                                ? 'rgb(20 184 166)'
                                : ' #7B8982'
                            }
                            onMouseEnter={() =>
                              setHover({
                                ...hover,
                                outdoorActivitiesRate: currentRating,
                              })
                            }
                            onMouseLeave={() =>
                              setHover({
                                ...hover,
                                outdoorActivitiesRate: null,
                              })
                            }
                          />
                        </label>
                      );
                    })}
                  </div>
                  {/* <p>Stars: {outdoorActivitiesRating}</p> */}
                </div>

                {/* NIGHTLIFE ACT RATING */}
                <div className='mt-4'>
                  <h1
                    htmlFor='password'
                    className='block text-slate-950 font-lg font-bold rounded-lg text-base'
                  >
                    Rate Nightlife Activities 🌃
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
                            onClick={() => setNightLifeRating(currentRating)}
                          />
                          <FaStar
                            className='star  mt-2 mr-2'
                            size={30}
                            color={
                              currentRating <=
                              (hover.nightlifeRate || nightLifeRating)
                                ? 'rgb(20 184 166)'
                                : ' #7B8982'
                            }
                            onMouseEnter={() =>
                              setHover({
                                ...hover,
                                nightlifeRate: currentRating,
                              })
                            }
                            onMouseLeave={() =>
                              setHover({
                                ...hover,
                                nightlifeRate: null,
                              })
                            }
                          />
                        </label>
                      );
                    })}
                  </div>
                  {/* <p>Stars: {nightLifeRating}</p> */}
                </div>

                {/* COST RATING */}
                <div className='mt-4'>
                  <h1
                    htmlFor='password'
                    className='block text-slate-950 font-lg font-bold rounded-lg text-base'
                  >
                    Rate Cost of City 💸
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
                            onClick={() => setCostRating(currentRating)}
                          />
                          <FaStar
                            className='star  mt-2 mr-2'
                            size={30}
                            color={
                              currentRating <= (hover.costRate || costRating)
                                ? 'rgb(20 184 166)'
                                : ' #7B8982'
                            }
                            onMouseEnter={() =>
                              setHover({
                                ...hover,
                                costRate: currentRating,
                              })
                            }
                            onMouseLeave={() =>
                              setHover({
                                ...hover,
                                costRate: null,
                              })
                            }
                          />
                        </label>
                      );
                    })}
                  </div>
                  {/* <p>Stars: {costRating}</p> */}
                </div>
              </div>
              <div className='w-full md:w-1/2'>
                {/* FOOD RATING */}
                <div className='mt-4'>
                  <h1
                    htmlFor='password'
                    className='block text-slate-950 font-lg font-bold rounded-lg text-base'
                  >
                    Rate the Food 🌮
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
                            onClick={() => setFoodRating(currentRating)}
                          />
                          <FaStar
                            className='star  mt-2 mr-2'
                            size={30}
                            color={
                              currentRating <= (hover.foodRate || foodRating)
                                ? 'rgb(20 184 166)'
                                : ' #7B8982'
                            }
                            onMouseEnter={() =>
                              setHover({
                                ...hover,
                                foodRate: currentRating,
                              })
                            }
                            onMouseLeave={() =>
                              setHover({
                                ...hover,
                                foodRate: null,
                              })
                            }
                          />
                        </label>
                      );
                    })}
                  </div>
                  {/* <p>Stars: {foodRating}</p> */}
                </div>

                {/* CULTURE RATING */}
                <div className='mt-4'>
                  <h1
                    htmlFor='password'
                    className='block text-slate-950 font-lg font-bold rounded-lg text-base'
                  >
                    Rate the Culture 🫶
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
                            onClick={() => setPeopleRating(currentRating)}
                          />
                          <FaStar
                            className='star  mt-2 mr-2'
                            size={30}
                            color={
                              currentRating <=
                              (hover.peopleRate || peopleRating)
                                ? 'rgb(20 184 166)'
                                : ' #7B8982'
                            }
                            onMouseEnter={() =>
                              setHover({
                                ...hover,
                                peopleRate: currentRating,
                              })
                            }
                            onMouseLeave={() =>
                              setHover({
                                ...hover,
                                peopleRate: null,
                              })
                            }
                          />
                        </label>
                      );
                    })}
                  </div>
                  {/* <p>Stars: {peopleRating}</p> */}
                </div>

                {/* SAFETY RATING */}
                <div className='mt-4'>
                  <h1
                    htmlFor='password'
                    className='block text-slate-950 font-lg font-bold rounded-lg text-base'
                  >
                    Rate Safety 👍
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
                            onClick={() => setSafetyRating(currentRating)}
                          />
                          <FaStar
                            className='star  mt-2 mr-2'
                            size={30}
                            color={
                              currentRating <=
                              (hover.safetyRate || safetyRating)
                                ? 'rgb(20 184 166)'
                                : ' #7B8982'
                            }
                            onMouseEnter={() =>
                              setHover({
                                ...hover,
                                safetyRate: currentRating,
                              })
                            }
                            onMouseLeave={() =>
                              setHover({
                                ...hover,
                                safetyRate: null,
                              })
                            }
                          />
                        </label>
                      );
                    })}
                  </div>
                  {/* <p>Stars: {safetyRating}</p> */}
                </div>

                {/* WEATHER RATING */}
                <div className='mt-4'>
                  <h1
                    htmlFor='password'
                    className='block text-slate-950 font-lg font-bold rounded-lg text-base'
                  >
                    Rate the Weather ⛅️
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
                            onClick={() => setWeatherRating(currentRating)}
                          />
                          <FaStar
                            className='star  mt-2 mr-2'
                            size={30}
                            color={
                              currentRating <=
                              (hover.weatherRate || weatherRating)
                                ? 'rgb(20 184 166)'
                                : ' #7B8982'
                            }
                            onMouseEnter={() =>
                              setHover({
                                ...hover,
                                weatherRate: currentRating,
                              })
                            }
                            onMouseLeave={() =>
                              setHover({
                                ...hover,
                                weatherRate: null,
                              })
                            }
                          />
                        </label>
                      );
                    })}
                  </div>
                  {/* <p>Stars: {weatherRating}</p> */}
                </div>
              </div>
            </div>

            <div className='mt-12'>
              <button
                type='submit'
                className='w-full p-3 bg-teal-700 font-bold text-white rounded-md hover:bg-teal-500'
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
