/* Importamos mongoose en models user */

//import bcrypt from "bcrypt";
import mongoose from "mongoose";
// Plantilla de modelo usuario, igual que el define de Player
//No tenemos que crear el id, nos lo hace directamente MongoDB Compass

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "user"]
    }
});
// add verifyPassword method to userSchema
/*userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};*/
//Nos pone en marcha el modelo y lugo lo exportamos
const User = mongoose.model("User", userSchema);

export default User;