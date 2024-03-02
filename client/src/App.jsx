import { Routes, Route } from 'react-router-dom'

import Header from './components/header'

import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import CreateAccount from './pages/CreateAccount'
import SeeMoreReview from './pages/SeeMoreReview'
import UserReviews from './pages/UsersReviews'
import WriteAReview from './pages/WriteAReview'

import { useStore } from 'react'

function App() {
    const { state } = useStore()
  
    return (
      <>
        <Header />
  
        {state.loading && <Loading />}
  
        {state.showNoteForm &&
          <NoteForm />}
  
        <Routes>
          <Route
            path="/"
            element={
              <Home />} />
  
          <Route path="/login" element={(
            <Protect>
              <Login />
            </Protect>
          )} />
          <Route path="/dashboard" element={(
            <Protect>
              <Dashboard />
            </Protect>
          )} />

          <Route path='/createAccount' element={(
            <Protect>
                <CreateAccount />
            </Protect>
          )} />

          <Route path='/seemorereview' element={(
            <Protect>
                <SeeMoreReview />
            </Protect>
          )} />

          <Route path='/writeareview' element={(
            <Protect>
                <WriteAReview />
            </Protect>
          )} />

          <Route path='/userreviews' element={(
            <Protect>
                <UserReviews />
            </Protect>
          )} />
  
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    )
  }
  

export default App;