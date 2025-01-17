const mongoose = require('mongoose');
const { Schema } = mongoose;
const Rol = require('./rol');

const UsuarioSchema = new Schema({
        nombreUsuario: { type: String, required: true },
        password: { type: String, required: true },
        rol: { type: Schema.Types.ObjectId, ref: Rol }
})
module.exports = mongoose.models.Usuario || mongoose.model('Usuario', UsuarioSchema);

