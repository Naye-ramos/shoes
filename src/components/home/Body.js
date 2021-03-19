import React from 'react';

class Body extends React.Component {

  render() {
//todo lo que lleva el cuerpo, lo pueden editar aqui
    return (

        <div className="container body">

            <div className="row">

                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" src="https://assetspwa.liverpool.com.mx/assets/digital/landing/zapatos/img/zapatos-sneakers-ella-agosto.jpg" preserveAspectRatio="xMidYMid slice" focusable="" role="img" aria-label="Placeholder: 140x140">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777" />
                    </svg>

                    <h2>Calzado deportivo</h2>
                    <p>Contamos con una gran variedad de tenis para todo tipo de ocasion, desde tenis deportivos a tenis casuales.</p>
                    <p><a className="btn btn-primary" href="#" rel="noopener noreferrer" role="button">Mostrar </a></p>
                </div>

                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" src="https://http2.mlstatic.com/D_NQ_NP_720176-MLM41601008483_042020-W.jpg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777" />
                        <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                    </svg>
                    <h2>Calzado de mujer</h2>
                    <p>Contamos con una gran variedad de calzado para dama y en este mes contamos con una gran promocion.</p>
                    <p><a className="btn btn-primary" href="#" rel="noopener noreferrer" role="button">Mostrar </a></p>
                </div>

                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" src="https://s3.amazonaws.com/mercado-ideas/wp-content/uploads/sites/2/2018/02/26184830/zapato-brigati-640x456.png" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777" />
                        <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                    </svg>
                    <h2>Calzado de hombre</h2>
                    <p>.Contamos con el calzado perfecto para cada hombre, lo que un caballero necesita </p>
                    <p><a className="btn btn-primary" href="#" rel="noopener noreferrer" role="button">Mostrar</a></p>
                </div>

            </div>

        </div>

    )

  }

}

export default Body;