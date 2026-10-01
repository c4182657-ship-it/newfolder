import { Metadata } from '@redwoodjs/web'

import MainLayout from 'src/components/MainLayout/MainLayout'

const ResourcesPage = () => {
  return (
    <>
      <Metadata
        title="Resources"
        description="Helpful resources for workers in Dublin"
      />
      <MainLayout>
        <div className="rounded-lg bg-white p-8 shadow">
          <h1 className="text-2xl font-extrabold text-gray-900">
            Resources for Dublin workers
          </h1>

          <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-6">
            <h2 className="text-lg font-bold text-gray-900">
              💡 The Rent Tax Credit Buffer
            </h2>
            <p className="mt-2 text-gray-700">
              If you are renting a private apartment in Dublin, the Irish
              government gives you an annual Rent Tax Credit of €1,000. This
              reduces your overall tax bill, giving you an extra €83 per month
              in your pocket.
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>It is a tax credit, not cash or project funding.</li>
              <li>You must be paying tax in Ireland to benefit.</li>
              <li>Check eligibility and claim via Revenue (myAccount).</li>
              <li>Rules can change — always confirm with Revenue.</li>
            </ul>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-5">
              <h3 className="font-bold">Safe Pass (Ireland)</h3>
              <p className="mt-1 text-sm text-gray-600">
                Most site roles need a valid Safe Pass. Keep yours in date
                before applying for Site Manager / H&S roles.
              </p>
            </div>
            <div className="rounded-lg bg-gray-50 p-5">
              <h3 className="font-bold">GDPR & your CV</h3>
              <p className="mt-1 text-sm text-gray-600">
                We only use your application to process hiring. We never sell
                your data. You can ask us to delete it anytime.
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default ResourcesPage
