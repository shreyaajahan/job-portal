import React from 'react';
import { assets } from '../assets/assets';
import { useClerk, UserButton, useUser, SignedIn, SignedOut } from '@clerk/clerk-react';

const Navbar = () => {
  const { openSignIn, openUserProfile } = useClerk();
  const { user } = useUser();

  return (
    <div className='shadow py-4'>
      <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
        <img src={assets.logo} alt="Logo" className='h-10' />

        <div className='flex gap-4 max-sm:text-xs items-center'>
          {/* Optional: Recruiter login button */}
          <button className='text-gray-600'>Recruiter Login</button>

          {/* Show when user is NOT signed in */}
          <SignedOut>
            <button
              onClick={() => openSignIn()}
              className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full'
            >
              Login
            </button>
          </SignedOut>

          {/* Show when user IS signed in */}
          <SignedIn>
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
