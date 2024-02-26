import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
  return (
    <section className="bg-background" id="about">
      <div className='w-max mx-auto'>
        <h1 className='text-5xl my-4 text-center font-bold'>About</h1>
        <hr className='w-10/12 mx-auto border-red-400 border-b-2 rounded-full' />
      </div>
      <div className="items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 lg:gap-8">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Empowering Your HR Journey</h2>
          <p className="mb-4" >Our application revolutionizes human resource management by offering a comprehensive suite of tools designed to streamline operations and empower your team. From simplifying employee management to automating payroll, leave tracking, and performance evaluation, we provide the solutions you need to elevate your workforce management to the next level. With intuitive features and user-friendly design, we{'\''}re committed to helping you drive growth and success in your organization.</p>
        </div>
        <div className="hidden lg:mt-0 lg:flex">
          <Image src='/assets/home/aboutSide.jpg' className='w-full' width={500} height={0} alt="about-side" />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
