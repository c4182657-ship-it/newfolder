import { db } from 'api/src/lib/db'

export default async () => {
  try {
    const existing = await db.job.count()
    if (existing > 0) {
      console.info(`\n  Seed skipped: ${existing} jobs already exist.\n`)
      return
    }

    await db.job.createMany({
      data: [
        {
          title: 'Civil / Structural Engineer',
          company: 'Dublin Civils Ltd',
          location: 'Dublin, Ireland',
          jobType: 'Full-time',
          salary: '€55,000 – €70,000',
          category: 'Engineering',
          description:
            'Designing, managing, and overseeing the structural integrity of residential and commercial builds. You will produce drawings, carry out site inspections, liaise with architects and contractors, and ensure compliance with Irish Building Regulations and Eurocodes.',
          requirements:
            'Degree in Civil/Structural Engineering. 3+ years experience. Knowledge of Irish Building Regulations, BCAR, Eurocodes. AutoCAD / Revit desirable.',
          active: true,
        },
        {
          title: 'Quantity Surveyor (QS)',
          company: 'CostSure QS Group',
          location: 'Dublin, Ireland',
          jobType: 'Full-time',
          salary: '€50,000 – €65,000',
          category: 'Quantity Surveying',
          description:
            'Managing project costs, contracts, and budgets. You will handle tenders, BOQs, valuations, variations, and final accounts for Dublin building projects.',
          requirements:
            'Degree in Quantity Surveying. 2+ years experience. Experience with RIAI contracts, cost reporting, and valuations.',
          active: true,
        },
        {
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
          active: true,
        },
        {
          title: 'Health & Safety Officer',
          company: 'SafeSite Ireland',
          location: 'Dublin, Ireland',
          jobType: 'Full-time',
          salary: '€45,000 – €58,000',
          category: 'Health & Safety',
          description:
            'Ensuring the site strictly complies with Irish safety regulations. You will run inductions, RAMS, audits, incident reports, and liaise with the HSA under the Construction Regulations.',
          requirements:
            'NEBOSH / IOSH or equivalent. Knowledge of Irish Construction Regulations and HSA requirements. 2+ years site H&S experience.',
          active: true,
        },
      ],
    })

    console.info('\n  Seeded 4 construction jobs.\n')
  } catch (error) {
    console.error(error)
  }
}
