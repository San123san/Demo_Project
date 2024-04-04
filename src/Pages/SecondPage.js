import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import paypal from '../Images/Paypal_firstpage.jpg';
import website from '../Images/Website_prefrence.jpg';
import notification from '../Images/Notification.jpg';
import invoice from '../Images/Invoice.jpg';
import shipping from '../Images/Shipping.jpg';

// Define a reusable component for the sections
const Section = ({ title, description, image, title1 }) => (
  <div className='border-2 rounded-2xl border-slate-200 flex py-4 p-2 mr-[283px] mt-4 max-sm:mr-2'>
    <img className='h-12 object-cover' src={image} alt={title} />
    <div className='px-2'>
      <p className='text-base '>{title}</p>
      <p className='text-sm text-slate-600  sm:w-[550px] sm:h-2.5rem'>{description}</p>
    </div>
    <div className='flex items-center text-xs font-semibold text-[#3271db] pl-3 cursor-pointer'>{title1}</div>
  </div>
);

const SectionGroup = ({ title, description, sections }) => (
  <div className='mx-8 mt-14'>
    <p className='text-[31px]'>{title}</p>
    <p className='text-sm text-gray-600'>{description}</p>
    {sections.map((section, index) => (
      <Section key={index} {...section} />
    ))}
  </div>
);

function SecondPage() {
  // Define the data for the sections
  const sectionGroups = [
    {
      title: 'Selling Online',
      description: 'Grow your business by making it easier for your customers to pay you',
      sections: [
        {
          title: 'PayPal Buttons',
          description: 'Create and manage secure buttons for your customers to add items to their cart, buy, donate, or subscribe.',
          image: paypal,
          title1: 'Manage'
        },
        {
          title: 'Website preferences',
          description: 'Control how you sell online by turning on express checkouts and bringing customers back to your website after they pay with PayPal.',
          image: website,
          title1: 'Update'
        },
        {
          title: 'Instant payment notifications',
          description: 'Stay informed by turning on notifications for payments made on your website.',
          image: notification,
          title1: 'Update'
        },
      ]
    },
    {
      title: 'Getting paid',
      description: 'Choose from various payment tools to attract your customers.',
      sections: [
        {
          title: 'Invoices',
          description: 'Create professional invoices and customize it as per your requirements.',
          image: invoice,
          title1: 'Manage'
        },
      ]
    },
    {
      title: 'More selling tools',
      description: 'Check out the other tools that we have for you to help you sell online.',
      sections: [
        {
          title: 'Shipping preferences',
          description: 'Create your shipping levels for hassle-free returns.',
          image: shipping,
          title1: 'Create'
        },
      ]
    },
  ];

  return (
    <>
      <div>
        <Navbar />
        <div className='flex p-6 justify-center space-x-[35px] text-sm font-medium text-center items-center 
        shadow-custom-color-1 border-0 max-sm:hidden'>
          <div className='w-[66px] cursor-pointer'>Account</div>
          <div className='w-[70px] cursor-pointer justify-center'>Security</div>
          <div className='w-[105px] cursor-pointer'>Data & Privacy</div>
          <div className='w-[105px] cursor-pointer'>Payments</div>
          <div className='w-[105px] cursor-pointer'>Notification</div>
          <div className='w-[105px] cursor-pointer bg-[#eefafd] p-2.5 text-[#0c236d] rounded-full border-0'>Seller Tools</div>
          <div className='w-[105px] cursor-pointer flex flex-col items-center'>
            <div>Statement and</div>
            <div>Taxes</div>
          </div>
        </div>

        <div className='sm:hidden'>
        <div className=' p-6 justify-center text-sm font-medium text-center items-center 
        shadow-custom-color-1 border-0'>
          <div className='flex pb-3'>
            <div className='w-[66px] cursor-pointer'>Account</div>
            <div className='w-[70px] cursor-pointer justify-center'>Security</div>
            <div className='w-[105px] cursor-pointer'>Data & Privacy</div>
            <div className='w-[105px] cursor-pointer'>Payments</div>
          </div>
          <div className='flex space-x-[5px] items-center' >
            <div className='w-[105px] cursor-pointer'>Notification</div>
            <div className='w-[105px] cursor-pointer bg-[#eefafd] p-1 py-2 text-[#0c236d] rounded-full border-0'>Seller Tools</div>
            <div className='w-[105px] cursor-pointer flex flex-col items-center'>
              <div>Statement and</div>
              <div>Taxes</div>
            </div>
          </div>
        </div>
      </div>

        <div className='bg-white '>
          <div className='mt-8 sm:mx-60 mb-28 max-sm:px-3'>
            <div className=''>
              <p className='text-[41px] font-normal'>Seller tools</p>
              <p className='text-lg text-gray-600'>Sell online easily and grow your business with Seller Tools, Create PayPal <br />
                buttons, get instant payment notifications, and do much more.</p>
            </div>
            {sectionGroups.map((group, index) => (
              <SectionGroup key={index} {...group} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SecondPage;
