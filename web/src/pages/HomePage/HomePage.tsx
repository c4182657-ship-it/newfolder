import { Link, routes } from '@redwoodjs/router'

import MainLayout from 'src/components/MainLayout/MainLayout'
import { jobs } from 'src/data/jobs'

const HomePage = () => {
  return (
    <MainLayout>
      <div className="animate-fade-in mb-5 sm:mb-8">
        <p className="max-w-2xl text-sm text-gray-600 sm:text-base">
          Click 1 job to see details, then apply with your name, email and CV
          link. No account needed.
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5 text-[11px] sm:mt-4 sm:gap-2 sm:text-xs">
          <span className="rounded-full bg-white px-2.5 py-1 shadow-sm sm:px-3">
            Civil Engineer
          </span>
          <span className="rounded-full bg-white px-2.5 py-1 shadow-sm sm:px-3">
            Quantity Surveyor
          </span>
          <span className="rounded-full bg-white px-2.5 py-1 shadow-sm sm:px-3">
            Site Manager
          </span>
          <span className="rounded-full bg-white px-2.5 py-1 shadow-sm sm:px-3">
            Health &amp; Safety
          </span>
        </div>
      </div>

      <h2 className="mb-3 text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl">
        Available jobs
      </h2>

      {jobs.length === 0 ? (
        <div className="animate-fade-in rounded-lg bg-white p-6 text-center shadow sm:p-8">
          <p className="text-sm text-gray-600 sm:text-base">
            No jobs yet. Check back soon.
          </p>
        </div>
      ) : (
        <div className="grid gap-3 sm:gap-4">
          {jobs.map((job, index) => (
            <Link
              key={job.id}
              to={routes.jobDetail({ id: job.id })}
              style={{ animationDelay: `${Math.min(index, 6) * 60}ms` }}
              className="animate-fade-up block rounded-lg bg-white p-4 shadow transition hover:-translate-y-0.5 hover:shadow-md active:scale-[0.99] sm:p-6"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h2 className="text-base font-bold leading-snug text-gray-900 sm:text-lg">
                    {job.title}
                  </h2>
                  <p className="mt-1 text-xs text-gray-600 sm:text-sm">
                    {job.company} • {job.location} • {job.jobType}
                  </p>
                  {job.salary ? (
                    <p className="mt-1 text-xs font-medium text-green-700 sm:text-sm">
                      {job.salary}
                    </p>
                  ) : null}
                  {job.category ? (
                    <span className="mt-2 inline-block rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-medium text-blue-700 sm:px-3 sm:text-xs">
                      {job.category}
                    </span>
                  ) : null}
                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-gray-600 sm:mt-3 sm:text-sm">
                    {job.description}
                  </p>
                </div>
                <span className="mt-3 inline-block w-full shrink-0 rounded-md bg-blue-600 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-blue-500 sm:mt-0 sm:w-auto">
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
