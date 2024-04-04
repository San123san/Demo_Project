import React from 'react';
import PayPal_icon from '../Images/PayPal_Footer.jpg';

const FOOTER_TEXT = ['Help', 'Contact Us', 'Security', 'Fees'];
const COPYRIGHT_TEXT = '©1999-2022PayPal, Inc. All rights reserved.';
const LEGAL_TEXT = ['Privacy', 'Legal', 'Policy Updates'];

const FooterItem = ({ children }) => <div>{children}</div>;

const FooterText = ({ textArray }) => (
  <div className='flex space-x-6 cursor-pointer max-sm:space-x-2'>
    {textArray.map((text, index) => <FooterItem key={index}>{text}</FooterItem>)}
  </div>
);

function Footer() {
  return (
    <div className='shadow-custom-color border-0 rounded-t-lg'>
      <div className='shadow-custom-color-1'>
        <div className='flex text-black items-center space-x-8 p-5 text-sm font-medium pl-48 border-b-[3px] pt-8 max-sm:pl-4  max-sm:pr-1'>
          <img className='w-24 object-cover' src={PayPal_icon} alt="PayPal Icon" />
          <FooterText textArray={FOOTER_TEXT} />
        </div>
        <div className='flex space-x-6 p-5 pb-8 pl-24 text-xs font-medium pb-10 pl-48 max-sm:pl-8'>
          <div className='text-slate-500'>{COPYRIGHT_TEXT}</div>
          <FooterText textArray={LEGAL_TEXT} />
        </div>
      </div>
      <div className='pb-28 max-sm:pb-2'></div>
    </div>
  )
}

export default Footer;
