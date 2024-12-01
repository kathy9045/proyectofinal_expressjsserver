import {Router} from "express";
import { deleteUsuario, 
    getUsuario, 
    getUsuarios, 
    postUsuario, 
    putUsuario } from "../controllers/usuarios";

const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.get('/', postUsuario);
router.get('/:id', putUsuario);
router.get('/:id', deleteUsuario);

export default router;