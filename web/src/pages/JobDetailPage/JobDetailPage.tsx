import { Link, routes, useParams } from '@redwoodjs/router'

import MainLayout from 'src/components/MainLayout/MainLayout'
import { getJobById } from 'src/data/jobs'

const JobDetailPage = () => {
  const { id } = useParams()
  const jobId = Number(id)
  const job = getJobById(jobId)

  if (!job) {
    return (
      <MainLayout>
        <div className="animate-fade-in rounded-lg bg-white p-6 text-center text-sm shadow sm:p-8 sm:text-base">
          Job not found.{' '}
          <Link to={routes.home()} className="text-blue-600 underline">
            Back to jobs
          </Link>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <Link
        to={routes.home()}
        className="mb-3 inline-block text-sm text-blue-600 hover:underline sm:mb-4"
      >
        ← Back to all jobs
      </Link>
      <div className="animate-fade-up rounded-lg bg-white p-5 shadow sm:p-8">
        <h1 className="text-xl font-extrabold leading-tight text-gray-900 sm:text-3xl">
          {job.title}
        </h1>
        <p className="mt-2 text-xs text-gray-600 sm:text-base">
          {job.company} • {job.location} • {job.jobType}
        </p>
        {job.salary ? (
          <p className="mt-2 text-sm font-semibold text-green-700 sm:text-base">
            {job.salary}
          </p>
        ) : null}

        <div className="mt-5 sm:mt-6">
          <h2 className="text-sm font-bold text-gray-900 sm:text-base">
            Description
          </h2>
          <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-gray-700">
            {job.description}
          </p>
        </div>

        {job.requirements ? (
          <div className="mt-5 sm:mt-6">
            <h2 className="text-sm font-bold text-gray-900 sm:text-base">
              Requirements
            </h2>
            <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-gray-700">
              {job.requirements}
            </p>
          </div>
        ) : null}

        <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
          <Link
            to={routes.jobApply({ id: job.id })}
            className="w-full rounded-md bg-blue-600 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-blue-500 active:scale-[0.98] sm:w-auto sm:text-base"
          >
            Apply for this job
          </Link>
          <Link
            to={routes.home()}
            className="w-full rounded-md bg-gray-100 px-6 py-3 text-center text-sm font-medium text-gray-800 transition hover:bg-gray-200 active:scale-[0.98] sm:w-auto sm:text-base"
          >
            See other jobs
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}

export default JobDetailPage
