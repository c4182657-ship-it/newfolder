import { useState } from 'react'

import {
  Form,
  Label,
  TextField,
  TextAreaField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'
import { Metadata, useQuery, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import MainLayout from 'src/components/MainLayout/MainLayout'

const ADMIN_JOBS = gql`
  query AdminJobsQuery {
    jobs {
      id
      title
      company
      location
      jobType
      salary
      category
      description
      requirements
      active
      createdAt
      applications {
        id
      }
    }
    applications {
      id
      jobId
      fullName
      email
      phone
      cvLink
      experience
      location
      visaStatus
      coverLetter
      createdAt
      job {
        title
      }
    }
  }
`

const CREATE_JOB = gql`
  mutation AdminCreateJob($input: CreateJobInput!) {
    createJob(input: $input) {
      id
    }
  }
`

const DELETE_JOB = gql`
  mutation AdminDeleteJob($id: Int!) {
    deleteJob(id: $id) {
      id
    }
  }
`

const UPDATE_JOB = gql`
  mutation AdminUpdateJob($id: Int!, $input: UpdateJobInput!) {
    updateJob(id: $id, input: $input) {
      id
      active
    }
  }
`

const DELETE_APP = gql`
  mutation AdminDeleteApp($id: Int!) {
    deleteApplication(id: $id) {
      id
    }
  }
`

const AdminPage = () => {
  const { data, loading, error, refetch } = useQuery(ADMIN_JOBS)
  const [createJob, { loading: creating }] = useMutation(CREATE_JOB, {
    onCompleted: () => {
      toast.success('Job created')
      refetch()
    },
  })
  const [deleteJob] = useMutation(DELETE_JOB, {
    onCompleted: () => {
      toast.success('Job deleted')
      refetch()
    },
  })
  const [updateJob] = useMutation(UPDATE_JOB, {
    onCompleted: () => refetch(),
  })
  const [deleteApp] = useMutation(DELETE_APP, {
    onCompleted: () => {
      toast.success('Application deleted')
      refetch()
    },
  })

  const [filterJobId, setFilterJobId] = useState<string>('all')

  const onCreate = (formData) => {
    createJob({
      variables: {
        input: {
          title: formData.title,
          company: formData.company || 'Confidential Client',
          location: formData.location || 'Dublin, Ireland',
          jobType: formData.jobType || 'Full-time',
          salary: formData.salary || null,
          category: formData.category || null,
          description: formData.description,
          requirements: formData.requirements || null,
          active: !!formData.active,
        },
      },
    })
  }

  const jobs = data?.jobs || []
  const allApps = data?.applications || []
  const apps =
    filterJobId === 'all'
      ? allApps
      : allApps.filter((a) => String(a.jobId) === filterJobId)

  return (
    <>
      <Metadata title="Admin" description="Manage jobs and applications" />
      <MainLayout>
        <h1 className="text-2xl font-extrabold text-gray-900">
          Admin — jobs & applications
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Simple admin for your small site. No login in v1 — add login before
          going public.
        </p>

        {loading && <p className="mt-6 text-gray-500">Loading…</p>}
        {error && (
          <div className="mt-6 rounded bg-red-50 p-3 text-red-700">
            {error.message}
          </div>
        )}

        {data && (
          <>
            <div className="mt-6 rounded-lg bg-white p-6 shadow">
              <h2 className="font-bold text-gray-900">
                Jobs ({jobs.length}) — click to manage
              </h2>
              <div className="mt-4 grid gap-3">
                {jobs.map((j) => (
                  <div
                    key={j.id}
                    className="flex flex-col gap-2 rounded border p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="font-semibold">
                        {j.title}{' '}
                        <span className="text-xs font-normal text-gray-500">
                          #{j.id}
                        </span>
                      </p>
                      <p className="text-sm text-gray-600">
                        {j.company} • {j.location} •{' '}
                        {j.active ? 'Active' : 'Hidden'} •{' '}
                        {j.applications.length} applications
                      </p>
                    </div>
                    <div className="flex gap-2 text-sm">
                      <button
                        onClick={() =>
                          updateJob({
                            variables: {
                              id: j.id,
                              input: { active: !j.active },
                            },
                          })
                        }
                        className="rounded bg-gray-100 px-3 py-1.5 hover:bg-gray-200"
                      >
                        {j.active ? 'Hide' : 'Show'}
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete "${j.title}"?`))
                            deleteJob({ variables: { id: j.id } })
                        }}
                        className="rounded bg-red-50 px-3 py-1.5 text-red-700 hover:bg-red-100"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-lg bg-white p-6 shadow">
              <h2 className="font-bold text-gray-900">Post a new job</h2>
              <Form onSubmit={onCreate} className="mt-4 grid gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <Label name="title" className="text-sm font-medium">
                      Title *
                    </Label>
                    <TextField
                      name="title"
                      validation={{ required: true }}
                      className="mt-1 w-full rounded border px-3 py-2"
                      placeholder="e.g. Site Manager"
                    />
                  </div>
                  <div>
                    <Label name="company" className="text-sm font-medium">
                      Company
                    </Label>
                    <TextField
                      name="company"
                      className="mt-1 w-full rounded border px-3 py-2"
                      placeholder="Company name"
                    />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                  <TextField
                    name="location"
                    className="rounded border px-3 py-2"
                    placeholder="Location (Dublin)"
                  />
                  <TextField
                    name="jobType"
                    className="rounded border px-3 py-2"
                    placeholder="Full-time / Contract"
                  />
                  <TextField
                    name="salary"
                    className="rounded border px-3 py-2"
                    placeholder="Salary"
                  />
                </div>
                <TextField
                  name="category"
                  className="rounded border px-3 py-2"
                  placeholder="Category"
                />
                <div>
                  <Label name="description" className="text-sm font-medium">
                    Description *
                  </Label>
                  <TextAreaField
                    name="description"
                    validation={{ required: true }}
                    rows={4}
                    className="mt-1 w-full rounded border px-3 py-2"
                  />
                </div>
                <TextAreaField
                  name="requirements"
                  rows={3}
                  className="rounded border px-3 py-2"
                  placeholder="Requirements"
                />
                <label
                  htmlFor="active"
                  className="flex items-center gap-2 text-sm"
                >
                  <CheckboxField
                    id="active"
                    name="active"
                    defaultChecked={true}
                  />{' '}
                  Active (show on site)
                </label>
                <Submit
                  disabled={creating}
                  className="rounded bg-gray-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-700"
                >
                  {creating ? 'Creating…' : 'Create job'}
                </Submit>
              </Form>
            </div>

            <div className="mt-6 rounded-lg bg-white p-6 shadow">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="font-bold text-gray-900">
                  Applications ({apps.length})
                </h2>
                <select
                  value={filterJobId}
                  onChange={(e) => setFilterJobId(e.target.value)}
                  className="rounded border px-3 py-1.5 text-sm"
                >
                  <option value="all">All jobs</option>
                  {jobs.map((j) => (
                    <option key={j.id} value={String(j.id)}>
                      {j.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-4 grid gap-3">
                {apps.length === 0 && (
                  <p className="text-sm text-gray-500">No applications yet.</p>
                )}
                {apps.map((a) => (
                  <div key={a.id} className="rounded border p-4 text-sm">
                    <p className="font-semibold">
                      {a.fullName} — {a.email}{' '}
                      <span className="font-normal text-gray-500">
                        for {a.job?.title} (#{a.jobId})
                      </span>
                    </p>
                    <p className="mt-1 text-gray-600">
                      Phone: {a.phone || '-'} • Location: {a.location || '-'} •
                      Visa: {a.visaStatus || '-'} • Exp: {a.experience || '-'}
                    </p>
                    {a.cvLink && (
                      <p className="mt-1">
                        CV:{' '}
                        <a
                          href={a.cvLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 underline"
                        >
                          {a.cvLink}
                        </a>
                      </p>
                    )}
                    {a.coverLetter && (
                      <p className="mt-2 whitespace-pre-line bg-gray-50 p-2 text-gray-700">
                        {a.coverLetter}
                      </p>
                    )}
                    <button
                      onClick={() => {
                        if (confirm('Delete this application?'))
                          deleteApp({ variables: { id: a.id } })
                      }}
                      className="mt-2 rounded bg-red-50 px-3 py-1 text-red-700 hover:bg-red-100"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </MainLayout>
    </>
  )
}

export default AdminPage
