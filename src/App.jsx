import { Outlet } from 'react-router-dom'
import './App.css'
import { Header, Footer, ScrollTop } from './components/index'



function App() {

  return (
    <>
      <ScrollTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
