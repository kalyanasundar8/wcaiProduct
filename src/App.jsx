import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import SigninPage from './pages/SigninPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPassword from './pages/ResetPassword'
import ContentHome from './Products/ContentHome'
import GeneratorModal from './Products/GeneratorModal'
import { BlogHome } from './Products/BlogGenerator/BlogHome'
import { BlogGenerator } from './Products/BlogGenerator/BlogGenerator'
import OutlineListing from './Products/BlogGenerator/OutlineListing'


function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* Authentication Routes */}
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/signin' element={<SigninPage />} />
          <Route path='/forgot-password' element={<ForgotPasswordPage />} />
          <Route path='/reset-password' element={<ResetPassword />} />

          {/* Product Page routes */}
          <Route path='/content-home' element={<ContentHome />} />
          <Route path='/generator-modal' element={<GeneratorModal />} />

          {/* Blog Generator routes */}
          <Route path='/blog-home' element={<BlogHome />}/>
          <Route path='/generate-blog' element={<BlogGenerator />}/>
          <Route path='outlinelisting' element={<OutlineListing />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
