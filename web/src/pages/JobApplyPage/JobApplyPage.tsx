import { useEffect, useState } from 'react'

import { Link, routes, useParams } from '@redwoodjs/router'

import MainLayout from 'src/components/MainLayout/MainLayout'
import { getJobById } from 'src/data/jobs'

const inputClass =
  'mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-base text-gray-900 transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm'

const JobApplyPage = () => {
  const { id } = useParams()
  const jobId = Number(id)
  const job = getJobById(jobId)

  const [nextUrl, setNextUrl] = useState('/success')
  useEffect(() => {
    setNextUrl(`${window.location.origin}/success`)
  }, [])

  if (!job) {
    return (
      <MainLayout>
        <div className="animate-fade-in rounded bg-white p-6 text-center text-sm shadow sm:p-8 sm:text-base">
          Job not found.
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <Link
        to={routes.jobDetail({ id: job.id })}
        className="mb-3 inline-block max-w-full truncate text-sm text-blue-600 hover:underline sm:mb-4"
      >
        ← Back to {job.title}
      </Link>

      <div className="animate-fade-up rounded-lg bg-white p-5 shadow sm:p-8">
        <h1 className="text-xl font-extrabold leading-tight text-gray-900 sm:text-2xl">
          Apply: {job.title}
        </h1>
        <p className="mt-1 text-xs text-gray-600 sm:text-sm">
          {job.company} • {job.location}
        </p>

        <form
          action="https://formspree.io/f/mwleqzzl"
          method="POST"
          className="mt-5 grid gap-3 sm:mt-6 sm:gap-4"
        >
          <input
            type="hidden"
            name="_subject"
            value={`New application: ${job.title}`}
          />
          <input type="hidden" name="jobId" value={String(job.id)} />
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
              autoComplete="name"
              className={inputClass}
            />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
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
                autoComplete="email"
                className={inputClass}
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
                autoComplete="tel"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            <div>
              <label htmlFor="applicantLocation" className="text-sm font-medium">
                Current location
              </label>
              <input
                id="applicantLocation"
                name="applicantLocation"
                type="text"
                placeholder="Dublin"
                autoComplete="address-level2"
                className={inputClass}
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
                className={inputClass}
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
              inputMode="url"
              className={inputClass}
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
              className={inputClass}
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
              className={`${inputClass} resize-y`}
            />
          </div>

          <label className="flex items-start gap-2 rounded bg-gray-50 p-3 text-xs text-gray-700 sm:text-sm">
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
            className="w-full rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500 active:scale-[0.98] sm:text-base"
          >
            Submit application
          </button>
        </form>
      </div>
    </MainLayout>
  )
}

export default JobApplyPage
