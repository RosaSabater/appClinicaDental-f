
# ¿Qué es? 🌌

Es una aplicación web para una clínica dental que usa:

- Frontend: 🧧 ReactJS
- Backend: 🔸 NodeJS + Express + Mongoose + JWT + Validame(Regex) + BcryptJS + REST Client
- DB: 🍃 MongoDB 



<br>

# How to run 🚀

- Download [backend repo](https://github.com/RosaSabater/appClinicaDental-b).
- Download [frontend repo](https://github.com/RosaSabater/appClinicaDental-f).
- On the backend run:
	- `nodemon app.js`
- On the frontend run:
	- `npm start`


<br>

# Deploy ☁

- El backend está deployado en [Heroku](https://appclinicadental-b.herokuapp.com/).
- El frontend está deployado en [Netlify](https://clinicadental.netlify.app).

<br>



# Backend 🔙

## **Endpoints** 📃

**USUARIO** 👥

<br>

- **POST** /registro/
```json
{
    "nombre": "Test",
    "apellidos": "Test",
    "telefono": "999999999",
    "email": "test@gmail.com",
    "password": "12345678" 
}
```

<br>


- **POST** /areaclientes/login/
```json
{
    "email": "ejemplo@gmail.com",
    "password": "1234"
}
```
```
Aquí se crea el token que durará 1 día.
```

<br>

- **GET** /areaclientes/logout/
```json
Authorization: {{token}}
```

<br>

- **DELETE** /areaclientes/baja/
```json
Authorization: {{token}}
```

<br>

**ADMIN** 🤴

<br>

- **GET** /admin/mostrarUsuarios/

<br>

- **GET** /admin/mostrarCitas/

<br>

- **GET** /admin/:id/
```
Buscamos a un usuario específico con su id.
```

<br>


**CITAS** 🕐


<br>

- **POST** /areaclientes/nuevacita/
```json
Authorization: {{token}}
{
    "fecha": "2020-10-19 16:29",
    "usuarioId": "5f8c457392d0260017eb2184",
    "motivo": "Cita para empaste"
}
```

<br>

- **POST** /areaclientes/citas/:id/
```json
Authorization: {{token}}
```

<br>

- **PUT** /areaclientes/cancelarcita/:id/
```json
Authorization: {{token}}
```
```
Buscamos con la id de la cita para cancelarla.
```

<br>

# Frontend 🖼

- Homepage
![Homepage](https://gyazo.com/cc3b60247a536f52cac6916d8bd27427.gif)

- Registro
![Registro](https://gyazo.com/275389a6855012557066d6f6ae46825f.png)

- Iniciar sesión
![Iniciar sesión](https://gyazo.com/59960c92eeba8f4f10892f8ffaad77f6.png)

- Area clientes
![Area clientes](https://gyazo.com/9472b0613ffa689daeec162b43a231d5.png)

- Pedir cita
![Pedir cita](https://gyazo.com/331462c53f81d897640c0faf75d41265.png)

<br>

# Sesión como administrador

- Homepage administador
![Sesión iniciada como admin](https://gyazo.com/a6e313754d4d6ea10c4f6d0a88394797.png)

- Panel clientes
![Panel clientes](https://gyazo.com/62bfd6a1749e58cb3ce3e81490d7aeb5.png)

- Panel citas
![Panel citas](https://gyazo.com/4abb91d9870e770e181fb2d15eab6761.png)
