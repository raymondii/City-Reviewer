import React, { useEffect } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import { useStore } from '../store'

function Home() {
  const { state, setState } = useStore();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('/api/reviews')
        setState({ ...state, reviews: response.data })
      } catch (error) {
        console.error('Error fetching reviews:', error)
      }
    }

    fetchReviews()
  }, []) // Fetch reviews only on initial render

  const handleEditReview = (review) => {
    setState({
      ...state,
      editReview: review,
      showReviewForm: true,
    })
  }

  const deleteReview = async (reviewId, index) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this review?'
    )
    if (confirmDelete) {
      try {
        await axios.delete(`/api/review/${reviewId}`)
        const updatedReviews = [...state.reviews]
        updatedReviews.splice(index, 1)
        setState({ ...state, reviews: updatedReviews })
      } catch (error) {
        console.error('Error deleting review:', error)
      }
    }
  }

  return (
    <div>
      <h1>Welcome to the City Reviewer</h1>

      {/* Search Bar */}
      <div className='search-bar'>
        <input type='text' placeholder='Search reviews...' />
        <button>Search</button>
      </div>

      <main className='review-boxes'>
        {!state.reviews.length && <h2>No reviews have been added.</h2>}

        {state.reviews.map((review, index) => (
          <div key={review._id} className='review-box'>
            <h3>{review.city}</h3>
            <p>Rating: {review.stars} stars</p>
            <p>{review.body}</p>
            <p>Posted By: {review.user.username}</p>
            <p>
              Posted On: {dayjs(review.createdAt).format('MM/DD/YYYY hh:mm a')}
            </p>
            <div className='row'>
              <button
                onClick={() => handleEditReview(review)}
                className='edit-btn'
              >
                Edit Review
              </button>
              <button
                onClick={() => deleteReview(review._id, index)}
                className='delete-btn'
              >
                Delete Review
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Home;
