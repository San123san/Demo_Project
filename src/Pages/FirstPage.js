import React from 'react'
import Footer from '../Component/Footer'
import Navbar from '../Component/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faQrcode } from '@fortawesome/free-solid-svg-icons'
import check from '../Images/Check.jpg'

const SocialIcon = ({ icon }) => (
  <FontAwesomeIcon className='mx-5 text-[#0070b8] text-4xl cursor-pointer' icon={icon} />
)


function FirstPage() {
  return (
    <>
    <Navbar/>
      <div className='pt-2 bg-[#f7f9fb] pb-20'>
      <div className='flex flex-col items-center md:mx-[590px] lg:mx-[578px] bg-white max-sm:mx-5'>
          <img className='w-28' src={check} alt="check_icon" />
          <div className='text-2xl font-[299] my-8'>Your product link is ready</div>
          <div className='text-center text-base mb-8'>
            You can spread the word by sharing this link on - email, social media, chat, whatsapp and more
          </div>
          <div className='mb-8'>
          <SocialIcon icon={faFacebook} />
          <SocialIcon icon={faTwitter} />
          <SocialIcon icon={faQrcode} />
          </div>
          <button className='m-2 border-2 bg-[#0070b8] p-2 px-[127px] rounded-full text-white'>Get Link</button>
          <button className='m-2 border-2 bg-[#0070b8] p-2 px-[78px] rounded-full text-white'>Return to Dashboard</button>
        </div>
      </div>
      <Footer />

    </>
  )
}

export default FirstPage