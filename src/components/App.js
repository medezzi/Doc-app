import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import FichePatient from "./FichePatient";
import Footer from "./Footer";
class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <SearchBar />
        <FichePatient patient="Ali" />
        <Footer />
      </div>
    );
  }
}

export default App;
