import React from 'react'

const ListEmployeeComponent = () => {

    const dummyData = [
        {
            "id": 1,
            "firstName":"React",
            "lastName":"JS",
            "email":"reactjs@gmail.com"
        },
        {
            "id": 2,
            "firstName":"HTML",
            "lastName":"S",
            "email":"htmls@gmail.com"
        },
        {
            "id": 3,
            "firstName":"Java",
            "lastName":"SB",
            "email":"javasb@gmail.com"
        },
    ]
  return (
    <div className='container'>

        <h2 className='text-center'>Lista de Funcionários</h2>

        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Primeiro Nome</th>
                    <th>Sobrenome</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    dummyData.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>

                        </tr>
                    )
                }
                <tr>

                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent