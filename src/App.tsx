// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
import Information from './pages/information'
import Register from './pages/register'
import DashboardPage from './pages/dashboard'
import RegisterBeasiswa from './pages/register-beasiswa'
import PerbaruiInformasi from './pages/perbarui-informasi'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage/>}/>
          <Route path="/information" element={<Information/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/dashboard" element={<DashboardPage/>}/>
          <Route path="/pengajuan-dokumen-beasiswa" element={<RegisterBeasiswa/>}/>
          <Route path="/perbarui-informasi" element={<PerbaruiInformasi/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
