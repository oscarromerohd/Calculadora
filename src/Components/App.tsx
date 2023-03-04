import Display from "./Display";
import { Component } from "react";
import PanelDeBotones from "./PanelDeBotones";
import operaciones from "../logic/Operaciones";
import "./App.css"



class App extends Component {
  state = {
    total: null,
    siguiente: null,
    operador: null,
  }

  handleClick = (nombreDeBoton: any) => this.setState(operaciones(this.state, nombreDeBoton))


  render() {
    return (
      <div className="component-app">
        <Display value = {this.state.siguiente || this.state.total || "0" } />
        <PanelDeBotones clickHandle={this.handleClick} />
      </div>
    );

  }
}

export default App;
