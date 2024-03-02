import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import AuthForm from './pages/AuthForm'
import Protect from './components/Protect'
import Dashboard from './pages/Dashboard'
import Review from './pages/Review'
import User from './pages/User'
import WriteAReview from './pages/WriteAReview'
import NotFound from './pages/NotFound'

import { useStore } from './store'

function App() {
  const { state } = useStore();

  return (
    <>
      <Header />

      {/* {state.loading && <Loading />}

      {state.showNoteForm &&
        <NoteForm />} */}

      <Routes>
      <Route
          path="/"
          element={
            <Home />} />

      <Route path="/auth" element={(
          <Protect>
            <AuthForm />
          </Protect>
        )} />

      <Route path="/dashboard" element={(
            <Dashboard />
        )} />

      <Route path='/review' element={(
            <Review />
  
        )} />

<Route path='/writeareview' element={(
          <Protect>
            <WriteAReview />
          </Protect>
        )} />

<Route path='/user' element={(
          <Protect>
            <User />
          </Protect>
        )} />
        

        <Route path="*" element={<NotFound />} />
        
    
      </Routes>
    </>
  )
}


export default App;