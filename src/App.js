import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import 'antd/dist/antd.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Areaclientes from './components/Areaclientes/Areaclientes';
import Baja from './containers/Baja/Baja';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Logout from './containers/Logout/Logout';
import Registro from './containers/Registro/Registro';
import Nuevacita from './containers/Nuevacita/Nuevacita';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/registro' component={Registro} exact />
        <Route path='/areaclientes' component={Areaclientes} exact />

        <Route path='/login' component={Login} exact />
        <Route path='/areaclientes/logout' component={Logout} exact />
        <Route path='/areaclientes/baja' component={Baja} exact />
        <Route path='/areaclientes/nuevacita' component={Nuevacita} exact />
        {/* <Route path='/areaclientes/citas/:id' component={Citas} exact />
        <Route path='/areaclientes/cancelarcita/:id' component={Cancelarcita} exact /> */}
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default App;