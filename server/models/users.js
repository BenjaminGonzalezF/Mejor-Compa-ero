import mongoose from "mongoose";
var Usuario = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        apellido: {
            type: String,
            required: true,
        },
        correo: {
            type: String,
            required: true,
        },
        clave: {
            type: Number,
            required: true,
        },
        tipo: {
            type: String,
            required: true,
        },
        voto: {
            type: String,
            required: true,
        },
        conteoVotos: {
            type: String,
            required: true,
        },
        votoPorM: {
            type: String,
            required: true,
        },
        votoPorF: {
            type: String,
            required: true,
        },
        invitado: {
            type: String,
            required: true,
        },
    },
    {
        collection: 'Usuario',
        versionKey: false
    }
)

export const usuario = new mongoose.model('Usuario', Usuario);