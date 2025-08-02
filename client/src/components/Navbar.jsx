import React from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div>
      <div>
        <img src ={assets.logo} alt="" />
        <div className='shadow py-4'>
            <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'></div></div>
            <button>Recuriter Login</button>
            <button>Login</button>
        </div>
      </div>
  )
}

export default Navbar
