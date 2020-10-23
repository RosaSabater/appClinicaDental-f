import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'antd';
import './Cita.scss';

const Cita = ({ usuario }) => {

    const [citas, setCitas] = useState([]);

    useEffect(() => {

        const fnc = async () => {

            try {
                const header = {
                    headers: { Authorization: usuario.token }
                };

                let respuesta = await axios.get(`http://localhost:3001/areaclientes/citas/${usuario._id}`, header)

                setCitas(respuesta.data);

            } catch (error) {
                console.log(error);
            }
        }

        fnc();

    }, [usuario]);

    const anularCita = async (citaId) => {

        try {

            let respuesta = await axios.put(`http://localhost:3001/areaclientes/cancelarcita/${citaId}`)
            console.log(respuesta)
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div className="ordenarCitas">
            {citas.map(cita =>

                <Card
                    className="cardCitasGrande"
                    title={`Cita ${cita.estado}`}
                    extra= {new Date(cita.fecha) >= new Date() ? <a onClick={() => anularCita(cita._id)} href="#">Anular cita</a> : null}
                    style={{ width: 300 }}
                >

                    <div className="cardCita"
                        key={cita._id}
                    >
                        <p>{cita.motivo}</p>
                        <p>{new Date(cita.fecha).toLocaleString()}</p>
                    </div>

                </Card>
            )}
        </div>
    );

};

export default Cita;