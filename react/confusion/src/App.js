import React, {Component} from "react";
import Main from "./components/MainComponent";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"; //使 store available 对 所有components
import {ConfigureStore} from "./redux/configureStore";

const store = ConfigureStore();

class App extends Component {
  
  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
            <div>
              <Main/>
            </div>
          </BrowserRouter>
      </Provider>
      
    )
  }
}

export default App;
