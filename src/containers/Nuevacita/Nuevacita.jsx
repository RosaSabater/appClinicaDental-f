// import React from 'react';
// import axios from 'axios'
// import './Nuevacita.scss';
// import { DatePicker, Input, Button, notification, Modal } from 'antd';

// const Nuevacita = ({ history, usuario, showModalCita, setShowModalCita }) => {

//     const handleSubmitCita = async (event) => {

//         try {
//             // event.preventDefault(); 

//             // const header = {
//             //     headers: { Authorization: usuario.token }
//             // };

//             const cita = {

//                 fecha: event.target.fecha.value,
//                 usuarioId: event.target.usuario_id.value,
//                 motivo: event.target.motivo.value

//             };

//             await axios.post('http://localhost:3001/areaclientes/nuevacita', cita);

//             setShowModalCita(false)

//         } catch (error) {
//             console.log(error);
//             notification.error({ message: 'Error al pedir una cita', description: 'Intentenlo de nuevo más tarde.' });
//         }

//     };

//     return (

//         <Modal className="modal-form"
//             title="Nueva cita"
//             visible={showModalCita}
//             onCancel={() => { setShowModalCita(false) }}
//             footer={null}
//         >
//             <form className="nuevacita-form" onSubmit={handleSubmit}>

//                 <DatePicker showTime type="fecha" name="fecha" style={{ width: '100%' }} />
//                 <Input type="motivo" name="motivo" placeholder="Cuéntanos el motivo de tu cita" />
//                 <Button type="primary" htmlType="submit">Pedir cita</Button>

//             </form>
//         </Modal>
//     )
// };

// export default Nuevacita;