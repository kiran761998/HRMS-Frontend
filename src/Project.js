import React, { Component } from 'react'
import {Link} from 'react-router-dom';



 class Project extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-6"><h5 className=" pt-3"><b>Project</b></h5></div>
                    <div className="col-6 pt-3 text-center"><Link to=""><button className="tablinks bg-dark text-white">Add Project</button></Link></div>
                    </div>
                    <hr></hr>
            </div>
        )
    }
}

export default Project
