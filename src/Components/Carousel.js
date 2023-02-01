import React from "react";
function Carousel(){
    return (
        <div className="container">
            <div id="myCarousel" className="carousel slide">
              <ol className="carousel-indicators">
                <li className="item1 active"></li>
                <li className="item2"></li>
                <li className="item3"></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="item active">
                  <img src="download.jpeg" alt="Kmit " width="360" height="245"/>
                </div>
                <div className="item">
                  <img src="download.png" alt="alumni" width="360" height="245"/>
                </div>
                <div className="item">
                  <img src="images.jpeg" alt="alumni logo" width="360" height="245"/>
                </div>
             </div>
              <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
    )
}
export default Carousel;