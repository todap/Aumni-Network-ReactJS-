import React from "react";
function Login(){
    return(
        <div>
            <div>
  <div className="container-fluid">
    <h1>Welcome to Alumni Network,<br />please sign in to continue.</h1>
  </div>
  <div className="container" style={{width: '65%', marginRight: '95%', justifyContent: 'center', position: 'absolute', marginTop: '10%'}}>
    <div id="myCarousel" className="carousel slide">
      <ol className="carousel-indicators">
        <li className="item1 active" />
        <li className="item2" />
        <li className="item3" />
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img src="download.jpeg" alt="Kmit " width={460} height="345px" />
        </div>
        <div className="item">
          <img src="download.png" alt="alumni" width={260} height={145} />
        </div>
        <div className="item">
          <img src="images.jpeg" alt="alumni logo" width={260} height={145} />
        </div>
      </div>
      <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
  <div className="box">
    <div className="container-fluid">
      <h1 className="signinheading" style={{textAlign: 'center'}}><strong>Sign in.</strong></h1>
      <label htmlFor="email" />
      <input type="text" name="email" id="email" placeholder="Enter Username/Email." />
      <label htmlFor="pass" />
      <input type="password" name="pass" id="pass" placeholder="Enter Password." /><br />
      <div className="signindiv">
        <button className="button signinbtn">Sign in.</button><br />
      </div>
      <br />
      <div className="s1" style={{marginBottom: '10%'}}>
        <p><a href="#">New User?</a>  |  <a href="#">Forgot Password?</a></p>
      </div>
      <br />
      <br />
      <hr style={{width: '50%', margin: 'auto'}} />
      <div className="googlediv" style={{marginTop: '20%'}}>
        <button className="button google"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB" />Sign up with Google</button>
      </div>
      <div className="googlediv" style={{marginTop: '10px'}}>
        <button className="button google"><img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" />Sign up with LinkedIn</button>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}
export default Login;