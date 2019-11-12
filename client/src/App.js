import React from "react";
import "./App.scss";
import Axios from "axios";
import Navbar from "./NavBar";
import CardList from "./CardList";

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    Axios.get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }
  render() {
    return (
      <section className="App">
        <Navbar />
        <header>
          <h1>Women's World Cup</h1>
          <CardList players={this.state.data} />
        </header>
      </section>
    );
  }
}
export default App;
