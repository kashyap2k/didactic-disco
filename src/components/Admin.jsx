import React from 'react'
import { Helmet } from 'react-helmet-async'

const Admin = () => {
  return (
    <>
      <Helmet>
        <title>Admin - Medical Admissions Platform</title>
        <meta name="description" content="Admin panel for managing medical college data." />
      </Helmet>

      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
              Admin Panel
            </h1>
            <p className="text-neutral-600 dark:text-neutral-300">
              Admin functionality coming soon...
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin