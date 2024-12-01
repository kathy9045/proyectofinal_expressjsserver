import {Request, Response} from "express";


export const getUsuarios = (req: Request, rest: Response) => {

    rest.json({
        msg: 'Servicio de consulta de usuarios'
    })
}

export const getUsuario = (req: Request, res: Response) => {

    const { id } = req.params;
    res.json({
        msg: 'Servicio para consulta de un usuario especifico por id',
        id
    })
}

export const postUsuario = (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        msg: 'Servicio de construccion y agregado de usuarios',
        body
    })
}

export const putUsuario = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'Servicio para editar usuarios por id especifico',
        body,
        id
    })
}

export const deleteUsuario = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'Servicio para eliminacion de usuarios por id especifico',
        id
    })
}