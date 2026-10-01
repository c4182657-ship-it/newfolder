export const schema = gql`
  type Job {
    id: Int!
    title: String!
    company: String!
    location: String!
    jobType: String!
    salary: String
    category: String
    description: String!
    requirements: String
    active: Boolean!
    createdAt: DateTime!
    applications: [Application]!
  }

  type Query {
    jobs(activeOnly: Boolean): [Job!]! @skipAuth
    job(id: Int!): Job @skipAuth
  }

  input CreateJobInput {
    title: String!
    company: String!
    location: String!
    jobType: String!
    salary: String
    category: String
    description: String!
    requirements: String
    active: Boolean
  }

  input UpdateJobInput {
    title: String
    company: String
    location: String
    jobType: String
    salary: String
    category: String
    description: String
    requirements: String
    active: Boolean
  }

  type Mutation {
    createJob(input: CreateJobInput!): Job! @skipAuth
    updateJob(id: Int!, input: UpdateJobInput!): Job! @skipAuth
    deleteJob(id: Int!): Job! @skipAuth
  }
`
