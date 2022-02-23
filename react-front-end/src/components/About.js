import "./About.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceLaugh, faFaceGrin, faFaceSmile } from "@fortawesome/free-solid-svg-icons";



export default function About() {
  return (
    <>
      <div className="topWrapper"></div>

      <div className="text-center mb-4 mt-4">
        <h2>About Us</h2>
      </div>
      <div className="container d-flex">
        <div className="row row-cols-1 row-cols-ms-3 g-4 mt-4">
          <div className="col">
          <div className="card align-items-center pt-4">
            <FontAwesomeIcon icon={faFaceSmile} className="iconSize card-img-top about_iconColor"/>
              <div>
                <h5 className="card-title text-center pt-4">Lendl</h5>
                <p className="card-text p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ligula tempor, sagittis purus sit amet, iaculis nisl.
                  Integer sed libero vel augue tristique blandit. Praesent pellentesque odio eu massa consectetur, nec ultrices purus bibendum.
                  Duis vehicula lectus leo, vel ultrices justo malesuada quis.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card align-items-center pt-4">
            <FontAwesomeIcon icon={faFaceGrin} className="iconSize card-img-top about_iconColor"/>
              <div>
                <h5 className="card-title text-center pt-4">Riaz</h5>
                <p className="card-text p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ligula tempor, sagittis purus sit amet, iaculis nisl.
                  Integer sed libero vel augue tristique blandit. Praesent pellentesque odio eu massa consectetur, nec ultrices purus bibendum.
                  Duis vehicula lectus leo, vel ultrices justo malesuada quis.</p>
              </div>
            </div>
          </div>
          <div className="col">
          <div className="card align-items-center pt-4">
            {/* <img src="/IMG_8599" className="card-img-top"></img> */}
            <FontAwesomeIcon icon={faFaceLaugh} className="iconSize card-img-top about_iconColor"/>
              <div>
                <h5 className="card-title text-center pt-4">Gabriela</h5>
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
