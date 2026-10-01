export const schema = gql`
  type Application {
    id: Int!
    jobId: Int!
    job: Job!
    fullName: String!
    email: String!
    phone: String
    coverLetter: String
    experience: String
    cvLink: String
    location: String
    visaStatus: String
    consent: Boolean!
    createdAt: DateTime!
  }

  type Query {
    applications(jobId: Int): [Application!]! @skipAuth
    application(id: Int!): Application @skipAuth
  }

  input CreateApplicationInput {
    jobId: Int!
    fullName: String!
    email: String!
    phone: String
    coverLetter: String
    experience: String
    cvLink: String
    location: String
    visaStatus: String
    consent: Boolean!
  }

  type Mutation {
    createApplication(input: CreateApplicationInput!): Application! @skipAuth
    deleteApplication(id: Int!): Application! @skipAuth
  }
`
