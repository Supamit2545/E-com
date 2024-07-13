import { useState } from 'react'
import './App.css'
import Topnav from './Components/topnav/Topnav'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import LoginPage from './Pages/AuthPage/LoginPage'
import ShopCategory from './Pages/Shop/ShopCategory'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="header">
        <Topnav />
      </div>
      <Routes>
        {/* <Route path='/' element={<App/>}/> */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/cloth' element={<ShopCategory />} />
        <Route path='/Toy' element={<ShopCategory />} />
        <Route path='/Assessery' element={<ShopCategory />} />
      </Routes>
    </div>
  )
}

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
