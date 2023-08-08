import {createRoot} from 'react-dom/client'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import './css/index.css'

let root  = createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter> 
)