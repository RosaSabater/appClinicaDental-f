import React, { useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import 'antd/dist/antd.css';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Cita from './containers/Cita/Cita';
import Logout from './containers/Logout/Logout';

function App() {

	const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("usuario")));
	const [showModalLogin, setShowModalLogin] = useState(false);
	const [showModalRegister, setShowModalRegister] = useState(false);
	const [showModalCita, setShowModalCita] = useState(false);

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

				<Route path='/areaclientes/logout' exact>
					<Logout setUsuario={setUsuario}
					/>
				</Route>

				<Route path='/areaclientes/citas' exact>
					<Cita 
						usuario={usuario}
						showModalCita={showModalCita}
						setShowModalCita={setShowModalCita}
					/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;