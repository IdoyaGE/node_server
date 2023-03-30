//Creamos un servidor web básico utilizando el framework Express en Node.js
//Importamos el módulo "express" el router de la aplicación desde el archivo "router.js".
//importamos mongoose para hacer una conexión a MongoDB
import mongoose from "./config/mongoose.js";
import express from "express";
import routerAPI from "./routes/api/router.js"
import routerView from "./routes/views/router.js"
//Creamos la variable constante aplicación

const app = express();

//configuramos la aplicación para usar el middleware proporcionado por Express, que permite la lectura y escritura de datos JSON y URL-encoded.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug'); //Es set, no use. se establece el motor de vistas de la aplicación "pug", permitiendo renderizar vistas.

//middleware router proporcionado por Express para enrutar todas las solicitudes entrantes en la raíz del servidor (es decir, "/") a través del router importado desde el archivo "router.js".

app.use("/api/", routerAPI); //rutas http 

//se inicia el servidor Express en el puerto 3000 y se muestra un mensaje en la consola, indicando que el servidor está funcionando correctamente.
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});












