import { Link, routes, useParams } from '@redwoodjs/router'
import { useQuery } from '@redwoodjs/web'

import MainLayout from 'src/components/MainLayout/MainLayout'

const JOB_QUERY = gql`
  query JobDetailQuery($id: Int!) {
    job(id: $id) {
      id
      title
      company
      location
      jobType
      salary
      category
      description
      requirements
      createdAt
    }
  }
`

const JobDetailPage = () => {
  const { id } = useParams()
  const numericId = Number(id)

  const { loading, error, data } = useQuery(JOB_QUERY, {
    variables: { id: numericId },
    skip: !numericId,
  })

  if (loading) {
    return (
      <MainLayout>
        <div className="py-10 text-center text-gray-500">Loading job…</div>
      </MainLayout>
    )
  }

  if (error) {
    return (
      <MainLayout>
        <div className="rounded-lg bg-red-50 p-4 text-red-700">
          Failed: {error.message}
        </div>
      </MainLayout>
    )
  }

  const job = data && data.job ? data.job : null

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
            to={routes.jobApply({ id: numericId })}
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
