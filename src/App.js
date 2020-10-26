import './App.scss';
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__sidenav">
          <Sidebar />
        </div>
        <div className="header__introduction">
          Introduction
        </div>
      </header>
    </div>
  );
}

export default App;
