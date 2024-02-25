import React from 'react'
import Link from 'next/link' 
const Header = () => {
  return (
    <div className='flex flex-no-wrap sticky items-center border-b-2 py-2 h-16'>
        <h1>KUCMC</h1>
        <div className='grow '>
            <div className='flex items-center justify-center gap-2'>
                <Link  href="#" > main button</Link>
            </div>
        </div>
        <Link  href="#" >f</Link>
        <Link  href="#" >L</Link>
        <Link  href="#" >I</Link>
        
    </div>
    
  )
}

export default Header