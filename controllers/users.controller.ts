import {Request, Response} from 'express';

export const users = {
    getUsers:( req: Request, res: Response )=>{
        try {
            
            res.status(200).json({
                msg:'Hola mundo desde controller'
            })

        } catch (error) {
            res.status(404).json({
                msg: "Fallo la busqueda de usuarios, comunicate con el administrador",
                error
            })
        }
    },

    getUserById: ( req: Request, res: Response )=>{
        try {
            
        } catch (error) {
            res.status(404).json({
                msg: "Fallo la busqueda del usuario, comunicate con el administrador",
                error
            })
        }
    },

    postUsers: ( req: Request, res: Response )=>{
        try {
            
        } catch (error) {
            res.status(500).json({
                msg: "Error al crear usuario",
                error
            })
        }
    },

    putUser: ( req: Request, res: Response )=>{
        try {
            
        } catch (error) {
            res.status(500).json({
                msg: "Error al actualizar usuario, comunicate con el administrador",
                error
            })
        }
    },

    deleteUser: ( req: Request, res: Response )=>{
        try {
            
        } catch (error) {
            res.status(500).json({
                msg: 'Error al eliminar el usuario, comunicate con el administrador',
                error: error
              })
        }
    }


};

