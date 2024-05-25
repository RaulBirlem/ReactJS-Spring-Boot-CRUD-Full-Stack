
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import EmployeeComponent from './components/EmployeeComponent'
import FooterComponent from './components/FooterComponent'



function App() {

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
        <Routes>
          <Route path='/' element = {<ListEmployeeComponent/>}></Route>
          <Route path='/employees' element = {<ListEmployeeComponent/>}></Route>
          <Route path='/add-employee'element = {<EmployeeComponent/>}></Route>
        </Routes>
        <FooterComponent/>
    </BrowserRouter>
      
    </>
  )
}

export default App
