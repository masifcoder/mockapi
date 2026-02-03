


import { Drum } from 'lucide-react'
import React from 'react'
import SideNav from '../components/SideNav'

function CreateProductPage() {
  return (
    <div className='row'>
        <div className='col-md-2'>
          <div className='logo my-5'>
            <Drum color='red' size={48} /> <span className='fs-4 fw-bold'>Drum-Store</span>
          </div>
          <div>
            <SideNav />
          </div>
        </div>
        <div className='col-md-10'>
          create
        </div>
      </div>
  )
}

export default CreateProductPage