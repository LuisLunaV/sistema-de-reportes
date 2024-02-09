import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationError } from 'express-validator';

const validateProperties=( req: Request, res: Response, next: NextFunction ):void | any =>{
    const errors = validationResult( req );

    if( !errors.isEmpty()){
        return res.status(400).json( errors.array() as  ValidationError[]);
    }

    next();
}

export{
    validateProperties
}