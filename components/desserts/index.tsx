
import React, { ReactNode } from 'react'
import Dessert from './dessert'
import { DessertI } from '@/types/Dessert'


interface DessertProps {
  desserts : DessertI[]
  render : (dessert : DessertI) => ReactNode
}

export default function Desserts({  render, desserts } : DessertProps) {

  return (
    <section className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
        {
          desserts.map(dessert => render(dessert) )
        }
    </section>
  )
}
