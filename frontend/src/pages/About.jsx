import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>AYURVEDA" is made up of two words- Ayuh and Veda. Ayuh means life and Veda means knowledge or science.          </p>
          <p>Thus "AYURVEDA' in totality means 'Science of life. It incorporates all aspects of life whether physical, psychological, spiritual or social. What is beneficial and what is harmful to life, what is happy life and what is sorrowful life; all these four questions and life span allied issues are elaborately and emphatically discussed in Ayurveda.          </p>
          <b className='text-gray-800'>Origin of Ayurveda          </b>
          <p>Ayurveda is considered as one of the ancient health care system. The antique vedic texts have scattered references of Ayurvedic Remedies and allied aspects of medicine and health. Atharva-veda mainly deals with extensive Ayurvedic information. That is why Ayurveda is said to be the off shoot of Atharva Veda. Ayurveda is the system of medicine that evolved in India with a rationale logical foundation and it has survived as a distinct entity from remote antiquity to the present day. The fundamentals on which the Ayurvedic system is based are essentially true for all times and do not change from are to age. These are based on human actors, on intrinsic causes. The origin of Ayurveda is attributed to Atharva Veda where mention is made several diseases with their treatments. Later, from the 6th Century BC to 7th Century AD there was systematic development of the science and it is called Samhita period, when a number of classical works were produced by several authors and during this period there is evidence of organized medical care.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE: </b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p >Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  )
}

export default About
