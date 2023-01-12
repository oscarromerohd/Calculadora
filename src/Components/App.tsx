import Display from "./Display";
import { Component } from "react";
import PanelDeBotones from "./PanelDeBotones";


class App extends Component {
  state = {
    total: null,
    siguiente: null,
    operador: null,
  }

  render() {
    return (
      <div>
        <Display value={this.state.siguiente || this.state.total || "Motivense" } />
      <PanelDeBotones/>

      </div>
    );
  }
}

export default App;
