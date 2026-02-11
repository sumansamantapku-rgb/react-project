import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'


const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Forever is a modern eCommerce platform designed to deliver a seamless and enjoyable online shopping experience. We offer a curated collection of quality products with a focus on style, affordability, and convenience. With secure payments, fast delivery, and user-friendly navigation, Forever makes shopping simple, reliable, and truly effortless—anytime, anywhere.</p>
        <p>Since our inception, we have been committed to building trust through quality, innovation, and customer satisfaction.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our Mission is to make online shopping simple, accessible, and enjoyable for everyone. We strive to provide high-quality products at fair prices while delivering a seamless user experience, secure transactions, and reliable service. Since our inception, our mission has been driven by a commitment to customer satisfaction, innovation, and long-term trust.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Forever, we prioritize quality, convenience, and customer satisfaction in everything we do. We offer carefully selected products, secure and easy payments, fast and reliable delivery, and a user-friendly shopping experience. Since our inception, we have focused on building trust through transparency, responsive support, and continuous improvement—making Forever a dependable choice for online shopping.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p  className='text-gray-600'>Forever is designed to make online shopping quick, simple, and hassle-free. With intuitive navigation, powerful search, secure checkout, and easy cart management, customers can find and purchase products effortlessly. Since our inception, we have focused on saving our customers time by delivering a smooth experience across all devices, anytime and anywhere.</p>

        </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p  className='text-gray-600'>At Forever, our customers come first. We are committed to providing responsive, friendly, and reliable support at every step of the shopping journey. From product inquiries to order assistance and after-sales support, our team is dedicated to resolving concerns quickly and efficiently. Since our inception, we have focused on building lasting relationships through transparency, care, and customer satisfaction.</p>

        </div>

      </div>
      <NewsletterBox/>
      
    </div>
  )
}

export default About
