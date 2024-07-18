import './app/styles/Main.scss'
import './app/styles/resource/smallScreen.scss'
import './app/styles/resource/Tabdevices.scss'
import './app/styles/resource/desktop.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './app/Layout';
import AppRoutes from './Routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SigninPage from './app/pages/SigninPage'
import SignupPage from './app/pages/SignupPage'
import { useSelector } from 'react-redux';

function App() {

  const isLoggedin = useSelector(state => state.LoginInfo)
  console.log(isLoggedin)
  return (
    <>
      {
        isLoggedin ? (
          <Layout>
            <AppRoutes />
          </Layout>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SigninPage />} />
              <Route path='/signup' element={<SignupPage />} />
            </Routes>
          </BrowserRouter>

        )
      }
    </>
  );
}


export default App;
