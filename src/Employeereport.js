import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './All.css'

export class Employeereport extends Component {
    render() {
        return (
            <div>
                 <div className="row">
                    <div className="col-6"><h5 className=" pt-3"><b>Employee Report</b></h5></div>
                    <div className="col-6 pt-3 text-center"><Link to=""><button className="tablinks btn-secondary text-white button">Generate complete Report</button></Link></div>
                    </div>
                    <hr></hr>
                <div className="container">
                    <div className="row">
                    <div className="col-12">
                   <table class="table table-bordered">
                   <thead class="thead-dark text-center">
                        <tr>
                            <th>Name</th>
                            <th>Module</th>
                            <th>Review</th>
                            <th>Approval by</th>
                        </tr>
                        </thead>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                   </table>
                   </div>
                   </div>
                </div>
            </div>
        )
    }
}

export default Employeereport
