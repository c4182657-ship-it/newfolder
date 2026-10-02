import { Link, routes } from '@redwoodjs/router'

import MainLayout from 'src/components/MainLayout/MainLayout'

const NotFoundPage = () => {
  return (
    <MainLayout>
      <div className="animate-fade-up mx-auto max-w-xl rounded-lg bg-white p-6 text-center shadow sm:p-8">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          404
        </h1>
        <p className="mt-3 text-sm text-gray-600 sm:text-base">
          We couldn&apos;t find that page.
        </p>
        <Link
          to={routes.home()}
          className="mt-6 inline-block w-full rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500 active:scale-[0.98] sm:w-auto sm:text-base"
        >
          Back to jobs
        </Link>
      </div>
    </MainLayout>
  )
}

export default NotFoundPage
