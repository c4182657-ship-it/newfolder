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
        <div className="rounded-lg bg-white p-8 text-center shadow">
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
        className="mb-4 inline-block text-sm text-blue-600 hover:underline"
      >
        ← Back to all jobs
      </Link>
      <div className="rounded-lg bg-white p-8 shadow">
        <h1 className="text-3xl font-extrabold text-gray-900">{job.title}</h1>
        <p className="mt-2 text-gray-600">
          {job.company} • {job.location} • {job.jobType}
        </p>
        {job.salary ? (
          <p className="mt-2 font-semibold text-green-700">{job.salary}</p>
        ) : null}

        <div className="mt-6">
          <h2 className="font-bold text-gray-900">Description</h2>
          <p className="mt-2 whitespace-pre-line text-gray-700">
            {job.description}
          </p>
        </div>

        {job.requirements ? (
          <div className="mt-6">
            <h2 className="font-bold text-gray-900">Requirements</h2>
            <p className="mt-2 whitespace-pre-line text-gray-700">
              {job.requirements}
            </p>
          </div>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to={routes.jobApply({ id: job.id })}
            className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-500"
          >
            Apply for this job
          </Link>
          <Link
            to={routes.home()}
            className="rounded-md bg-gray-100 px-6 py-3 font-medium text-gray-800 hover:bg-gray-200"
          >
            See other jobs
          </Link>
        </div>
      </div>
    </MainLayout>
  )
}

export default JobDetailPage
