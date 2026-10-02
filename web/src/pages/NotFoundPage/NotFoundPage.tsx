import { Link, routes } from '@redwoodjs/router'

import MainLayout from 'src/components/MainLayout/MainLayout'

const NotFoundPage = () => {
  return (
    <MainLayout>
      <div className="mx-auto max-w-xl rounded-lg bg-white p-8 text-center shadow">
        <h1 className="text-4xl font-extrabold text-gray-900">404</h1>
        <p className="mt-3 text-gray-600">
          We couldn&apos;t find that page.
        </p>
        <Link
          to={routes.home()}
          className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-500"
        >
          Back to jobs
        </Link>
      </div>
    </MainLayout>
  )
}

export default NotFoundPage
