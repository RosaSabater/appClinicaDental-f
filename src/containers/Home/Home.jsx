import React from 'react'
import axios from 'axios'
import { Card, Col, Carousel, Modal, Button, Input, notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './Home.scss';




const Home = ({ showModalRegister, setShowModalRegister, showModalLogin, setShowModalLogin, setUsuario }) => {

    const handleSubmitLogin = async (event) => {


        try {
            event.preventDefault(); // para evitar refrescar la página
            const body = {

                email: event.target.email.value,
                password: event.target.password.value

            };

            let respuesta = await axios.post(`${process.env.REACT_APP_APIURL}/areaclientes/login`, body);

            let usuario = respuesta.data
            localStorage.setItem("usuario", JSON.stringify(usuario));

            notification.success({ message: '¡Bienvenido!', description: 'Has iniciado sesión con éxito' });

            setUsuario(usuario)
            setShowModalLogin(false)

        } catch (error) {
            console.log(error.response.data.message);
            notification.error({ message: 'Ha ocurrido un error', description: error.response.data.message });
        }
    };

    const handleSubmitRegister = async (event) => {

        try {
            event.preventDefault(); // para evitar refrescar la página

            const body = {

                nombre: event.target.nombre.value,
                apellidos: event.target.apellidos.value,
                telefono: event.target.telefono.value,
                email: event.target.email.value,
                password: event.target.password.value

            };

            await axios.post(`${process.env.REACT_APP_APIURL}/registro/`, body);

            notification.success({ message: 'Usuario registrado', description: 'Usuario registrado con éxito' });

            setShowModalRegister(false)

        } catch (error) {
            console.log(error.response.data.message);
            let values = Object.values(error.response.data)
            notification.error({ message: 'Ha ocurrido un error', description: values.join(", ") });
        }

    }

    return (
        <>

            <Carousel autoplay>
                <div className="cajafotos">
                    <img alt="foto1" src="images/dentist1.jpg" className="foto"></img>
                </div>
                <div className="cajafotos">
                    <img alt="foto2" src="images/dentist2.jpg" className="foto"></img>
                </div>
                <div className="cajafotos">
                    <img alt="foto3" src="images/dentist3.jpg" className="foto"></img>
                </div>
                <div className="cajafotos">
                    <img alt="foto4" src="images/dentist4.jpg" className="foto"></img>
                </div>
            </Carousel>


            <div className="site-card-wrapper">
                <Col span={5}>
                    <Card className="card" title="Tratamientos" bordered={false}>
                        Tratamientos
                            </Card>
                </Col>

                <Col span={5}>
                    <Card className="card" title="Ortodoncias" bordered={false}>
                        Ortodoncias
                            </Card>
                </Col>

                <Col span={5}>
                    <Card className="card" title="Nuestros profesionales" bordered={false}>
                        Nuestros profesionales
                            </Card>
                </Col>
            </div>

            {/* esto es un modal */}

            <Modal className="modal-form"
                title="Inicia sesión"
                visible={showModalLogin}
                onCancel={() => { setShowModalLogin(false) }}
                footer={null}

            >
                <form className="login-form" onSubmit={handleSubmitLogin}>
                    <Input type="email" name="email" size="large" required placeholder="Email" prefix={<UserOutlined />} />
                    <Input.Password size="large" name="password" required placeholder="Contraseña" />
                    <Button type="primary" htmlType="submit">Iniciar Sesión</Button>
                </form>
            </Modal>


            {/* esto es otro modal */}

            <Modal className="modal-form"
                title="Registrate"
                visible={showModalRegister}
                onCancel={() => { setShowModalRegister(false) }}
                footer={null}
            >
                <form className="registro-form" onSubmit={handleSubmitRegister}>

                    <Input type="nombre" name="nombre" required placeholder="Introduce tu nombre" />
                    <Input type="apellidos" name="apellidos" required placeholder="Introduce tus apellidos" />
                    <Input type="telefono" name="telefono" required placeholder="Introduce tu telefono" />
                    <Input type="email" name="email" required placeholder="Introduce tu email" />
                    <Input type="password" name="password" required placeholder="Introduce tu contraseña" />

                    <Button type="primary" htmlType="submit">Registrarse</Button>

                </form>
            </Modal>
        </>
    )

};





export default Home;