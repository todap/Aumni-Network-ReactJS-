import React from "react";
function AboutUs(){
    return(
        <div>
        <br/>
  <div className="container-fluid">
    <h3>
      About us
    </h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br /><br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
  <br />
  <br />
  <div className="container-fluid fblock">
    <h2 className="text">Contact Us</h2>
    <br />
    <div className="row">
      <div className="col-sm-5">
        <p>Contact us and we'll get back to you within 24 hours.</p>
        <p><span className="glyphicon glyphicon-map-marker" /> Hyderabad, India</p>
        <p><span className="glyphicon glyphicon-phone" /> +91 9115151515</p>
        <p><span className="glyphicon glyphicon-envelope" /> myemail@something.com</p>
      </div>
      <div className="col-sm-7 slideanim">
        <div className="row">
          <div className="col-sm-6 form-group">
            <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
          </div>
          <div className="col-sm-6 form-group">
            <input className="form-control" id="email" name="email" placeholder="Email" type="email" required />
          </div>
        </div>
        <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows={5} defaultValue={""} /><br />
        <div className="row">
          <div className="col-sm-12 form-group">
            <button className="btn btn-default pull-right" type="submit">Send</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
export default AboutUs;