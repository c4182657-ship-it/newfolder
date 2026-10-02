export type Job = {
  id: number
  title: string
  company: string
  location: string
  jobType: string
  salary: string
  category: string
  description: string
  requirements: string
  createdAt: string
}

export const jobs: Job[] = [
  {
    id: 1,
    title: 'Civil / Structural Engineer',
    company: 'Dublin Civils Ltd',
    location: 'Dublin, Ireland',
    jobType: 'Full-time',
    salary: '€55,000 – €70,000',
    category: 'Engineering',
    description:
      'Designing, managing, and overseeing the structural integrity of residential and commercial builds. You will produce drawings, carry out site inspections, liaise with architects and contractors, and ensure compliance with Irish Building Regulations and Eurocodes.',
    requirements:
      'Degree in Civil/Structural Engineering. 3+ years experience. Familiar with Eurocodes and Irish Building Regulations. Chartered or working towards Chartership desirable.',
    createdAt: '2026-10-01T13:55:19.558Z',
  },
  {
    id: 2,
    title: 'Quantity Surveyor (QS)',
    company: 'CostSure QS Group',
    location: 'Dublin, Ireland',
    jobType: 'Full-time',
    salary: '€50,000 – €65,000',
    category: 'Quantity Surveying',
    description:
      'Managing project costs, contracts, and budgets. You will handle tenders, BOQs, valuations, variations, and final accounts for Dublin building projects.',
    requirements:
      'Degree in Quantity Surveying. 3+ years experience. Strong knowledge of Irish construction contracts (RIAI, GCCC). Excellent cost reporting skills.',
    createdAt: '2026-10-01T13:55:19.558Z',
  },
  {
    id: 3,
    title: 'Site Manager / Construction Manager',
    company: 'BuildRight Construction',
    location: 'Dublin, Ireland',
    jobType: 'Contract',
    salary: '€60,000 – €75,000',
    category: 'Site Management',
    description:
      'Overseeing day-to-day site operations, scheduling, subcontractors, deliveries, and safety. You own the programme and make sure the build finishes on time and on quality.',
    requirements:
      '5+ years site experience. Strong scheduling and subcontractor management. Safe Pass, First Aid desirable. Ability to lead toolbox talks.',
    createdAt: '2026-10-01T13:55:19.558Z',
  },
  {
    id: 4,
    title: 'Health & Safety Officer',
    company: 'SafeSite Ireland',
    location: 'Dublin, Ireland',
    jobType: 'Full-time',
    salary: '€45,000 – €58,000',
    category: 'Health & Safety',
    description:
      'Ensuring the site strictly complies with Irish safety regulations. You will run inductions, RAMS, audits, incident reports, and liaise with the HSA under the Construction Regulations.',
    requirements:
      'NEBOSH or equivalent. 2+ years construction H&S experience in Ireland. Knowledge of Safety, Health and Welfare at Work Act 2005 and Construction Regulations 2013.',
    createdAt: '2026-10-01T13:55:19.558Z',
  },
]

export const getJobById = (id: number): Job | undefined =>
  jobs.find((j) => j.id === id)
