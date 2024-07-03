import './app/styles/Main.scss'
import './app/styles/resource/smallScreen.scss'
import './app/styles/resource/Tabdevices.scss'
import './app/styles/resource/desktop.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './app/Layout';
import SigninPage from './app/pages/SigninPage';
import SignupPage from './app/pages/SignupPage';
import Adv from './app/components/sections/Adv';
import ProductsCartSlider from './app/components/sections/ProductsCartSlider';
import NewProducts from './app/components/sections/NewProducts';

function App() {
  return (
    <Layout>
      <Adv />
      <ProductsCartSlider/>
      <NewProducts/>
    </Layout>
    // < SignupPage/>
    // <SigninPage />
    // <Signin/>
  );
}

export default App;
