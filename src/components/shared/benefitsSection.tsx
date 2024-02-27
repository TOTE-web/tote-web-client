import React from 'react'
import { Card, CardDescription, CardTitle } from '../ui/card'
import Image from 'next/image'

const data = [
  {
    title: 'Streamlined HR Operations',
    description: 'Simplify and automate various HR tasks, including employee management, leave tracking, and performance evaluation, to streamline your HR operations and save time.',
    iconPath: 'operationIcon.svg'
  },
  {
    title: 'Enhanced Efficiency',
    description: 'Improve efficiency across your organization by automating repetitive tasks and workflows, allowing your team to focus on strategic initiatives and driving growth.',
    iconPath: 'efficiency.svg'
  },
  {
    title: 'Improved Employee Experience',
    description: 'Enhance the employee experience with intuitive self-service features, transparent communication channels, and streamlined processes, leading to increased satisfaction and engagement.',
    iconPath: 'empExp.svg'
  },
  {
    title: 'Data-Driven Decision Making',
    description: 'Access real-time insights and analytics to make informed decisions about workforce management, resource allocation, and performance optimization.',
    iconPath: 'stats.svg'
  },
  {
    title: 'Compliance and Security',
    description: 'Ensure compliance with regulations and protect sensitive employee data with robust security measures and built-in compliance features.',
    iconPath: 'security.svg'
  },
  {
    title: 'Scalability and Flexibility',
    description: 'Scale your HR processes seamlessly as your organization grows, with the flexibility to adapt to changing business needs and requirements.',
    iconPath: 'scale.svg'
  },
  {
    title: 'Cost Savings',
    description: 'Reduce overhead costs associated with manual HR processes and administrative tasks, leading to significant cost savings for your organization over time.',
    iconPath: 'cost.svg'
  },
  {
    title: 'Competitive Advantage',
    description: 'Gain a competitive edge in the market by leveraging advanced HR technology to attract top talent, retain employees, and foster a culture of innovation and success.',
    iconPath: 'trophy.svg'
  },
]

const BenefitsSection = () => {
  return (
    <section className="bg-background" id="benefits">
      <div className='w-max mx-auto'>
        <h1 className='text-5xl my-4 text-center font-bold'>Benefits</h1>
        <hr className='w-10/12 mx-auto border-red-400 border-b-2 rounded-full' />
      </div>
      <div className="py-4 px-4 mx-auto max-w-screen-xl grid lg:grid-cols-2 xl:grid-cols-3 lg:py-16 lg:px-6 lg:gap-8">
        {data.map((item, idx)=> (
          <Card key={idx} className='px-4 py-8 flex gap-4 rounded-xl rounded-t-none flex-col shadow-xl border-t-8 border-primary border-l-0 border-r-0 border-b-0'>
            <div className='bg-primary w-max flex justify-center items-center mb-2 p-4 rounded-full'>
              <Image src={`/assets/home/${item.iconPath}`} width={100} height={0} alt='operations' className='w-8 h-8 invert' />
            </div>
            <CardTitle className='text-gradient'>{item.title}</CardTitle>
            <CardDescription className='text-gray-500'>{item.description}</CardDescription>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default BenefitsSection
