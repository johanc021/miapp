import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './Componentes/Main/Main';
import Navegacion from './Componentes/Navegacion/Navegacion';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navegacion/>
        <Main/>
      </header>
    </div>
  );
}

export default App;
