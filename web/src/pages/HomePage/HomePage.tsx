import { Link, routes } from '@redwoodjs/router'

import MainLayout from 'src/components/MainLayout/MainLayout'
import { jobs } from 'src/data/jobs'

const HomePage = () => {
  return (
    <MainLayout>
      <div className="mb-8 rounded-lg bg-gray-900 p-8 text-white">
        <h1 className="text-3xl font-extrabold sm:text-4xl">
          Simple construction jobs in Dublin
        </h1>
        <p className="mt-3 max-w-2xl text-gray-300">
          Click 1 job to see details, then apply with your name, email and CV
          link. No account needed.
        </p>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-white/10 px-3 py-1">
            Civil Engineer
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1">
            Quantity Surveyor
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1">
            Site Manager
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1">
            Health &amp; Safety
          </span>
        </div>
      </div>

      <h2 className="mb-4 text-xl font-bold text-gray-900">Available jobs</h2>

      {jobs.length === 0 ? (
        <div className="rounded-lg bg-white p-8 text-center shadow">
          <p className="text-gray-600">No jobs yet. Check back soon.</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {jobs.map((job) => (
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
      )}
    </MainLayout>
  )
}

export default HomePage
