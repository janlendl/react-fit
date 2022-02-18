import "./About.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from "@fortawesome/free-solid-svg-icons";



export default function About() {
  return (
    <>
      <div className="topWrapper"></div>

      <div className="text-center mb-4 mt-4">
        <h2>About Us</h2>
      </div>
      <div className="container d-flex">
        <div className="row row-cols-1 row-cols-ms-2 g-4 mt-4">
          <div className="col">
            <div className="card .h-100">
              <img src="/back.jpeg" className="card-img-top"></img>
              <div>
                <h5 className="card-title text-center">Riaz</h5>
                <p className="card-text p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ligula tempor, sagittis purus sit amet, iaculis nisl.
                  Integer sed libero vel augue tristique blandit. Praesent pellentesque odio eu massa consectetur, nec ultrices purus bibendum.
                  Duis vehicula lectus leo, vel ultrices justo malesuada quis.</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src="/back.jpeg" className="card-img-top"></img>
              <div>
                <h5 className="card-title text-center">Lendl</h5>
                <p className="card-text p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ligula tempor, sagittis purus sit amet, iaculis nisl.
                  Integer sed libero vel augue tristique blandit. Praesent pellentesque odio eu massa consectetur, nec ultrices purus bibendum.
                  Duis vehicula lectus leo, vel ultrices justo malesuada quis.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="/back.jpeg" className="card-img-top"></img>
              <div>
                <h5 className="card-title text-center">Gabriela</h5>
                <p className="card-text p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ligula tempor, sagittis purus sit amet, iaculis nisl.
                  Integer sed libero vel augue tristique blandit. Praesent pellentesque odio eu massa consectetur, nec ultrices purus bibendum.
                  Duis vehicula lectus leo, vel ultrices justo malesuada quis.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="/back.jpeg" className="card-img-top"></img>
              <div>
                <h5 className="card-title text-center">Gareth</h5>
                <p className="card-text p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ligula tempor, sagittis purus sit amet, iaculis nisl.
                  Integer sed libero vel augue tristique blandit. Praesent pellentesque odio eu massa consectetur, nec ultrices purus bibendum.
                  Duis vehicula lectus leo, vel ultrices justo malesuada quis.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
