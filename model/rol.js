import mongoose from 'mongoose';
const { Schema } = mongoose;

const RolSchema = new Schema({
    nombreRol: { type: String, required: true },
});

const Rol = mongoose.models.Rol || mongoose.model('Rol', RolSchema);

export default Rol;
