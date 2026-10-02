import { Link, routes } from '@redwoodjs/router'

import MainLayout from 'src/components/MainLayout/MainLayout'

const ResourcesPage = () => {
  return (
    <MainLayout>
      <Link
        to={routes.home()}
        className="mb-4 inline-block text-sm text-blue-600 hover:underline"
      >
        ← Back to jobs
      </Link>

      <h1 className="text-3xl font-extrabold text-gray-900">
        Resources for workers in Ireland
      </h1>

      <div className="mt-6 rounded-lg bg-white p-8 shadow">
        <h2 className="text-xl font-bold text-gray-900">
          Rent Tax Credit — up to €1,000 per year
        </h2>
        <p className="mt-3 text-gray-700">
          If you rent a private apartment or house in Ireland, you may be able
          to claim the Rent Tax Credit. The credit is worth up to €1,000 per
          year for a single person, or €2,000 for a jointly assessed couple.
          That works out to roughly €83 extra per month in your pocket.
        </p>

        <h3 className="mt-6 font-bold text-gray-900">How it works</h3>
        <ul className="mt-2 list-disc space-y-2 pl-6 text-gray-700">
          <li>
            It is a <strong>tax credit</strong>, not a grant. It reduces the tax
            you owe — so you need to be paying tax to benefit.
          </li>
          <li>
            You claim it through Revenue&apos;s <strong>myAccount</strong> or by
            including it in your income tax return.
          </li>
          <li>
            You need your landlord&apos;s name, the address, and the amount of
            rent paid.
          </li>
          <li>
            If you rent from a local authority or via certain schemes, you may
            not qualify — check Revenue&apos;s rules.
          </li>
        </ul>

        <h3 className="mt-6 font-bold text-gray-900">How to claim</h3>
        <ol className="mt-2 list-decimal space-y-2 pl-6 text-gray-700">
          <li>
            Go to Revenue&apos;s <strong>myAccount</strong> on revenue.ie.
          </li>
          <li>
            Open the <strong>Rent Tax Credit</strong> section.
          </li>
          <li>
            Enter the property address, your landlord&apos;s details and the
            rent you paid.
          </li>
          <li>Submit. The credit is applied to your tax bill automatically.</li>
        </ol>

        <p className="mt-6 rounded bg-blue-50 p-4 text-sm text-blue-900">
          <strong>Important:</strong> This is general information, not tax
          advice. Rules can change. Always check{' '}
          <a
            href="https://www.revenue.ie"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            revenue.ie
          </a>{' '}
          for the current rules before claiming.
        </p>
      </div>
    </MainLayout>
  )
}

export default ResourcesPage
