import React, {Component} from "react";


class Client extends Component{
  render(){
    return(
      <div>
        
        <a href="/"><img src="http://angelventures.vc/Content/images/portfolio/tucanton_logo_white.png" className="mx-auto d-block"/></a>
        <div className="container my-5">
          <div className="btn-group">
            <button type="button" className="btn btn-warning dropdown-toggle text-white aux" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Equipos
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">Equipo Uno</a>
              <a className="dropdown-item" href="#">Equipo Dos</a>
              <a className="dropdown-item" href="#">Equipo Tres</a>
            </div>
          </div>
          <div className="btn-group mx-5">
            <button type="button" className="btn btn-warning dropdown-toggle text-white aux" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Usuarios
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#"></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Client;