import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { assets, jobsApplied } from '../assets/assets'
import moment from 'moment'
import Footer from '../components/Footer'

const Applications = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [resume, setResume] = useState(null)

  return (
    <>
      <Navbar />
      <div className='container px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10'>
        {/* Resume Section */}
        <h2 className='text-xl font-semibold'>Your Resume</h2>
        <div className='flex gap-2 mb-6 mt-3'>
          {isEdit ? (
            <>
              <label className='flex items-center' htmlFor="resumeUpload">
                <p className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2 cursor-pointer'>Select Resume</p>
                <input
                  id='resumeUpload'
                  type="file"
                  accept='application/pdf'
                  hidden
                  onChange={e => setResume(e.target.files[0])}
                />
                <img src={assets.profile_upload_icon} alt="upload" />
              </label>
              <button
                onClick={() => setIsEdit(false)}
                className='bg-green-100 border border-green-400 rounded-lg px-4 py-2'
              >
                Save
              </button>
            </>
          ) : (
            <div className='flex gap-2'>
              <a
                href={resume ? URL.createObjectURL(resume) : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg'
              >
                Resume
              </a>
              <button
                onClick={() => setIsEdit(true)}
                className='text-gray-500 border border-gray-300 rounded-lg px-4 py-2'
              >
                Edit
              </button>
            </div>
          )}
        </div>

        {/* Jobs Applied Section */}
        <h2 className='text-xl font-semibold mb-4'>Jobs Applied</h2>
        <table className='min-w-full border border-gray-300 text-left'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='py-3 px-4 border-b border-gray-300'>Company</th>
              <th className='py-3 px-4 border-b border-gray-300'>Job Title</th>
              <th className='py-3 px-4 border-b border-gray-300 max-sm:hidden'>Location</th>
              <th className='py-3 px-4 border-b border-gray-300 max-sm:hidden'>Date</th>
              <th className='py-3 px-4 border-b border-gray-300'>Status</th>
            </tr>
          </thead>
          <tbody>
            {jobsApplied.map((job, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className='py-3 px-4 border-b border-gray-300 flex items-center gap-2'>
                  <img className='w-8 h-8' src={job.logo} alt={job.company} />
                  {job.company}
                </td>
                <td className='py-3 px-4 border-b border-gray-300'>{job.title}</td>
                <td className='py-3 px-4 border-b border-gray-300 max-sm:hidden'>{job.location}</td>
                <td className='py-3 px-4 border-b border-gray-300 max-sm:hidden'>{moment(job.date).format('ll')}</td>
                <td className='py-3 px-4 border-b border-gray-300'>
                  <span className={`${job.status==='Accepted' ? 'bg-green-100' : job.status ==='Rejected' ? 'bg-red-100' : 'bg-blue-100'} px-4 py-1.5 rounded`}>
                  {job.status}
                  </span>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  )
}

export default Applications;
