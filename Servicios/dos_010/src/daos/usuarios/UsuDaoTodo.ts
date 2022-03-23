import { Response } from "express";
import pool from '../../setting/conexion/conexionBD';

class UsuDaoTodo{
    
    public static async obtenerUsuario(sqlConsulta:string, parametros:any, res:Response):Promise<any>{
        pool.result(sqlConsulta, parametros)
        .then((resultado)=>{
            res.status(200).json(resultado.rows);
        })
        .catch((error)=>{
            console.log('Ha Explotado el Sistema', error);
            res.status(418).json({'respuesta':'Error mensaje Dao'});
        });
    }

}
export default UsuDaoTodo;