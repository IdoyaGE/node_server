//Utilizamos la biblioteca "Sequelize" en una aplicación Node.js para conectarse a una base de datos MySQL y realizar operaciones con la base de datos que hemos creado en Benchwork.
//Importamos la clase "Sequelize" del paquete "sequelize".
//Crea una variable constante "sequelize" para establecer la conexión con la base de datos MySQL, con las siguientes propiedades:
//"petanca": el nombre de la base de datos MySQL a la que se quiere conectar.
//"root": el nombre de usuario utilizado para la autenticación en la base de datos MySQL.
//"mi-contraseña": la contraseña utilizada para la autenticación en la base de datos MySQL.
//host: la dirección del servidor de la base de datos MySQL.
//port: el número de puerto que se utiliza para la conexión a la base de datos MySQL.
//dialect: el dialecto de la base de datos que se está utilizando, en este caso MySQL.
//Se exporta por defecto "sequelize" para que pueda ser utilizada en otros módulos de la aplicación.

import {Sequelize} from "sequelize";

const sequelize =new Sequelize ('petanca', 'root', 'mi-contraseña', {
    host:'localhost',
    port:3308,
    dialect:'mysql'
});

export default sequelize;

