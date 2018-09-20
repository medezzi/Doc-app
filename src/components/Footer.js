import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer-dark">
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-3 item">
                  <h3>Espace Patient</h3>
                  <ul>
                    <li>
                      <a href="#">Conuslter un Docteur</a>
                    </li>
                    <li>
                      <a href="#">Rendez-vous</a>
                    </li>
                    <li>
                      <a href="#">Ordonnance</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3 item">
                  <h3>Espace Medecin</h3>
                  <ul>
                    <li>
                      <a href="#">Gérer les RVs</a>
                    </li>
                    <li>
                      <a href="#">Gérer votre page</a>
                    </li>
                    <li />
                  </ul>
                </div>
                <div className="col-md-6 item text">
                  <h3>Dr. Taieb ETTOUNSI</h3>
                  <p>
                    la première platforme Web pour les medecins et pour les
                    patients, vous etes medecins dentistes ou bien patient avec
                    dentiste.tn vous pouvez gérer vos rendez-vous, consulter
                    votre medecin.
                  </p>
                </div>
                <div className="col item social">
                  <a href="#">
                    <i className="icon ion-social-facebook" />
                  </a>
                  <a href="#">
                    <i className="icon ion-social-twitter" />
                  </a>
                  <a href="#">
                    <i className="icon ion-social-snapchat" />
                  </a>
                  <a href="#">
                    <i className="icon ion-social-instagram" />
                  </a>
                </div>
              </div>
              <p className="copyright"> © 2018</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;
