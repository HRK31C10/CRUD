import { Router } from "express";
import { Request, Response } from "express";
import * as usuarioController from '../controllers/usuarioController'

const router = Router()

router.get('/',(req:Request,res:Response) =>{
    res.send("TESTE!")
})

router.get('/usuarios',usuarioController.index)

router.get('/cadastrar',usuarioController.link)

router.post('/cadastrar', usuarioController.cadastroUsuario)

router.get('/editar/:id'), usuarioController.editaUsuario

export default router