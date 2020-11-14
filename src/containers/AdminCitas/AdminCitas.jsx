import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'antd';
import './AdminCitas.scss';

const AdminCitas = ({ usuario }) => {

    const [citas, setCitas] = useState([]);

    useEffect(() => {

        const fnc = async () => {

            try {
                const header = {
                    headers: { Authorization: usuario.token }
                };

                let respuesta = await axios.get(`${process.env.REACT_APP_APIURL}/admin/mostrarCitas`, header);

                setCitas(respuesta.data);

            } catch (error) {
                console.log(error);
            }
        }

        fnc();

    }, [usuario]);

   
    return (
        <>
            <div className="ordenarCitas">
                {citas.map(cita => {

                    return (
                        <Card
                            className="cardCitasGrande"
                            title={`Cita ${cita.estado}`}
                            style={{ width: 300, padding: '1em' }}
                        >

                            <div className="cardCita"
                                key={cita._id}
                            >
                                <p>{cita.motivo}</p>

                                <p>Nombre: {cita.datosUsuario[0]?.nombre}</p>
                                <p>Apellidos: {cita.datosUsuario[0]?.apellidos}</p>
                                <p>Teléfono: {cita.datosUsuario[0]?.telefono}</p> 
                                <p>{new Date(cita.fecha).toLocaleString()}</p>
                            </div>

                        </Card>
                    )
                }
                )}
            </div>
        </>
    );

};

export default AdminCitas;