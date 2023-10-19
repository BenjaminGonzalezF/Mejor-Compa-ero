import e from 'cors';
import { guardarUsuario, buscarUsuario, mostrarUsuarios} from '../controllers/usersController.js';


export async function ingreso(req, res) {
    const { correo, clave } = req.body;
    const user = {
        correo: correo,
        clave: clave
    };

    if (correo == "" || clave == "") {
        console.log("Datos no ingresados")
        return res.status(401).json({
            massage: "Datos no ingresados"
        });
    }
    const result = await buscarUsuario(user);
    if (result) {
      return res.status(200).json({
        message: "Usuario encontrado"
      });
    } else {
      return res.status(417).json({
        message: "Usuario no encontrado"
      });
    } 
}

export async function registrarUsuario(req, res) {
    const { nombre, apellido, email, contrasena } = req.body;
    if (nombre == null || apellido == null || email == null || contrasena == null) {
        return res.status(401).json({
            massage: "Datos faltantes"
        });
    }
    const user = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        contrasena: contrasena
    };
    const result = await guardarUsuario(user);
    res.status(200).json({
        massage: "Datos Enviados a la BD"
    });
}
    export async function obtenerUsuarios(req, res) {
        const result = await mostrarUsuarios();
        if(result){
            res.status(200).json({
                result
            })
        }
        return res.status(417).json({
            massage: "Error al soliciatar los datos"
        });
    }




