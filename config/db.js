//Paquete npm "mysql2" para establecer una conexión a la base de datos MySQL desde una aplicación Node.js. Instalación librería.
//Se importa el paquete "mysql2".
//Se define una constante "connection" = objeto de conexión a base de datos MySQL, creado con las siguientes variables:
//HOST: dirección del servidor de la base de datos MySQL.
//PORT: el número de puerto que se utiliza para la conexión a la base de datos MySQL.
//USER: el nombre de usuario utilizado para la autenticación en la base de datos MySQL.
//Password: la contraseña utilizada para la autenticación en la base de datos MySQL.
//Database: el nombre de la base de datos MySQL a la que se quiere conectar.
//Se exporta el objeto de conexión para que pueda ser utilizado en otros módulos de la aplicación.

import mysql from"mysql2";

const connection =mysql.createConnection({
    host:"localhost",
    port: 3308, //meter el puerto adecuado
    user:"root",
    password:"mi-contraseña", //meter la contraseña adecuada
    database:"petanca", //nombre de la base de datos como está denominada en mysql
});

export default connection;

