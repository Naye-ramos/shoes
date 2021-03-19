import React from 'react';

class Footer extends React.Component {

  render() {

    return (

        <footer className="container">
            <p className="float-right"><a href="#" rel="noopener noreferrer"></a></p>
            <p>&copy; {(new Date().getFullYear())}ShoesT, Nay. &middot; <a href="#" rel="noopener noreferrer">Política de Privacidad</a> &middot; <a href="#" rel="noopener noreferrer">Términos</a></p>
        </footer>

    )
    
  }

}

export default Footer;