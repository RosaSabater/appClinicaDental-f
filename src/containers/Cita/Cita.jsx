import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, notification, Modal, Button, Input, DatePicker } from 'antd';
import './Cita.scss';

const Cita = ({ usuario, showModalCita, setShowModalCita }) => {

    const [citas, setCitas] = useState([]);

    useEffect(() => {

        const fnc = async () => {

            try {
                const header = {
                    headers: { Authorization: usuario.token }
                };

                let respuesta = await axios.get(`${process.env.REACT_APP_APIURL}/areaclientes/citas/${usuario._id}`, header);

                setCitas(respuesta.data);

            } catch (error) {
                console.log(error);
            }
        }

        fnc();

    }, [usuario]);

    const anularCita = async (citaId) => {

        try {

            const header = {
                headers: { Authorization: usuario.token }
            };

            await axios.put(`${process.env.REACT_APP_APIURL}/areaclientes/cancelarcita/${citaId}`, null, header);

            //busco dentro de las citas la que acabo de anular

            let citasActualizadas = citas.map(cita => {
                if (citaId === cita._id) {
                    cita.estado = 'cancelada';
                    return cita;
                } else {
                    return cita
                }
            });

            //cambio el estado para que se re renderice
            setCitas(citasActualizadas);

        } catch (error) {
            console.log(error.response.data.message);
            notification.error({ message: 'Ha ocurrido un error', description: error.response.data.message });
        }


    };

    const handleSubmitCita = async (event) => {

        try {
            event.preventDefault(); 

            const header = {
                headers: { Authorization: usuario.token }
            };

            const cita = {

                fecha: event.target.fecha.value,
                usuarioId: usuario._id,
                motivo: event.target.motivo.value

            };

            let respuesta = await axios.post(`${process.env.REACT_APP_APIURL}/areaclientes/nuevacita`, cita, header);


            let citasClone = [...citas]; // clono citas
            citasClone.push(respuesta.data); // meto la nueva cita al array

            setCitas(citasClone);
            setShowModalCita(false);

        } catch (error) {
            console.log(error);
            notification.error({ message: 'Error al pedir una cita', description: 'Intentenlo de nuevo más tarde.' });
        }

    };

    return (
        <>
            <Button onClick={() => { setShowModalCita(true) }}>Pedir Cita</Button>

            <div className="ordenarCitas">
                {citas.map(cita => {

                    let extra = null;

                    // si la cita está en el futuro y está pendiente se muestra "Anular"
                    if (
                        new Date(cita.fecha) >= new Date() && cita.estado === "pendiente") {
                        extra = <a onClick={() => anularCita(cita._id)} href="#">Anular cita</a>
                    }

                    return (
                        <Card
                            className="cardCitasGrande"
                            title={`Cita ${cita.estado}`}
                            extra={extra}
                            style={{ width: 300, padding: '1em' }}
                        >

                            <div className="cardCita"
                                key={cita._id}
                            >
                                <p>{cita.motivo}</p>
                                <p>{new Date(cita.fecha).toLocaleString()}</p>
                            </div>

                        </Card>
                    )
                }
                )}
            </div>


            <Modal className="modal-form"
                title="Nueva cita"
                visible={showModalCita}
                onCancel={() => { setShowModalCita(false) }}
                footer={null}
            >
                <form className="nuevacita-form" onSubmit={handleSubmitCita}>

                    <DatePicker 
                    showTime 
                    placeholder="Selecciona una fecha" 
                    type="fecha" 
                    name="fecha" 
                    style={{ width: '100%' }} 
                    />

                    <Input type="motivo" name="motivo" placeholder="Cuéntanos el motivo de tu cita" />
                    <Button type="primary" htmlType="submit">Pedir cita</Button>

                </form>
            </Modal>
        </>
    );

};

export default Cita;