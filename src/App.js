import './app/styles/Main.scss'
import './app/styles/resource/smallScreen.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './app/Layout';
import SigninPage from './app/pages/SigninPage';
import SignupPage from './app/pages/SignupPage';
import Adv from './app/components/Adv';
import ProductsCartSlider from './app/components/ProductsCartSlider';

function App() {
  return (
    <Layout>
      <Adv />
      <ProductsCartSlider/>
    </Layout>
    // < SigninPage/>
    // <SigninPage />
    // <Signin/>
  );
}

export default App;
