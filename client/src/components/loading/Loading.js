import React, { useContext} from 'react'
import ProductsContext from '../context/ProductsContext'
import { useNavigate } from 'react-router-dom'

const Loading = () => {
    const {products} = useContext(ProductsContext)
    const navigate = useNavigate()
      return (
        <div className='loading'>
          <div class="ring">Loading
            <span className='loading'></span>
          </div>
          {products ? navigate("/products") : null}
        </div> 
    )   
}

export default Loading