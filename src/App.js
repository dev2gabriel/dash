import { Component } from 'react';
import './App.css';
import AppRoutes from './AppRoutes'

class App extends Component {

render(){
  document.title = "Grupo Stra - Communication"

  return(
    <div className="App">
        <AppRoutes />
    </div>
  )
}

}

export default App;
