import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import AddCoffee from './AddCoffee'

const Header = () => {
  return (
    <div className='headercolor flex flex-row justify-around p-5 items-center'>
        <div>
            <h1 className=' text-3xl font-bold cursor-pointer'>BuyCoffee</h1>
        </div>
        <div>
            <ConnectButton  />
        </div>
        <div>
          <AddCoffee />
        </div>
        <div>
            <a href=""><h2 className=' text-xl'>ABout The Project</h2></a>
        </div>
    </div>
  )
}

export default Header;