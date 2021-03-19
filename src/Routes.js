import React from 'react';
import{ Route, Switch } from 'react-router-dom';

/////////////////////////////////////////////////////////////////////////////////
import catalogo from './components/catalogo';
import Nosotros from './components/nosotros';
import inicio from './components/inicio';

//////////////////////////////////////////////
const Routes = () => (
	<Switch>

		<Route exact path="/catalogo" component={catalogo} />
		<Route exact path="/nosotros" component={Nosotros} />
		<Route exact path="/" component={inicio} />

	</Switch>
);
export default Routes;