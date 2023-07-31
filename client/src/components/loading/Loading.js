import React, { useContext } from 'react'
import ProductsContext from '../context/ProductsContext'
import { useNavigate } from 'react-router-dom'

const Loading = () => {
    const {products} = useContext(ProductsContext)
    const navigate = useNavigate()

  return (
    <div>
        <h1> Fetching your results................</h1>
        {products ? navigate('/search') : null }
    </div>
  )
}

export default Loading