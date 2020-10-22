import React, { useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import 'antd/dist/antd.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Areaclientes from './components/Areaclientes/Areaclientes';
import Baja from './containers/Baja/Baja';
import Home from './containers/Home/Home';
import Logout from './containers/Logout/Logout';
import Nuevacita from './containers/Nuevacita/Nuevacita';

function App() {

	const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("usuario")));
	const [showModalLogin, setShowModalLogin] = useState(false);
	const [showModalRegister, setShowModalRegister] = useState(false);

	return (
		<BrowserRouter>
			<Header 
			usuario={usuario} 
			setShowModalLogin={setShowModalLogin} 
			setShowModalRegister={setShowModalRegister} 
			/>

			<Switch>
				<Route path='/' exact>
					<Home
						setUsuario={setUsuario}
						showModalLogin={showModalLogin}
						setShowModalLogin={setShowModalLogin}
						showModalRegister={showModalRegister}
						setShowModalRegister={setShowModalRegister}

					/>
				</Route>

				{/* <Route path='/registro' component={Registro} exact /> */}
				<Route path='/areaclientes' component={Areaclientes} exact />

				<Route path='/areaclientes/logout' exact>
					<Logout setUsuario={setUsuario}
					/>
				</Route>

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