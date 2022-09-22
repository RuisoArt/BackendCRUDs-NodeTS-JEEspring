import { Response } from "express";
import pool from '../../setting/connections/conexionDataBase';

class EditorialesDaoTodo{
    public static async obtenerEditoriales(sqlConsulta:string, parametros:any, res: Response):Promise<any>{
        pool.result(sqlConsulta, parametros)
        .then((resultado)=>{
            res.status(200).json(resultado.rows);
        })
        .catch((error)=>{
            console.log('Error Dao',error);
            res.status(418).json({'respuesta':'Error Dao'});
        });
    }
}
export default EditorialesDaoTodo;