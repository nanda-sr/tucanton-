import React, {Component} from "react";
import { Link } from 'react-router-dom'


class HomePage extends Component{
  render(){
    return(
      <div>
        <a href="/"><img src="http://angelventures.vc/Content/images/portfolio/tucanton_logo_white.png" className="mx-auto d-block "/></a>
        <div className="container">
          <div className="row">
            <div className="col-md-4 offset-md-5">
              <a href="/clientes"><button type="button" className="btn btn-warning aux text-white">Clientes</button></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;