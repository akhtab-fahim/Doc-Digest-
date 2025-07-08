import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = !!localStorage.getItem('accessToken');
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md border-b border-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-green-600 font-bold text-2xl md:text-3xl">
              Doc-Digest<span className="text-green-400"></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/chat" 
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === '/chat' 
                      ? 'text-green-600 bg-green-50' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  Chat
                </Link>
                <button
                  onClick={handleLogout}
                  className="ml-4 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/" 
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === '/' 
                      ? 'text-green-600 bg-green-50' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/login" 
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === '/login' 
                      ? 'text-white bg-green-600' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-green-600 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {isLoggedIn ? (
              <>
                <Link 
                  to="/chat" 
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === '/chat' 
                      ? 'text-green-600 bg-green-50' 
                      : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  Chat
                </Link>
                <button
                  onClick={() => {
                    closeMenu();
                    handleLogout();
                  }}
                  className="w-full text-left mt-2 px-3 py-2 rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/" 
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === '/' 
                      ? 'text-green-600 bg-green-50' 
                      : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link 
                  to="/login" 
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === '/login' 
                      ? 'text-green-600 bg-green-50' 
                      : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                  }`}
                  onClick={closeMenu}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="block w-full text-left mt-2 px-3 py-2 rounded-md text-base font-medium text-white bg-green-600 hover:bg-green-700"
                  onClick={closeMenu}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;