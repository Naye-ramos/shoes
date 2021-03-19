import React from 'react';

class Slider extends React.Component {

  render() {

  	return (

  		<div id="slider" className="carousel slide" data-ride="carousel">
		    <ol className="carousel-indicators">
		        <li data-target="#slider" data-slide-to="0" className="active"></li>
		        <li data-target="#slider" data-slide-to="1"></li>
		        <li data-target="#slider" data-slide-to="2"></li>
		    </ol>
		    <div className="carousel-inner">
		        <div className="carousel-item active">
		            <img className="img-fluid" src="https://media.timeout.com/images/105046408/image.jpg" />
		            <div className="elementos">
		            </div>
		        </div>
		        <div className="carousel-item">
		            <img className="img-fluid" src="https://media.timeout.com/images/105046408/image.jpg" />
		            <div className="elementos">
		            </div>
		        </div>
		        <div className="carousel-item">
		            <img className="img-fluid" src="https://s3.amazonaws.com/gex.lifeandstyle/uploads/image/file/5380/tienda-02.jpg" />
		            <div className="elementos">
		                
		            </div>
		        </div>
		    </div>
		    <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
		        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		        <span className="sr-only">Previous</span>
		    </a>
		    <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
		        <span className="carousel-control-next-icon" aria-hidden="true"></span>
		        <span className="sr-only">Next</span>
		    </a>
		</div>

  	)
    
  }

}

export default Slider;