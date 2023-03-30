import { Router } from "express";
//import isAuthorized from "../../middlewares/auth.js";
//import { authenticate } from "../../middlewares/auth.js";
import userController from "../../controllers/user/userController.js";

const router = Router();
//Ruta para ver todos los usuarios
router.get("/", (req, res) => {
    userController.getAll(req,res);
    }
);
//Ruta para ver un usuario con un id específico
router.get("/user/:id", (req, res) => {
    userController.getById(req,res);
    }
);
//Ruta para crear un nuevo usuario
router.post("/", isAuthorized, (req,res)=> {
    userController.create(req,res);
    }
);
//Ruta para modificar un usuario con id específico
router.put("/user/:id", isAuthorized, (req,res) =>{
    userController.update(req,res);
    }
);
//Para borrar un usuario con id específico
router.delete("/user/:id", isAuthorized, (req,res) => {
    userController.deletes(req,res);
    }
);
//Ruta para obtener un usuario desde el login
router.get("/login", (req, res) => {
    userController.loginForm(req,res);
});

router.post("/login", authenticate,(req, res) => {
    userController.login(req,res);
    //res.send("Eliminar un equipo con id "+req.params.id);
});

export default router;