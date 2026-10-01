import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
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

export const Loading = () => (
  <div className="py-10 text-center text-gray-500">Loading jobs…</div>
)

export const Empty = () => (
  <div className="rounded-lg bg-white p-8 text-center shadow">
    <p className="text-gray-600">No jobs yet. Check back soon.</p>
  </div>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rounded-lg bg-red-50 p-4 text-red-700">
    Failed to load jobs: {error?.message}
  </div>
)

export const Success = ({ jobs }: CellSuccessProps) => {
  const plainJobs: any[] = JSON.parse(JSON.stringify(jobs || []))

  return (
    <div className="grid gap-4">
      {plainJobs.map((job) => {
        const id = Number(job.id) || 0
        const title = job.title || 'Unknown Position'
        const company = job.company || ''
        const location = job.location || ''
        const jobType = job.jobType || ''
        const salary = job.salary || ''
        const category = job.category || ''
        const description = job.description || 'No description'

        return (
          <Link
            key={id}
            to={routes.jobDetail({ id })}
            className="block rounded-lg bg-white p-6 shadow transition hover:shadow-md"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900">{title}</h2>
                <p className="mt-1 text-sm text-gray-600">
                  {company} • {location} • {jobType}
                </p>
                {salary && (
                  <p className="mt-1 text-sm font-medium text-green-700">
                    {salary}
                  </p>
                )}
                {category && (
                  <span className="mt-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                    {category}
                  </span>
                )}
                <p className="mt-3 line-clamp-2 text-sm text-gray-600">
                  {description}
                </p>
              </div>
              <span className="mt-4 inline-block shrink-0 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white sm:mt-0">
                View & Apply
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
