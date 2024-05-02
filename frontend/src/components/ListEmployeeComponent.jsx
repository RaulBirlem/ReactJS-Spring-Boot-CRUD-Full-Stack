import React, { Component } from 'react'

export default class ListEmployeeComponent extends Component {


    constructor(props){
        super(props)

        this.state = {
            funcionarios:[]
        }
    }

  render() {
    return (
      <div>
        <h2 className='text-center'>Lista de Funcionários</h2>

        <div className="row">
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th> Nome</th>
                        <th> Sobrenome</th>
                        <th> Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        this.state.funcionarios.map(
                            funcionario => 
                                <tr key={funcionario.id}>
                                    <td>{funcionario.firstName}</td>
                                    <td>{funcionario.lastName}</td>
                                    <td>{funcionario.emailId}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>


      </div>
    )
  }
}
