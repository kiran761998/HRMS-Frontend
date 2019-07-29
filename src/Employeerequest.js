import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Employeerequest extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-4"><h5 className=" pt-3"><b>Employee Request</b></h5></div>
                    <div className="col-4"></div>
                    <div className="col-4 pt-2">
                    <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle"  id="navbardrop" data-toggle="dropdown"><b>Employee</b></a>
                    <div class="dropdown-menu bg-dark">
                    <Link to="" class="dropdown-item"><i class="fas fa-thumbs-up"></i>Approve</Link>
                    <Link to="" class="dropdown-item"><i class="fab fa-stack-exchange"></i>Change Detail</Link>
                    <Link to="" class="dropdown-item"><i class="fas fa-underline"></i>Decline</Link>
                    <Link to="" class="dropdown-item"><i class="fas fa-exchange-alt"></i>Change Request</Link>
                    </div>
                    </div>
                    </div>
                </div>
                <hr></hr>
                  <div class="container">
                      <div className="row">
                          <div className="col-6 text-center">Leave Request</div>
                          <div className="col-6 text-center ">Detail Request</div>
                      </div>
                      <div className="row">
                          <div className="col-12">
                        <table class="table table-bordered table-sm">
                        <thead class="thead-dark text-center">
                        <tr>
                            <th>Name</th>
                            <th>From Date</th>
                            <th>To date</th>
                            <th>Reason</th>
                            <th>Approved by</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>a</td>
                            <td>b</td>
                            <td>c</td>
                            <td>b</td>
                            <td>c</td>
                        </tr>
                        <tr className="table-active">
                            <td>c</td>
                            <td>d</td>
                            <td>mary</td>
                            <td>d</td>
                            <td>mary</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    </div>
                 </div>
            </div>
        )
    }
}

export default Employeerequest
