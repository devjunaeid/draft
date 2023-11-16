import React from 'react';
import ThemeSwitch from '../Theme/ThemeSwitch';

function Navbar() {
  return (
    <nav className="w-full py-5">
      <div className='flex justify-between items-center'>
        <div>
          <h1 className="text-2xl md:text-5xl uppercase text-secondary-500/80 dark:text-secondary-300 font-black tracking-tighter font-raleway">Draft</h1>
        </div>
        <div>
          <ThemeSwitch/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar