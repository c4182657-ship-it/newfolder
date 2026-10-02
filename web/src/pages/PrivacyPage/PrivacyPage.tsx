import { Link, routes } from '@redwoodjs/router'

import MainLayout from 'src/components/MainLayout/MainLayout'

const PrivacyPage = () => {
  return (
    <MainLayout>
      <Link
        to={routes.home()}
        className="mb-4 inline-block text-sm text-blue-600 hover:underline"
      >
        ← Back to jobs
      </Link>

      <h1 className="text-3xl font-extrabold text-gray-900">Privacy Policy</h1>

      <div className="mt-6 rounded-lg bg-white p-8 shadow">
        <p className="text-gray-700">
          This page explains what we do with the information you submit when you
          apply for a job on this site.
        </p>

        <h2 className="mt-6 text-xl font-bold text-gray-900">
          What we collect
        </h2>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-gray-700">
          <li>Your name</li>
          <li>Your email address</li>
          <li>Your phone number (optional)</li>
          <li>Your location and right-to-work status (optional)</li>
          <li>Your CV link (optional)</li>
          <li>Your experience and cover message (optional)</li>
        </ul>

        <h2 className="mt-6 text-xl font-bold text-gray-900">How we use it</h2>
        <p className="mt-2 text-gray-700">
          We use your information only to process your job application and, if
          relevant, to contact you about the role you applied for. We do not
          sell your data or use it for marketing.
        </p>

        <h2 className="mt-6 text-xl font-bold text-gray-900">Where it goes</h2>
        <p className="mt-2 text-gray-700">
          Application forms are submitted through Formspree (formspree.io),
          which forwards your submission to our email inbox. Formspree processes
          the data on our behalf. See their privacy policy for details.
        </p>

        <h2 className="mt-6 text-xl font-bold text-gray-900">Your rights</h2>
        <p className="mt-2 text-gray-700">
          Under GDPR, you have the right to access, correct or delete the
          personal data we hold about you. To make a request, contact us by
          email and we will respond within 30 days.
        </p>

        <h2 className="mt-6 text-xl font-bold text-gray-900">Retention</h2>
        <p className="mt-2 text-gray-700">
          We keep applications for up to 12 months, unless you ask us to delete
          them sooner.
        </p>

        <p className="mt-6 text-sm text-gray-500">
          This is a simple template. If your use grows, review it with a
          solicitor to make sure it fully meets your GDPR obligations.
        </p>
      </div>
    </MainLayout>
  )
}

export default PrivacyPage
