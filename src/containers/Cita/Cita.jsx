import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, notification } from 'antd';
import './Cita.scss';

const Cita = ({ usuario }) => {

    const [citas, setCitas] = useState([]);

    useEffect(() => {

        const fnc = async () => {

            try {
                const header = {
                    headers: { Authorization: usuario.token }
                };

                let respuesta = await axios.get(`http://localhost:3001/areaclientes/citas/${usuario._id}`, header);

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

            await axios.put(`http://localhost:3001/areaclientes/cancelarcita/${citaId}`, null, header);

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

    }


    return (
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
                        style={{ width: 300 }}
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
    );

};

export default Cita;