import logo from './img/portada.png';
import iconEmail from './img/icon-email.png';
import iconWhatsapp from './img/icon-whatsapp.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <footer className="App-footer">
        <img src={iconEmail} /> castrocastillo@gmail.com
        <img src={iconWhatsapp} /> +506 8820 8269
      </footer>
    </div>
  );
}

export default App;
