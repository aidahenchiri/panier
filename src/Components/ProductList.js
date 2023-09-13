import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import { Button, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Panier from './Panier'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProductList = () => {
    const Products=useSelector((state)=>state.ListReducer.ListProduct)

    
    const [total,setTotal]=useState(0)
  return (
    <div>
    <Link to={"/panier"}> <button><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" className="bi bi-basket2" viewBox="0 0 16 16">
  <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z"/>
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z"/>
</svg> </button></Link>
      <Link to={"/AddProduct"} ><Button>Add New Product</Button></Link>
      <Link to={"/Movielist"} ><Button>Movie List</Button></Link>
      <Link to={"/TaskList"}><Button>Task Todo</Button></Link>
      <h1>Total price:<span>{total}</span></h1>
        {Products.map(Prod=><Product Prod={Prod} key={Prod.id} setTotal={setTotal} total={total} />)}


    </div>
  )
}

export default ProductList