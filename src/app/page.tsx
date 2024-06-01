import Aside from '@/components/Aside'
import Orderpage from '@/components/orderPage'
import React from 'react'

const Page = () => {
  return (
    <div className='flex w-full'>
      <Aside />
      <Orderpage />
    </div>
  )
}

export default Page