import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const {id} = useParams();

    const [errors, setErrors] = useState({
        firstName:'',
        lastName:'',
        email:''
    })

    const navigator = useNavigate();
    
    useEffect(() => {

        if(id){
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error => {
                console.log(error)
            })
        }
    },[id])
    
    function saveOrUpdateEmployee(e) {
        e.preventDefault();

        if(validateForm()){

            const employee = {firstName, lastName, email}
            console.log(employee)

            if(id){
                updateEmployee(id, employee).then((response)=>{
                    console.log(response.data);
                    navigator('/employees')
                }).catch(error => {
                    console.log(error)
                })
            }else {
                createEmployee(employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees')
           }).catch(error => {
            console.log(error);
           })
        }
        }
    }


    function validateForm() {
        let valid = true;
        const errorsCopy = {... errors}

        if(firstName.trim()){
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = 'Preencha o campo';
            valid = false;
        }

        if(lastName.trim()){
            errorsCopy.lastName = '';

        } else {
            errorsCopy.lastName = 'Preencha o campo';
            valid = false;
        }

        if(email.trim()){
            errorsCopy.email = '';;

        }else {
            errorsCopy.email = 'Preencha o campo';
            valid = false
        }

        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Editar Funcionário</h2>
        }else {
            return <h2 className='text-center'>Adicionar Funcionário</h2>
        }
    }

  return (
    <div className='container'>
        <br /> <br />
        <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
            {
                pageTitle() 
            }
                <div className='card-body'>
                    <form>
                        <div className="form-group mb-2">
                            <label className='form-label'>Nome:</label>
                            <input type="text" 
                            placeholder='Digite seu nome' 
                            name='firstName' 
                            value={firstName} 
                            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                            onChange={(e) =>setFirstName(e.target.value)}
                            />
                            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>

                        <div className="form-group mb-2">
                            <label className='form-label'>Sobrenome:</label>
                            <input type="text" 
                            placeholder='Digite seu sobrenome' 
                            name='lastName' 
                            value={lastName} 
                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                            onChange={(e) =>setLastName(e.target.value)}
                            />
                            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}

                        </div>

                        <div className="form-group mb-2">
                            <label className='form-label'>Email:</label>
                            <input type="text" 
                            placeholder='Digite seu email' 
                            name='email' 
                            value={email} 
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            onChange={(e) =>setEmail(e.target.value)}
                            />
                        {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                        </div>


                        <button className="btn btn-success" onClick={saveOrUpdateEmployee}>Ok</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeComponent