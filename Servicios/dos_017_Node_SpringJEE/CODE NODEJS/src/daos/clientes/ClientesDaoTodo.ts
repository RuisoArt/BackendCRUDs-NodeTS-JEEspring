import { Response } from "express";
import pool from '../../setting/connections/conexionDataBase';

class ClientesDaoTodo{
    public static async obtenerClientes(sqlConsulta:string, parametro:any, res: Response):Promise<any>{
        pool.result(sqlConsulta, parametro)
        .then((resultado)=>{
            res.status(200).json(resultado.rows);
        })
        .catch((error)=>{
            console.log('Error Dao',error);
            res.status(418).json({'respuesta':'Error Dao'});
        });
    }
}
export default ClientesDaoTodo;