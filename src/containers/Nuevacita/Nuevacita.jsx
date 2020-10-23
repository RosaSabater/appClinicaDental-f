// import React from 'react';
// import axios from 'axios'
// import './Nuevacita.scss';
// import { DatePicker, Input, Button, notification } from 'antd';

// const Nuevacita = ({history}) => {

//     const handleSubmit = async (event) => {

//         try {
//             event.preventDefault(); 
//             const cita = {

//                 fecha: event.target.fecha.value,
//                 usuarioId: event.target.usuario_id.value,
//                 motivo: event.target.motivo.value

//             };

//             await axios.post('http://localhost:3001/areaclientes/nuevacita', cita);

//             history.push('/');

//         } catch (error) {
//             console.log(error);
//             notification.error({ message: 'Error al pedir una cita', description: 'Intentenlo de nuevo más tarde.' });
//         }

//         return (
//             <form className="nuevacita-form" onSubmit={handleSubmit}>

//                 <DatePicker type="fecha" name="fecha" style={{ width: '100%' }} />
//                 <Input type="motivo" name="motivo" placeholder="Cuéntanos el motivo de tu cita" />
//                 <Button type="primary" htmlType="submit">Pedir cita</Button>

//             </form>
//         )
//     }
// }

// export default Nuevacita;