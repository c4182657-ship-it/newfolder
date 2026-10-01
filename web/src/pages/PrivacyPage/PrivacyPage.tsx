import { Metadata } from '@redwoodjs/web'

import MainLayout from 'src/components/MainLayout/MainLayout'

const PrivacyPage = () => {
  return (
    <>
      <Metadata title="Privacy" description="Privacy policy" />
      <MainLayout>
        <div className="rounded-lg bg-white p-8 shadow">
          <h1 className="text-2xl font-extrabold">Privacy Policy (GDPR)</h1>
          <div className="mt-4 space-y-3 text-sm text-gray-700">
            <p>
              We collect your name, email, phone, CV link and cover message only
              to process your job application.
            </p>
            <p>
              <strong>Legal basis:</strong> your consent (checkbox on the apply
              form).
            </p>
            <p>
              <strong>Storage:</strong> applications are stored securely in our
              database and only shared with the hiring employer for that job.
            </p>
            <p>
              <strong>Retention:</strong> we keep applications for up to 12
              months, then delete on request.
            </p>
            <p>
              <strong>Your rights:</strong> you can ask for access, correction
              or deletion of your data anytime by emailing us.
            </p>
          </div>
        </div>
      </MainLayout>
    </>
  )
}

export default PrivacyPage
