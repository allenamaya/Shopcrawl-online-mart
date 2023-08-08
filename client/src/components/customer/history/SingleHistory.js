import React, {useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import ProductsContext from '../../context/ProductsContext'



const SingleHistory = ({history, index}) => {
  const navigate = useNavigate()
  const {setProducts} = useContext(ProductsContext)

  async function searchItem(){
    let response = await fetch("/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        search_term: history.title
      })
    })
    if(response.ok){
    let  data = await response.json();
    console.log(data)
    navigate('/products')
    setProducts([...data])
    }else{
      navigate("/error")
    }
  

}
  return (
    <tr>
      <td>{index + 1}</td>
      <td><Link to='/loading' onClick={searchItem}><h5>{history.title}</h5></Link></td>
    </tr>
  )
}

export default SingleHistory