import express from 'express';
import rolCtrl from '../controller/rol.controller.js';

const router = express.Router();

router.get('/', rolCtrl.getAllRoles);
router.post('/', rolCtrl.createRol);
router.put('/:id', rolCtrl.updateRol);
router.get('/detalle/:id', rolCtrl.getAllRolId);
router.delete('/:id', rolCtrl.deleteRol);

export default router;
