import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:flex md:justify-between">
          {/* Logo and tagline */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-green-600 font-bold text-xl">
              Doc-Digest<span className="text-green-400">.</span>
            </Link>
            <p className="mt-2 text-sm text-gray-500 max-w-md">
              Your secure document chat assistant. Upload documents and chat with them instantly.
            </p>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-500 hover:text-green-600 text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/chat" className="text-gray-500 hover:text-green-600 text-sm">
                    Chat
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-500 hover:text-green-600 text-sm">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-green-600 text-sm">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-4">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-500 hover:text-green-600 text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-green-600 text-sm">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section with copyright */}
        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400 text-center">
            © {currentYear} Doc-Digest Made By Fahim
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer