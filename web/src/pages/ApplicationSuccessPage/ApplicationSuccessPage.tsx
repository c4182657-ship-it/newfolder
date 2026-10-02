import { Link, routes } from '@redwoodjs/router'

import MainLayout from 'src/components/MainLayout/MainLayout'

const ApplicationSuccessPage = () => {
  return (
    <MainLayout>
      <div className="mx-auto max-w-xl rounded-lg bg-white p-8 text-center shadow">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
          ✓
        </div>
        <h1 className="text-2xl font-extrabold text-gray-900">
          Application sent
        </h1>
        <p className="mt-3 text-gray-600">
          Thanks — your application has been submitted. We&apos;ll be in touch
          if there&apos;s a match.
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

export default ApplicationSuccessPage
