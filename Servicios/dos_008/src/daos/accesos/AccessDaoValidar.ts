import {Response} from 'express';
import pool from '../../setting/conexion/conexionBD';

class AccessDaoValidar{
    public static async validameAcceso(sqlValidar:string, parametros:any, res:Response):Promise<any>{
        await pool.one(sqlValidar, parametros)
        .then((dato)=>{
            console.log(dato);
            return res.status(200).json({mensaje:"Usuario Confirmado", resultado:dato});
        })
        .catch((miError)=>{
            console.log(miError);
            res.status(400).json({mensaje: "Error con el Acceso, MensajeDao"});
        });
    }
}
export default AccessDaoValidar;