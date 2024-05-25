import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const navigator = useNavigate();
    
    function saveEmployee(e) {
        e.preventDefault();
        const employee = {firstName, lastName, email}
        console.log(employee)

        createEmployee(employee).then((response) => {
            console.log(response.data);
            navigator('/employees')
        })
    }

  return (
    <div className='container'>
        <br /> <br />
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
                <h2 className='text-center'>Adicionar Funcionário</h2>
                <div className='card-body'>
                    <form>
                        <div className="form-group mb-2">
                            <label className='form-label'>Nome:</label>
                            <input type="text" 
                            placeholder='Digite seu nome' 
                            name='firstName' 
                            value={firstName} 
                            className='form-control'
                            onChange={(e) =>setFirstName(e.target.value)}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <label className='form-label'>Sobrenome:</label>
                            <input type="text" 
                            placeholder='Digite seu sobrenome' 
                            name='lastName' 
                            value={lastName} 
                            className='form-control'
                            onChange={(e) =>setLastName(e.target.value)}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <label className='form-label'>Email:</label>
                            <input type="text" 
                            placeholder='Digite seu email' 
                            name='email' 
                            value={email} 
                            className='form-control'
                            onChange={(e) =>setEmail(e.target.value)}
                            />
                        </div>


                        <button className="btn btn-success" onClick={saveEmployee}>Ok</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent