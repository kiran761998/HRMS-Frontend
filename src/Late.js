import React, { Component } from 'react'

 class Late extends Component {
  render() {
    return (
      <div className="Late">
        <h5 className="text-center pt-3"><b>Late Today</b></h5>
        <hr></hr>
        <div class="container">
          <div className="row">
           <div className="col-12">
                        <table class="table table-bordered table-responsive-sm">
                        <thead class="thead-dark text-center">
                        <tr>
                            <th>Name</th>
                            <th>Check in Time</th>
                            <th>Late counts</th>
                            <th>Last 5 check ins</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>a</td>
                            <td>b</td>
                            <td>c</td>
                            <td>b</td>
                        </tr>
                        <tr className="table-active">
                            <td>c</td>
                            <td>d</td>
                            <td>mary</td>
                            <td>d</td>
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

export default Late
