import Image from 'next/image'
import React from 'react'

export default function EmptyCart() {
  return (
    <article className='bg-white rounded-md p-6 flex flex-col items-center justify-center gap-y-4'>
        <h2 className='text-xl font-bold text-primary self-start'>Your Cart (0)</h2>
      <Image 
            src='/images/illustration-empty-cart.svg'
            alt='Empty cart'
            height={98}
            width={98}
        />
        <p className='text-sm text-primaryRose-500 font-semibold'>Your added items will appear here</p>
    </article>
  )
}
