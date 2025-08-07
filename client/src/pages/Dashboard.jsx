import React from 'react'
import { Outlet } from 'react-router-dom'
import { assets } from '../assets/assets'

const Dashboard = () => {
  return (
    <div className='min-h-screen'>

        {/* {NavBar for recruiter Panel} */}
        <div className='shadow py-4'>
            <div className='px-5 flex justify-between items-center'>
                <img className='max-sm:w-32 cursor-pointer' src={assets.logo} alt=""/>
                <div className='flex items-center gap-3'>
                    <p className='max-sm:hidden'>Welcome InsiderJobs</p>
                    <div className='relative group'>
                        <img className='w-8 border rounded-full' src={assets.company_icon} alt=""/>
                        <div className='absolute hidden group-hover:block top-0 right-0 z-1 text-black rounded pt-12'>
                            <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                                <li className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Dashboard
