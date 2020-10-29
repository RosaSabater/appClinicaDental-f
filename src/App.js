import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AdminCitas from './containers/AdminCitas/AdminCitas';
import AdminCliente from './containers/AdminCliente/AdminCliente';
import Cita from './containers/Cita/Cita';
import Home from './containers/Home/Home';

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
				setUsuario={setUsuario}
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

				<Route path='/areaclientes/citas' exact>
					<Cita
						usuario={usuario}
						showModalCita={showModalCita}
						setShowModalCita={setShowModalCita}
					/>
				</Route>
				<Route path='/admin/mostrarCitas' exact>
					<AdminCitas
						usuario={usuario}
						showModalCita={showModalCita}
						setShowModalCita={setShowModalCita}
					/>
				</Route>
				<Route path='/admin/mostrarUsuarios' exact>
					<AdminCliente
						usuario={usuario}
					/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;