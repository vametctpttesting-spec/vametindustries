export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-thin text-gray-900 dark:text-white mb-6">
            Welcome to Vamet Industries
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Innovation through technology. Building the future, one solution at
            a time.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Get Started
            </button>
            <button className="border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Lightning Fast
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Built with performance in mind using the latest technologies.
            </p>
          </div>

          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Reliable
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Rock-solid foundation with enterprise-grade reliability.
            </p>
          </div>

          <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600 dark:text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Scalable
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Designed to grow with your business from day one.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
