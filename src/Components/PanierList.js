import React from 'react'
import Panier from './Panier'
import { useSelector } from 'react-redux'

const PanierList = () => {
  const Products=useSelector((state)=>state.ListReducer.ListProduct)

  return (
    <div>
{Products.filter((el)=>el.panier==true).map((prod)=><Panier prod={prod} key={prod.id} />)}

    </div>
  )
}

export default PanierList