import Search from "./Search"
import {Routes, Route} from 'react-router-dom'
import Loading from "./loading/Loading"
import ProductsContext from "./context/ProductsContext"
import { useState } from "react"
import Products from "./products/Products"

const App = () => {
    const [products, setProducts] = useState(null)

    return (
        <div>
            
                <ProductsContext.Provider value={{products, setProducts}}>
                <Search />
                <div className="main-content">
                     <Routes>
                        <Route exact path='products' element={<Products />}></Route>
                        <Route exact path='loading' element={<Loading />}/> 
                    </Routes>
                </div>
                   
                </ProductsContext.Provider> 
            
        </div>
    )
}

export default App