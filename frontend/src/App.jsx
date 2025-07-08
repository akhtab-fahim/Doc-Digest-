import React from 'react'
import { Navigate, BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Chat from './pages/Chat.jsx'
import Home from './pages/Home.jsx'
import './index.css'

function App() {

  const isAuthenticated =!!localStorage.getItem("accessToken")


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={!isAuthenticated ? <Home /> : <Navigate to="/chat" />} />
            <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/chat" />} />
            <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/chat" />} />
            <Route path="/chat" element={isAuthenticated ? <Chat /> : <Navigate to="/login" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

