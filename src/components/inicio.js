import React,{ }from 'react';

function Inicio() {

  return (

  <div>
      <h1 >BIENVENIDO A "ShoesTour"</h1>
      <h3>La página más segura de Mexico en venta de tenis</h3>

          	<div id="slider" className="carousel slide" data-ride="carousel">
		    <ol className="carousel-indicators">
		        <li data-target="#slider" data-slide-to="0" className="active"></li>
		        <li data-target="#slider" data-slide-to="1" className="active"></li>
		        <li data-target="#slider" data-slide-to="2" className="active"></li>
		    </ol>
		    <div className="carousel-inner">
		        <div className="carousel-item active">
		            <img className="img-fluid" src="https://i0.wp.com/www.slang.fm/wp-content/uploads/2019/12/air-jordan-dior.jpg?fit=1280%2C720&ssl=1" />
		            <div className="elementos">
		            </div>
		        </div>
		        <div className="carousel-item">
		            <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02W6IghLYjWvnRzKQ2N4hqOXojVrBp3xtxw&usqp=CAU" />
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
    </div>
  );
}


export default Inicio;