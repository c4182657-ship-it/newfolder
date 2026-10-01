import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { validate } from '@redwoodjs/api'

import { db } from 'src/lib/db'

export const applications: QueryResolvers['applications'] = ({ jobId }) => {
  return db.application.findMany({
    where: jobId ? { jobId } : undefined,
    orderBy: { createdAt: 'desc' },
    include: { job: true },
  })
}

export const application: QueryResolvers['application'] = ({ id }) => {
  return db.application.findUnique({
    where: { id },
    include: { job: true },
  })
}

export const createApplication: MutationResolvers['createApplication'] = ({
  input,
}) => {
  validate(input.email, 'Email', { email: true })
  validate(input.fullName, 'Full name', { presence: true, length: { min: 2 } })
  if (!input.consent) {
    throw new Error('You must agree to the privacy policy (GDPR consent).')
  }
  if (!input.jobId) {
    throw new Error('Missing job.')
  }
  return db.application.create({
    data: {
      jobId: input.jobId,
      fullName: input.fullName.trim(),
      email: input.email.trim().toLowerCase(),
      phone: input.phone,
      coverLetter: input.coverLetter,
      experience: input.experience,
      cvLink: input.cvLink,
      location: input.location,
      visaStatus: input.visaStatus,
      consent: true,
    },
  })
}

export const deleteApplication: MutationResolvers['deleteApplication'] = ({
  id,
}) => {
  return db.application.delete({
    where: { id },
  })
}

export const Application = {
  job: (_obj, { root }) => {
    return db.application.findUnique({ where: { id: root?.id } }).job()
  },
}
