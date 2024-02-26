import React from 'react'
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Switch } from '../ui/switch';
import { Badge } from '../ui/badge';

type PriceCardTypes = {
  topText: string,
  title: string,
  description: string,
  features: string[],
  btnVariant: string,
  badge?: string,
  shadow?: string
}

const data = [
  {
    topText: 'Basic',
    title: 'Free',
    description: 'The perfect way to get started and get used to our tools.',
    btnVariant: 'outline',
    features: [
      'Limited to 50 employees.',
      'Basic features such as employee management, leave tracking, and document storage.',
      'No access to advanced features like payroll management or performance evaluation.',
      'Email support only, with a response time of 1-2 business days.',
      'Limited customization options for reports and templates.'
    ]
  },
  {
    topText: 'Pro',
    title: '$25/Yearly',
    description: 'Ideal for startups or small teams.',
    btnVariant: 'default',
    badge: 'Popular',
    shadow: 'shadow-2xl',
    features: [
      'Up to 500 employees.',
      'Full access to all core features, including employee management, leave tracking, performance evaluation, and document storage.',
      'Basic payroll management features with limited customization options.',
      'Email and chat support during business hours, with a response time of 24 hours or less.',
      'Access to a knowledge base and tutorials for self-help.'
    ]
  },
  {
    topText: 'Plus',
    title: 'Pay as you go',
    description: 'Ideal for big companies or teams.',
    btnVariant: 'outline',
    features: [
      'Unlimited employees.',
      'Access to all features, including advanced payroll management, comprehensive reporting, and customization options.',
      'Priority email and chat support with faster response times (within 12 hours).',
      'Dedicated account manager for personalized assistance and support.',
      'Onboarding and training sessions for new users.',
      'Quarterly performance reviews and optimization consultations.'
    ]
  },
]

const PriceCard = ({ topText, title, description, features, btnVariant, badge, shadow } : PriceCardTypes) => {
  return (
    <Card className={`py-6 px-3 flex flex-col gap-3 max-w-md shadow-secondary ${shadow || 'shadow-md'} rounded-xl h-full`}>
      {badge && <Badge variant="default" className='w-max self-end text-md'>{badge}</Badge>}
      <p className='text-lg'>{topText}</p>
      <h1 className='text-3xl font-semibold'>{title}</h1>
      <p className='text-base text-gray-400'>{description}</p>
      <Button variant={btnVariant || 'default'} className='my-4'>Get Started</Button>
      <div className='flex flex-col gap-3'>
        {features.map((item, idx)=> (
          <div key={idx} className='flex gap-3 items-center'>
            <Image src="/assets/home/check.svg" width={1000} height={0} alt='tick' className='w-4 h-4 fill-green-500 self-center' />
            <span className='text-md'>{item}</span>
          </div>
        ))}
      </div>
    </Card>
  )
};

const PricingSection = () => {
  return (
    <section className="bg-background" id="pricing">
      <div className='w-max mx-auto'>
        <h1 className='text-5xl my-4 text-center font-bold'>Ready to get started?</h1>
        <hr className='w-10/12 mx-auto border-red-400 border-b-2 rounded-full' />
      </div>
      <p className='text-center text-lg my-4'>Choose a plan tailored to your needs.</p>
      <div className='flex justify-center items-center gap-4'>
        <span>Monthly</span>
        <Switch />
        <span>Yearly</span>
      </div>
      <div className='grid justify-center items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8 mt-16 mx-auto w-max'>
        {data.map((priceDetails, idx)=> (
          <PriceCard {...priceDetails} key={idx} />
        ))}
      </div>
    </section>
  )
}

export default PricingSection
