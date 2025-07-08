import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
          <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Chat with your</span>
                <span className="block text-green-600">documents instantly</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
                Upload your documents and start chatting with them immediately. Get insights, summaries, and answers from your files with our advanced AI assistant.
              </p>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <Link
                  to="/register"
                  className="rounded-md shadow px-8 py-3 bg-green-600 text-white font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="rounded-md px-8 py-3 bg-white text-green-600 font-medium border border-green-200 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Sign In
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 flex justify-center">
              <div className="relative w-full max-w-lg">
                {/* Decorative blobs */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                
                {/* App screenshot/mockup */}
                <div className="relative shadow-xl rounded-2xl overflow-hidden border border-gray-200">
                  <img 
                    src="https://placehold.co/600x400/f9fafb/4ade80?text=Whisprr&font=montserrat" 
                    alt="App screenshot" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white relative overflow-hidden">
        {/* Background blobs for features section */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob-slow"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob-slow animation-delay-3000"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-teal-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob-slow animation-delay-5000"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Everything you need to interact with your documents
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our platform makes document analysis simple, intuitive, and powerful.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="relative group">
                {/* Feature card blob */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-emerald-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative z-10 backdrop-blur-sm bg-white/90">
                  <div className="w-12 h-12 rounded-md bg-green-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900">Easy Upload</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Drag and drop your documents or select them from your device. We support PDFs, Word documents, and more.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative group">
                {/* Feature card blob */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative z-10 backdrop-blur-sm bg-white/90">
                  <div className="w-12 h-12 rounded-md bg-green-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                    </svg>
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900">Natural Conversations</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Chat with your documents using natural language. Ask questions and get accurate answers instantly.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative group">
                {/* Feature card blob */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-100 to-green-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative z-10 backdrop-blur-sm bg-white/90">
                  <div className="w-12 h-12 rounded-md bg-green-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900">Secure & Private</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Your documents are encrypted and secure. We prioritize your privacy and data security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Loved by users
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Don't just take our word for it. Here's what our users have to say about Whisprr.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <div className="space-y-8">
                {/* Testimonial 1 */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-600 italic">
                    "Whisprr has completely transformed how I interact with my research papers. I can get insights in seconds that would have taken hours to find manually."
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-green-200 flex items-center justify-center text-green-600 font-bold">
                        JS
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Jane Smith</p>
                      <p className="text-sm text-gray-500">Researcher</p>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-600 italic">
                    "As a student, Whisprr helps me understand complex textbooks by allowing me to ask questions and get clear explanations instantly."
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-green-200 flex items-center justify-center text-green-600 font-bold">
                        MJ
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Michael Johnson</p>
                      <p className="text-sm text-gray-500">Student</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center lg:max-w-3xl">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to get started?</span>
                  <span className="block">Create your account today.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-green-50">
                  Join thousands of users who are already experiencing the power of AI-assisted document interaction.
                </p>
                <div className="mt-8 flex space-x-4">
                  <Link
                    to="/register"
                    className="inline-flex py-3 px-6 border border-transparent rounded-md shadow bg-white text-green-600 font-medium hover:bg-green-50"
                  >
                    Sign up for free
                  </Link>
                  <Link
                    to="/login"
                    className="inline-flex py-3 px-6 border border-green-300 rounded-md shadow text-white font-medium hover:bg-green-500"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
