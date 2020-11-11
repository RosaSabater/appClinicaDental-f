
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

