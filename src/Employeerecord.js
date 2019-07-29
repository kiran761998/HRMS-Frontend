import React, { Component } from 'react'

export class Employeerecord extends Component {
    render() {
        return (
            <div>
                <h5 className="text-center pt-3"><b>Employee Record</b></h5>
                <hr></hr>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                   <table class="table table-bordered ">
                   <thead class="thead-dark text-center">
                        <tr>
                            <th>Week no.</th>
                            <th>Project</th>
                            <th>Module</th>
                            <th>Task</th>
                            <th>Task Completed</th>
                        </tr>
                        </thead>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                        </tr>
                   </table>
                   </div>
                   </div>
                </div>
            </div>
        )
    }
}

export default Employeerecord
