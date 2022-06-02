import {Response} from 'express';
import pool from '../../setting/connections/conexionDataBase';

class EditorialesDaoBorrar{
    protected static async eliminarEditorial(sqlEliminar:string, parametros:any, res:Response):Promise<any> {
        await pool.result(sqlEliminar, parametros)
        .then((dato)=>{
            console.log("El dato que tenemos es: ", dato);
            return res.status(200).json({mensaje:"La editorial a sido eliminada, Mensaje Dao", resultado: dato.rowCount});
        })
        .catch((miError)=>{
            console.log("Error al aliminar la Editorial: ", miError);
            res.status(400).json({mensaje: "Error al destruir la Editorial"});
        });
        
    }
}
export default EditorialesDaoBorrar;