import jwt from 'jsonwebtoken';
import {Request, Response} from 'express';
import { NextFunction } from 'express';

class Validacion {
    // Response : respuesta que nosotros damos
    // Request : peticion que biene del frontend
    // NextFunction : 
    public validarToken(req:Request, res:Response, next:NextFunction):any{
        if(!req.headers.authorization){
            res.status(401).json({message:'Exploto la Cabecera'});
        }else{
            try{
                const miToken = req.headers.authorization.split(' ')[1] as string;
                const informacion = jwt.verify(miToken, 'claveDelToken'); //el payload del token
                req.body.datosUtiles = informacion; //para tener la informacion de validacion disponible despues de la entrada para lo que necesitemos
                next();
            }catch(error){
                res.status(401).json({message: 'Token invalido'});
            }
        }
    }

}
const validacion = new Validacion();
export default validacion;