import { useEffect, useState } from 'react'

import { Link, routes, useParams } from '@redwoodjs/router'
import { useQuery } from '@redwoodjs/web'

import MainLayout from 'src/components/MainLayout/MainLayout'

const JOB_QUERY = gql`
  query ApplyJobQuery($id: Int!) {
    job(id: $id) {
      id
      title
      company
      location
    }
  }
`

const JobApplyPage = () => {
  const { id } = useParams()
  const jobId = Number(id)

  const { loading, data } = useQuery(JOB_QUERY, {
    variables: { id: jobId },
    skip: !jobId,
  })

  const [nextUrl, setNextUrl] = useState('/success')
  useEffect(() => {
    setNextUrl(`${window.location.origin}/success`)
  }, [])

  if (loading) {
    return (
      <MainLayout>
        <div className="py-10 text-center text-gray-500">Loading…</div>
      </MainLayout>
    )
  }

  const job = data && data.job ? data.job : null
  if (!job) {
    return (
      <MainLayout>
        <div className="rounded bg-white p-8 text-center shadow">
          Job not found.
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <Link
        to={routes.jobDetail({ id: jobId })}
        className="mb-4 inline-block text-sm text-blue-600 hover:underline"
      >
        ← Back to {job.title}
      </Link>

      <div className="rounded-lg bg-white p-8 shadow">
        <h1 className="text-2xl font-extrabold text-gray-900">
          Apply: {job.title}
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          {job.company} • {job.location}
        </p>

        <form
          action="https://formspree.io/f/mwleqzzl"
          method="POST"
          className="mt-6 grid gap-4"
        >
          <input
            type="hidden"
            name="_subject"
            value={`New application: ${job.title}`}
          />
          <input type="hidden" name="jobId" value={String(jobId)} />
          <input type="hidden" name="jobTitle" value={job.title} />
          <input type="hidden" name="company" value={job.company} />
          <input type="hidden" name="jobLocation" value={job.location} />
          <input type="hidden" name="_next" value={nextUrl} />

          <div>
            <label htmlFor="fullName" className="text-sm font-medium">
              Full name *
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              minLength={2}
              placeholder="John Murphy"
              className="mt-1 w-full rounded-md border px-3 py-2"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className="mt-1 w-full rounded-md border px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+353 ..."
                className="mt-1 w-full rounded-md border px-3 py-2"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="applicantLocation"
                className="text-sm font-medium"
              >
                Current location
              </label>
              <input
                id="applicantLocation"
                name="applicantLocation"
                type="text"
                placeholder="Dublin"
                className="mt-1 w-full rounded-md border px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="visaStatus" className="text-sm font-medium">
                Right to work / visa
              </label>
              <input
                id="visaStatus"
                name="visaStatus"
                type="text"
                placeholder="EU citizen / Stamp 1G"
                className="mt-1 w-full rounded-md border px-3 py-2"
              />
            </div>
          </div>

          <div>
            <label htmlFor="cvLink" className="text-sm font-medium">
              CV link (Google Drive / LinkedIn / portfolio)
            </label>
            <input
              id="cvLink"
              name="cvLink"
              type="url"
              placeholder="https://..."
              className="mt-1 w-full rounded-md border px-3 py-2"
            />
            <p className="mt-1 text-xs text-gray-500">
              Paste a link to your CV. File upload comes later.
            </p>
          </div>

          <div>
            <label htmlFor="experience" className="text-sm font-medium">
              Years of experience / summary
            </label>
            <input
              id="experience"
              name="experience"
              type="text"
              placeholder="e.g. 4 years site management"
              className="mt-1 w-full rounded-md border px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="coverLetter" className="text-sm font-medium">
              Cover message
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              rows={5}
              placeholder="Tell us why you fit this role…"
              className="mt-1 w-full rounded-md border px-3 py-2"
            />
          </div>

          <label className="flex items-start gap-2 rounded bg-gray-50 p-3 text-sm text-gray-700">
            <input type="checkbox" name="consent" required className="mt-1" />
            <span>
              I agree to my details being stored to process my job application
              (GDPR). See{' '}
              <Link to={routes.privacy()} className="text-blue-600 underline">
                Privacy
              </Link>
              . *
            </span>
          </label>

          <button
            type="submit"
            className="rounded-md bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-500"
          >
            Submit application
          </button>
        </form>
      </div>
    </MainLayout>
  )
}

export default JobApplyPage
