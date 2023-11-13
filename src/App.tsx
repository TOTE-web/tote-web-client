import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, SignUp, ForgotPassword } from './pages/auth'
import InvalidPage from './pages/invalidPage';
import Dashboard from './pages/dashboard';
import BaseApp from './components/baseApp';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/log-in" element={<Login />} />
        <Route path="/create-account" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route index element={<BaseApp component={<Dashboard />} />} />
        <Route path="/*" element={<BaseApp component={<InvalidPage />} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
