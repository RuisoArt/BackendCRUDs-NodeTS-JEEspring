import { Response } from "express";
import pool from "../../setting/conexion/conexionBD";
import AccessDaoRespuesta from "./AccessDaoRespuesta";

class AccessDaoValidar{
    public static async validameAcceso(sqlValidar:string, parametros:any, res:Response):Promise<any>{
        await pool.oneOrNone(sqlValidar, parametros)
        .then((dato)=>{
            return AccessDaoRespuesta.procesarAcceso(dato, res);
        })
        .catch((miError)=>{
            console.log(miError);
            res.status(500).json({mensaje: "Error con el Acceso [Dao]"});
        });
    }
}
export default AccessDaoValidar;