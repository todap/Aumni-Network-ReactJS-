import React from "react";
function CompanyRegister(){
    return (
        <div>
              <div>
            <div className="row container-fluid">
  <h2>Register.</h2>
  <br /><br /><br/>
  <div className="row">
  <div className="col-md-6 col-xs-3">
    <form>
      <div className="form-group">
        <label className="form-label">Upload Company Logo</label>
        <input className="form-control" type="file" id="formFileDisabled" disabled />
      </div><br />
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Company Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      </div><br />
      <div className="form-group">
        <label htmlFor="exampleInputDescription">Password</label>
        <input type="password" className="form-control" id="exampleInputDescription" placeholder="Enter Password" />
      </div><br />
      <div className="form-group">
        <label htmlFor="exampleInputDescription">Re-Enter Password</label>
        <input type="password" className="form-control" id="exampleInputDescription" placeholder="Re-Enter Password" />
      </div><br />
      </form></div>
      <div className="col-md-6 col-xs-3">
    <form>
      <label htmlFor="establishment"><b>Year of Establishment</b></label><br />
      <input type="date" id="establishment" name="establishment" />
      <div className="form-group">
        <label htmlFor="examplPhoneNumber">Phone Number</label>
        <input type="number" className="form-control" id="examplePhoneNumber" placeholder="Enter Phone Number" />
      </div><br />
      <div class="form-group">
      <label for="comment">Company Description</label>
      <textarea class="form-control" rows="5" id="comment"></textarea>
    </div><br/>
    </form>
    </div>
</div>
<div className="row">
<div className="text-center">
      <a href="" className="btn btn-success " style={{width: '20%'}}>
        Submit</a>
    </div>

</div>
</div>
        </div>
        </div>
    )
}
export default CompanyRegister;