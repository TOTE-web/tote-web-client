import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, SignUp, ForgotPassword } from './pages/auth'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/log-in" element={<Login />} />
        <Route path="/create-account" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/*" element={<h1>404 No page found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
