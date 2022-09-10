import Header from './Header';
import MenuPhoto from './MenuPhoto';
import House from './House';
import Gallery from './Gallery';
import Booking from './Booking';
import Footer from './Footer';
import styles from './styles/index.scss';

function App() {
  return (
    <main class={`container-xxl`}>
      <Header />
      <MenuPhoto />
      <House />
      <Gallery />
      <Booking />
      <a name="map" />
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11748.11013425871!2d-85.85039130191053!3d10.342430973357816!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe292f51bb8d60599!2sTortugo%20y%20Pollo!5e0!3m2!1ses!2scr!4v1645317494257!5m2!1ses!2scr" 
        width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy">
      </iframe>
      <Footer />
    </main>
  );
}

export default App;