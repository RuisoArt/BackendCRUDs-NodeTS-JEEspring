import { Response } from "express";
import pool from "../../setting/conexion/conexionBD";

class AccessDaoContar{
    public static async contarAccesos(sqlContar:string, parametros:any, res:Response):Promise<any>{
        pool.result(sqlContar, parametros)
        .then((resultado)=>{
            res.status(200).json(resultado.rows);
        })
        .catch((error)=>{
            console.log('Ha Explotado el Ingreso', error);
            res.status(418).json({'respuesta':'Error mensaje Dao'});
        });
    }
}
export default AccessDaoContar;