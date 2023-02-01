import React from 'react';
import {Link} from 'react-router-dom';
function MyNav(){
    return (
      <div>
    <nav className="navbar navbar-expand-sm navbar-custom navbar-light">
    <div className="container-fluid">
    <Link className="navbar-brand " to="/">Alumni Network</Link>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
        <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/newsroom">Newsroom</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/events">Events</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <ul className="nav navbar-nav navbar-right justify-content-xl-end">
          <li>
            <div className="">
              <button type="button" className=" btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Sign Up</button>
              <div className="modal fade" id="myModal" role="dialog">
              <div className="modal-dialog">
          <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">×</button>
          <h4 className="modal-title">Select option</h4>
        </div>
        <div className="modal-body">
          <button type="button"><Link className="nav-link" to="/student"> Student</Link></button><br/><br/>
          <button type="button"><Link className="nav-link" to="/company">Company</Link></button>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>
</li>
          <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
        </ul>
    </ul>
    </div>
</nav>
</div>
)
}
export default MyNav;