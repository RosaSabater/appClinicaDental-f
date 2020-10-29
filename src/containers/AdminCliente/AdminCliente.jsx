import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'antd';
import './AdminCliente.scss';


const AdminCliente = ({ usuario }) => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {

        const fnc = async () => {

            try {
                const header = {
                    headers: { Authorization: usuario.token }
                };

                let respuesta = await axios.get(`${process.env.REACT_APP_APIURL}/admin/mostrarUsuarios`, header);

                setUsuarios(respuesta.data);

            } catch (error) {
                console.log(error);
            }
        }

        fnc();

    }, [usuario]);

    return (
        <>
            <div className="ordenarClientes">
                {usuarios.map(usuario => {

                    return (
                        <Card
                            className="cardCitasGrande"
                            title={`Cliente ${usuario.nombre}`}
                            style={{ width: 300, padding: '1em' }}
                        >
                            <div>
                                <p>{usuario.nombre}</p>
                                <p>{usuario.apellidos}</p>
                                <p>{usuario.telefono}</p>
                                <p>{usuario.email}</p>

                            </div>

                        </Card>
                    )
                }
                )}
            </div>
        </>
    );

};
export default AdminCliente;