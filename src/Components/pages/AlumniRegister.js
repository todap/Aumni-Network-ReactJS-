import React from "react";
function AlumniRegister(){
    return(
        <div>
            <div className="row container-fluid">
  <h2>Register.</h2>
  <br /><br />
  <div className="row">
  <div className="col-md-4 col-xs-3">
    <form>
      <div className="form-group">
        <label htmlFor="formFileDisabled" className="form-label">Upload Image</label>
        <input className="form-control" type="file" id="formFileDisabled" disabled />
      </div><br />
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
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
      <div className="col-md-4 col-xs-3">
    <form>
      <label htmlFor="birthday"><b>Date of Birth</b></label><br />
      <input type="date" id="birthday" name="birthday" />
      <div className="form-group">
        <label htmlFor="examplPhoneNumber">Phone Number</label>
        <input type="phone number" className="form-control" id="examplePhoneNumber" placeholder="Enter Phone Number" />
      </div><br />
      <div className="form-group">
        <label htmlFor="exampleInputCompany">Job Role</label>
        <input type="jobrole" className="form-control" id="exampleInputCompany" placeholder="Enter Job Role" />
      </div><br />
      <div className="form-group">
        <label htmlFor="exampleInputCompany">Company</label>
        <input type="company" className="form-control" id="exampleInputCompany" placeholder="Enter Company" />
      </div><br />
      
    </form>
    <div className="text-center">
      <a href="" className="btn btn-success " style={{width: '20%'}}>
        Submit</a>
    </div>
    </div>
  <div className="col-md-4 col-xs-3">
    <form>
      <div className="form-group">
        <label htmlFor="formFileDisabled" className="form-label">Upload Resume</label>
        <input className="form-control" type="file" id="formFileDisabled" disabled />
      </div><br />
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Year of Graduation</label>
        <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Year of Graduation" />
      </div><br />
      <div className="form-group">
        <label htmlFor="examplPhoneNumber">Degree</label>
        <input type="phone number" className="form-control" id="examplePhoneNumber" placeholder="Degree" />
      </div><br />
      <div className="form-group">
              <label >College</label> <br/> 
              <select>
                <option value="">Select</option>
                <option value="kmit">Keshav Memorial Insitute of Technology</option>
                <option value="ngit">Neil Gogte Insitute of Technology</option>
                <option value="kmec">Keshav Memorial Engineering College</option>
              </select>
            </div>
    </form><br />
    
  </div>
</div>
</div>
        </div>
    )
}
export default AlumniRegister;