import { Link, routes } from '@redwoodjs/router'

import MainLayout from 'src/components/MainLayout/MainLayout'

const ApplicationSuccessPage = () => {
  return (
    <MainLayout>
      <div className="animate-fade-up mx-auto max-w-xl rounded-lg bg-white p-6 text-center shadow sm:p-8">
        <div className="animate-pop-in mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-xl sm:h-14 sm:w-14 sm:text-2xl">
          ✓
        </div>
        <h1 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
          Application sent
        </h1>
        <p className="mt-3 text-sm text-gray-600 sm:text-base">
          Thanks — your application has been submitted. We&apos;ll be in touch
          if there&apos;s a match.
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

export default ApplicationSuccessPage
