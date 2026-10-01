import { Link, routes } from '@redwoodjs/router'
import { useQuery } from '@redwoodjs/web'

import MainLayout from 'src/components/MainLayout/MainLayout'

const JOBS_QUERY = gql`
  query JobsQuery {
    jobs(activeOnly: true) {
      id
      title
      company
      location
      jobType
      salary
      category
      description
      createdAt
    }
  }
`

const HomePage = () => {
  const { loading, error, data } = useQuery(JOBS_QUERY)

  return (
    <MainLayout>
      <div className="mb-8">
        <p className="max-w-2xl text-gray-600">
          Click 1 job to see details, then apply with your name, email and CV
          link. No account needed.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-white px-3 py-1 shadow-sm">
            Civil Engineer
          </span>
          <span className="rounded-full bg-white px-3 py-1 shadow-sm">
            Quantity Surveyor
          </span>
          <span className="rounded-full bg-white px-3 py-1 shadow-sm">
            Site Manager
          </span>
          <span className="rounded-full bg-white px-3 py-1 shadow-sm">
            Health &amp; Safety
          </span>
        </div>
      </div>

      <h2 className="mb-4 text-xl font-bold text-gray-900">Available jobs</h2>

      {loading ? (
        <div className="py-10 text-center text-gray-500">Loading jobs…</div>
      ) : null}

      {error ? (
        <div className="rounded-lg bg-red-50 p-4 text-red-700">
          Failed to load jobs: {error.message}
        </div>
      ) : null}

      {data && data.jobs && data.jobs.length === 0 ? (
        <div className="rounded-lg bg-white p-8 text-center shadow">
          <p className="text-gray-600">No jobs yet. Check back soon.</p>
        </div>
      ) : null}

      {data && data.jobs ? (
        <div className="grid gap-4">
          {data.jobs.map((job) => (
            <Link
              key={job.id}
              to={routes.jobDetail({ id: job.id })}
              className="block rounded-lg bg-white p-6 shadow transition hover:shadow-md"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    {job.title}
                  </h2>
                  <p className="mt-1 text-sm text-gray-600">
                    {job.company} • {job.location} • {job.jobType}
                  </p>
                  {job.salary ? (
                    <p className="mt-1 text-sm font-medium text-green-700">
                      {job.salary}
                    </p>
                  ) : null}
                  {job.category ? (
                    <span className="mt-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                      {job.category}
                    </span>
                  ) : null}
                  <p className="mt-3 line-clamp-2 text-sm text-gray-600">
                    {job.description}
                  </p>
                </div>
                <span className="mt-4 inline-block shrink-0 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white sm:mt-0">
                  View &amp; Apply
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </MainLayout>
  )
}

export default HomePage
