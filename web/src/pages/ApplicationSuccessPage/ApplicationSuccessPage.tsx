import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import MainLayout from 'src/components/MainLayout/MainLayout'

const ApplicationSuccessPage = () => {
  return (
    <>
      <Metadata title="Application sent" description="Application received" />
      <MainLayout>
        <div className="mx-auto max-w-lg rounded-lg bg-white p-10 text-center shadow">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-2xl">
            ✓
          </div>
          <h1 className="text-2xl font-extrabold text-gray-900">
            Application sent!
          </h1>
          <p className="mt-3 text-gray-600">
            Thanks — we received your details. The hiring team will contact you
            by email if you are shortlisted.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              to={routes.home()}
              className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-500"
            >
              See more jobs
            </Link>
            <Link
              to={routes.resources()}
              className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-gray-200"
            >
              Dublin resources
            </Link>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default ApplicationSuccessPage
