import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faGear, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import paytmIcon from '../Images/Paypal.jpg'

const NavbarItem = ({ text }) => (
  <div href="#" className="text-white cursor-pointer hover:text-gray-200 max-sm:pt-2">
    {text}
  </div>
);

const NavbarIcon = ({ icon }) => (
  <div href="#" className="text-white cursor-pointer hover:text-gray-200 mr-2">
    <FontAwesomeIcon icon={icon} />
  </div>
);

const Navbar = () => {
  const [isOpen, showisOpen] = useState(false);
  const navbarItems = ['Dashboard', 'Finances', 'Send and Request', 'Deals', 'Wallet', 'Activity', 'Help'];
  const navbarIcons = [faBell, faGear];

  return (
    <div className="bg-[#152b8e] p-6">
      <nav className="flex justify-around sm:mx-24 max-sm:w-fit ">
        <div className='flex space-x-10 items-center text-sm font-extralight max-sm:hidden'>
          <img className='w-8 h-8 object-cover' src={paytmIcon} />
          {navbarItems.map((item) => <NavbarItem text={item} />)}
        </div>

        <div className="inline-flex items-center font-normal space-x-2 max-sm:hidden">
          {navbarIcons.map((icon) => <NavbarIcon icon={icon} />)}
          <button className="text-white py-2 px-4 rounded inline-flex items-center text-sm">
            LOG OUT
          </button>
        </div>

        <div className='sm:hidden max-sm:overflow-hidden'>
          <div className='items-center text-sm font-extralight flex mb-2'>
            <img className='w-8 h-8 object-cover mr-44' src={paytmIcon} />

            <button className="mr-5" onClick={() => showisOpen(!isOpen)}>
              <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
            </button>

            {navbarIcons.map((icon) => <NavbarIcon icon={icon} />)}
            <button className="text-white py-2 rounded items-center text-sm">
              LOG OUT
            </button>
          </div>
          {isOpen && navbarItems.map((item) => <NavbarItem text={item} />)}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
