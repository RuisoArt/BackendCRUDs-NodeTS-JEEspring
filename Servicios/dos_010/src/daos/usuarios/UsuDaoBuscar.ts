import { Response } from "express";
import pool from '../../setting/conexion/conexionBD';

class UsuDaoBuscar{

    protected static async encontrarUsuario(sqlBuscar:string, parametros:any, res:Response):Promise<any>{
        await pool.one(sqlBuscar, parametros)
        .then((dato)=>{
            console.log(dato);
            return res.status(200).json({mensaje:"Usuario encontrado", resultado: dato});
        })
        .catch((miError)=>{
            console.log(miError);
            res.status(400).json({mensaje: "Error al Buscar el Usuario, mensaje Dao"});
        });
    }

}
export default UsuDaoBuscar;