import IconDecrementQuantity from '../icons/icon-decrement-quantity'
import IconIncrementQuantity from '../icons/icon-increment-quantity'
import IconAddToCart from '../icons/icon-add-to-cart'
import { DessertI } from '@/types/Dessert'
import Image from 'next/image'
import React from 'react'

interface DessertProps {
  onDescrementProduct : (dessert : DessertI) => void
  onIncrementProduct : (dessert : DessertI) => void
  addToCart : (dessert : DessertI) => void
  quantity? : number
  inTheCart : boolean
  dessert : DessertI
}


export default function Dessert({ dessert, addToCart, inTheCart, quantity, onDescrementProduct, onIncrementProduct } : DessertProps) {

  const handleCart = () => addToCart(dessert)

  const handleIncrementProduct = () => onIncrementProduct(dessert)
  const handleDecrementProduct = () => onDescrementProduct(dessert)

  return (
    <article>
      <div className='relative mb-6'>
        <Image 
          src={dessert.image.desktop}
          alt={`${dessert.name} dessert`}
          width={190}
          height={190}
          className={`rounded-md object-contain ${inTheCart && 'border-[2px] border-primary'}`}
        />

        <div className='absolute left-1/2 -translate-x-1/2 -bottom-4'>

          {
            !inTheCart 
            ? (
              <button onClick={handleCart} className='bg-white border border-primary rounded-full py-2 px-4 flex items-center gap-x-2 justify-center text-xs  lg:text-sm  w-36 text-primaryRose-900 font-semibold'>
                <IconAddToCart />
                Add to Cart
              </button>
            )
            : (
              <div className='bg-primary text-sm w-36 px-4 py-2 text-white rounded-full flex items-center justify-between'>
                <button onClick={handleDecrementProduct} className='border-white rounded-full h-5 w-5 border flex items-center justify-center hover:bg-white hover:text-primary transition-colors'><IconDecrementQuantity /></button>
                <span>{quantity}</span>
                <button onClick={handleIncrementProduct} className='border-white rounded-full h-5 w-5 border flex items-center justify-center hover:bg-white hover:text-primary transition-colors'><IconIncrementQuantity /></button>
              </div>
            ) 
          }
         
        </div>

      </div>
      <div className='text-sm space-y-0.5'>
          <span className='text-primaryRose-500 text-xs'>{dessert.category}</span>
          <h3 className='font-semibold text-primaryRose-900 truncate block'>{dessert.name}</h3>
          <p className='font-semibold text-primary'>${dessert.price.toFixed(2)}</p>
      </div>
    </article>
  )
}
