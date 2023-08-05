import Search from "./Search"
import {Routes, Route} from 'react-router-dom'
import Loading from "./loading/Loading"
import ProductsContext from "./context/ProductsContext"
import { useEffect, useState } from "react"
import Products from "./products/Products"
import Home from "./home/Home"
import Register from "./register/Register"
import SignIn from "./sign_in/SignIn"
import Footer from "./Footer"
import SearchHistories from "./customer/history/SearchHistories"
import Profile from "./customer/profile/Profile"
import Fashion from "./fashion/Fashion"
import Electronic from "./electronics/Electronic"
import Deals from "./deals/Deals"
import Error from "./error/Error"





const App = () => {
    const [products, setProducts] = useState(null)
    const [currentCustomer, setCurrentCustomer] = useState(null)
    const [deals, setDeals] = useState(null)
    const [fashion, setFashion] = useState(null)
    const [electronics, setElectronics] = useState(null)
    const [homeProducts, setHomeProducts] = useState(null)

    async function authenticateCustomer(){
        let response = await fetch("/auth");
        if(response.ok){
            let authenticated = await response.json();
            setCurrentCustomer(authenticated)
        }
    }

    async function fetchElectronics(){
        let response = await fetch("/electronics");
        if(response.ok){
            let data = await response.json()
            setElectronics([...data])
        }
    }

    async function fetchDeals(){
        let response = await fetch("/deals");
        if(response.ok){
            let data = await response.json()
            setDeals([...data])
        }
    }

    async function fetchFashion(){
        let response = await fetch("/fashions");
        if(response.ok){
            let data = await response.json()
            setFashion([...data])
        }
    }

    async function fetchHomeProducts(){
        let response = await fetch("/home_products")
        if(response.ok){
            let data = await response.json();
            setHomeProducts([...data])
        }
    }

    useEffect(() => {
        fetchElectronics();
        fetchDeals();
        fetchFashion();
        authenticateCustomer();
        fetchHomeProducts();
        
    }, [])

    return (
        <div>
            
                <ProductsContext.Provider value={{ currentCustomer, setCurrentCustomer, products, setProducts}}>
                <Search />
                <div className="main-content">
                     <Routes>
                        <Route exact path="/" element={<Home products={homeProducts}/>}/>
                        <Route exact path='/products' element={<Products />}></Route>
                        <Route exact path='/loading' element={<Loading />}/> 
                        <Route exact path='/sign-in' element={<SignIn />}/>
                        <Route exact path='/register' element={<Register />} />
                        <Route exact path='/history' element={<SearchHistories />} />
                        <Route exact path="/profile" element={<Profile />} />
                        <Route exact path='/fashion' element={<Fashion fashion={fashion}/>} />
                        <Route exact path='/deals' element={<Deals deals={deals}/>} />
                        <Route exact path='/electronics' element={<Electronic electronics={electronics}/>} />
                        <Route exact path="/error" element={<Error />} />
                    </Routes>
                   
                </div>
                <Footer />
                </ProductsContext.Provider> 
                
        </div>
    )
}

export default App