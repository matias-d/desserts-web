import { DessertI } from '@/types/Dessert'
import React from 'react'
import IconRemoveItem from '../icons/icon-remove-item'
import Image from 'next/image'

interface CartCardProps {
    cart : DessertI
    removeToCart? : (dessert : DessertI) => void
}

export default function CartCard({ cart, removeToCart } : CartCardProps) {

  const totalDessert = cart.price * cart.quantity!

  const handleRemoveToCart = () => removeToCart && removeToCart(cart)

  return (
    <div className='flex items-center w-full justify-between border-b pb-4 border-b-primaryRose-100 mb-4'>
      <div className='flex items-center gap-x-4'>
        {
          !removeToCart &&
          <Image src={cart.image.thumbnail} alt={`${cart.name} thumbnail`} width={50} height={50} className='rounded-md'/>
        }
        
        <section className='space-y-1'>
            <h4 className=' font-semibold te text-primaryRose-900'>{cart.name}</h4>
            <div className='flex items-center gap-x-2 text-sm'>
                <p className='font-semibold text-primary'>{cart.quantity}x</p>
                <p className='text-primaryRose-300'>@ ${cart.price.toFixed(2)}</p>
                <p className='text-primaryRose-500 font-semibold'>${totalDessert.toFixed(2)}</p>
            </div>
        </section>
      </div>
        {
          removeToCart && <button onClick={handleRemoveToCart} className='p-1 rounded-full border border-primaryRose-300 text-primaryRose-300 hover:text-primaryRose-500 hover:border-primaryRose-400 transition-colors'><IconRemoveItem /></button>
        }
        
    </div>
  )
}
