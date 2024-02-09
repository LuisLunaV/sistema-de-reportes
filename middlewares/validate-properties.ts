import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationError } from 'express-validator';
// Middleware para validar propiedades en una solicitud
const validateProperties=( req: Request, res: Response, next: NextFunction ):void | any =>{
        // Validar la solicitud y obtener los errores de validación
    const errors = validationResult( req );
  // Verificar si hay errores de validación
    if( !errors.isEmpty()){
        // Si hay errores, enviar una respuesta de error con los detalles de los errores
        return res.status(400).json( errors.array() as  ValidationError[]);
    }
 // Si no hay errores, continuar con el siguiente middleware en la cadena
    next();
}

export{
    validateProperties
}