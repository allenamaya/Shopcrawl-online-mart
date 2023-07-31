import Search from "./Search"
import {Routes, Route} from 'react-router-dom'
import Loading from "./loading/Loading"
import ProductsContext from "./context/ProductsContext"
import { useState } from "react"

const App = () => {
    const [products, setProducts] = useState(null)

    return (
        <div>
            
                <ProductsContext.Provider value={{products, setProducts}}>
                    <Routes>
                        <Route exact path='/' element={<Search />}/>
                        <Route exact path='/search' element={<Search />}/>
                        <Route exact path='loading' element={<Loading />}/> 
                    </Routes>
                </ProductsContext.Provider> 
            
        </div>
    )
}

export default App