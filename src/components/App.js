import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import CreateFichePatient from "./CreateFichePatient";
import FichePatient from "./FichePatient";
import Footer from "./Footer";
import Consultation from "./Consultations";
class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <SearchBar />
        <Consultation
          day="22"
          month="SEP"
          year="2018"
          Hour="09:30"
          description="lorem upsem"
          patient="Ali Ben Amor"
        />
        <FichePatient nom="Ali Ben Amor" />
        <Footer />
      </div>
    );
  }
}

export default App;
