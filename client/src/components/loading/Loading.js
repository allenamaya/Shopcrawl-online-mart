import React, { useContext} from 'react'
import ProductsContext from '../context/ProductsContext'
import { useNavigate } from 'react-router-dom'

const Loading = () => {
    const {products} = useContext(ProductsContext)
    const navigate = useNavigate()
      return (
        <div>
          <h1>Getting your products</h1>
          {products ? navigate("/products") : null}
        </div> 
    )   
}

export default Loading