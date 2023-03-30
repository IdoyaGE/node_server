/*Utilizamos la biblioteca Mongoose de Node.js para conectarnos a una base de datos MongoDB.
MongoDB connection with Mongoose, importamos la biblioteca Mongoose
*/
import mongoose from 'mongoose';
//Variable constante que contiene la url de la base de datos MongoDB
const MONGODB_URI = 'mongodb://localhost:27017/petanca';
//conexión
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//esto se utiliza para evitar advertencias en consola por cambios en MongoDB
})
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch((error) => console.error('Error al conectarse a MongoDB: ', error));

export default mongoose;
//exportamos para poder utilizar la base de datos en otros módulos de node.js