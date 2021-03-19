import React from 'react';
import Menu from '../menu/Menu';
import Slider from './slider/Slider';
import Footer from '../footer/Footer';
import Body from './Body';


class Home extends React.Component {

	render() {

		return(

			<>

			<Menu />

			<main role="main" className="flex-shrink-0 mt-5">

		        <div className="container">
		  	  		
		  	  		<Slider />
					<Body />
					
		  	  		
		  	  		<hr className="featurette-divider" />

		        </div>

	  		</main>

	  		<Footer />

	  		</>

		)

	}

}

export default Home;