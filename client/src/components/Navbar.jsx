import React from 'react';
import { assets } from '../assets/assets';
import {
  useClerk,
  UserButton,
  useUser,
  SignedIn,
  SignedOut
} from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const { openSignIn, openUserProfile } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className='shadow py-4'>
      <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
        {/* Logo */}
        <img
          onClick={() => navigate('/')}
          src={assets.logo}
          alt="Logo"
          className="cursor-pointer h-10"
        />

        {/* Right side buttons */}
        <div className='flex gap-4 max-sm:text-xs items-center'>
          {/* When Signed Out */}
          <SignedOut>
            <button
              onClick={() => openSignIn()}
              className='bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-full'
            >
              User Login
            </button>
            <button
              onClick={() => navigate('/recruiter-login')}
              className='text-gray-600 hover:text-blue-600 transition'
            >
              Recruiter Login
            </button>
          </SignedOut>

          {/* When Signed In */}
          <SignedIn>
            <button
              className='text-gray-600 hover:text-blue-600 transition'
              onClick={() => navigate('/applications')}
            >
              Applied Jobs
            </button>
            <span className='text-gray-700 font-medium hidden sm:block'>
              {user?.fullName || user?.emailAddresses?.[0]?.emailAddress || 'User'}
            </span>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
