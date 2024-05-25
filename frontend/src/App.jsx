
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
          <Route path='/' element = {<ListEmployeeComponent/>}></Route> {/*home */}
          <Route path='/employees' element = {<ListEmployeeComponent/>}></Route> {/*get all */}
          <Route path='/add-employee'element = {<EmployeeComponent/>}></Route> {/*post */} {/*put */}
          <Route path='/edit-employee/:id' element = {<EmployeeComponent/>}></Route>
        </Routes>
        <FooterComponent/>
    </BrowserRouter>
      
    </>
  )
}

export default App
