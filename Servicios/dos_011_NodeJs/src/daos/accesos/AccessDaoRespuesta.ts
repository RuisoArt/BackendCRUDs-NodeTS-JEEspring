import {Response} from 'express';
import token from 'jsonwebtoken';
// import pool from '../../setting/conexion/conexionBD';

class AccessDaoRespuesta{

    public static async procesarAcceso(registro:any, res:Response):Promise<any>{
        if (registro!=null) {
            console.log(registro);
            const jsonToken = token.sign({identificador:registro.codAcceso, rolUsuario: registro.nombreRol, DosDev:'' }, 'claveDelToken', {expiresIn:'1h'});
            return res.status(200).json({token:jsonToken});
        } else {
            return res.status(401).json({mensaje:'El Usuario es Incorrecto'});
        } 
    }
}
export default AccessDaoRespuesta;