import './app/styles/Main.scss'
import './app/styles/resource/smallScreen.scss'
import './app/styles/resource/Tabdevices.scss'
import './app/styles/resource/desktop.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './app/Layout';
import HomePage from './app/pages/HomePage';
import Aboutus from './app/pages/Aboutus';
import Contactus from './app/pages/Contactus';
import Details from './app/pages/Details';
import Cart from './app/pages/Cart';


function App() {
  return (
    <Layout>
      <HomePage/>
      {/* <Aboutus/> */}
      {/* <Contactus/> */}
      {/* <Details/> */}
      {/* <Cart/> */}
    </Layout>
  );
}

export default App;
